import { createGroq } from '@ai-sdk/groq';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateObject } from 'ai';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { auth } from '@/auth';
import { checkRateLimit } from '@/lib/rateLimit';

// 1. Inisialisasi Provider
const groq = createGroq({ apiKey: process.env.GROQ_API_KEY || '' });
const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY || '' });
const deepseek = createOpenAICompatible({
  name: 'deepseek',
  apiKey: process.env.DEEPSEEK_API_KEY || '',
  baseURL: 'https://api.deepseek.com/v1',
});

// 2. Definisi Skema Zod Input & Output
const RequestSchema = z.object({
  roleName: z.string().min(1, "Role name tidak boleh kosong"),
  skillGapData: z.array(z.object({
    name: z.string(),
    current: z.number().min(0).max(10),
    required: z.number().min(0).max(10)
  })).min(1, "Skill gap data tidak boleh kosong")
});

const GapInsightSchema = z.object({
  basis_penilaian: z.string().describe("Sumber data atau dasar evaluasi skill ini. Harus persis atau setara dengan kalimat: 'Berdasarkan profil role yang kamu pilih'"),
  kesesuaian: z.array(z.string()).describe("Daftar 2-4 poin ringkas skill yang sudah match atau melebihi ekspektasi"),
  kekurangan: z.array(z.string()).describe("Daftar 2-4 poin ringkas skill yang masih kurang dan menjadi area pengembangan"),
  catatan_singkat: z.string().describe("Satu kalimat motivasi/catatan ringkas yang personal berdasarkan hasil gap"),
});

export async function POST(request: Request) {
  try {
    // A. Auth Guard
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // B. Rate Limit Check (Max 15 requests per minute per user)
    if (!checkRateLimit(session.user.id, 15, 60000)) {
      return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 });
    }

    // C. Origin Check
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const host = request.headers.get('host');
    const isAllowedOrigin = (origin && origin.includes(host as string)) || (referer && referer.includes(host as string));
    
    if (!isAllowedOrigin && (origin || referer)) {
       return NextResponse.json({ error: 'Forbidden Origin' }, { status: 403 });
    }

    const rawBody = await request.json();
    
    // D. Validasi Zod
    const validationResult = RequestSchema.safeParse(rawBody);
    if (!validationResult.success) {
      return NextResponse.json({ error: 'Bad Request', details: validationResult.error.format() }, { status: 400 });
    }

    const { skillGapData, roleName } = validationResult.data;

    const gapSummary = skillGapData
      .map(gap => `${gap.name}: User Level ${gap.current}, Required Level ${gap.required}`)
      .join(', ');

    const systemPrompt = `You are an expert career counselor. Analyze the user's skill levels against the required skills for the role of "${roleName}".
IMPORTANT: Write all content in Indonesian (Bahasa Indonesia).
The data is based on the selected role profile (profil role yang kamu pilih).
Create a balanced and highly personalized skill gap reasoning based exactly on the provided gap summary.
If a user is lacking in some skills, explicitly connect that to the idea that these can be developed through a structured learning roadmap.`;

    const userPrompt = `ROLE: ${roleName}
SKILL GAP DATA: ${gapSummary}

Berikan analisis terstruktur menggunakan Bahasa Indonesia yang profesional dan memotivasi.`;

    // 3. Eksekusi AI dengan Multi-Tier Fallback (Gemini -> DeepSeek -> Heuristik)
    let object;
    let engineUsed = 'gemini-3.7-flash';

    try {
      if (process.env.GEMINI_API_KEY) {
        const result = await generateObject({
          model: google('gemini-3.7-flash'),
          schema: GapInsightSchema,
          system: systemPrompt,
          prompt: userPrompt,
          temperature: 0.5,
        });
        object = result.object;
      } else {
        throw new Error('GEMINI_API_KEY missing');
      }
    } catch (primaryError: any) {
      console.warn('⚠️ Gemini 3.7 Flash terkendala, mencoba fallback ke DeepSeek V4 Flash...', primaryError?.message);
      try {
        if (process.env.DEEPSEEK_API_KEY) {
          const deepseekResult = await generateObject({
            model: deepseek('deepseek-v4-flash'),
            schema: GapInsightSchema,
            system: systemPrompt,
            prompt: userPrompt,
            temperature: 0.5,
          });
          object = deepseekResult.object;
          engineUsed = 'deepseek-v4-flash';
        } else {
          throw new Error('DEEPSEEK_API_KEY missing');
        }
      } catch (deepseekError: any) {
        console.warn('⚠️ DeepSeek terkendala, mencoba fallback ke Gemini Lite...', deepseekError?.message);
        try {
          if (process.env.GEMINI_API_KEY) {
            const liteResult = await generateObject({
              model: google('gemini-3.1-flash-lite'),
              schema: GapInsightSchema,
              system: systemPrompt,
              prompt: userPrompt,
              temperature: 0.5,
            });
            object = liteResult.object;
            engineUsed = 'gemini-3.1-flash-lite';
          } else {
            throw new Error('GEMINI_API_KEY missing');
          }
        } catch (liteError: any) {
          console.warn('⚠️ Semua LLM API terkendala, menggunakan analisis kesenjangan terstruktur...', liteError?.message);
          
          const matching = skillGapData
            .filter(s => s.current >= s.required)
            .map(s => `Pemahaman kompetensi pada ${s.name} sudah memenuhi standar yang diharapkan.`);
          const gaps = skillGapData
            .filter(s => s.current < s.required)
            .map(s => `Perlu peningkatan pada ${s.name} (level saat ini: ${s.current} dari target ${s.required}).`);

          object = {
            basis_penilaian: 'Berdasarkan profil role yang kamu pilih',
            kesesuaian: matching.length > 0 ? matching.slice(0, 3) : [`Fondasi awal yang baik untuk memulai pemahaman peran ${roleName}.`],
            kekurangan: gaps.length > 0 ? gaps.slice(0, 3) : [`Pertajam keterampilan teknis melalui pengerjaan proyek studi kasus nyata.`],
            catatan_singkat: `Tingkatkan kompetensimu secara terarah melalui modul-modul roadmap ${roleName} yang telah dirancang.`
          };
          engineUsed = 'structured-heuristic';
        }
      }
    }

    return NextResponse.json({
      ai_engine_used: engineUsed,
      ...object
    });
  } catch (error: unknown) {
    console.error('Gap AI Analysis Error Detail:', error); 
    return NextResponse.json(
      { error: 'Gagal menghasilkan analisis AI untuk skill gap', details: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
