import { createGroq } from '@ai-sdk/groq';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { auth } from '@/auth';
import { checkRateLimit } from '@/lib/rateLimit';



// 1. Inisialisasi KEDUA Provider
const groq = createGroq({ apiKey: process.env.GROQ_API_KEY || '' });
const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY || '' });

// 2. Definisi Skema Zod Input & Output
const RequestSchema = z.object({
  roleName: z.string().min(1, "Role name tidak boleh kosong"),
  skillGapData: z.array(z.object({
    name: z.string(),
    current: z.number().min(0).max(10), // Memberi sedikit toleransi max 10
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

    const url = new URL(request.url);
    const selectedAI = url.searchParams.get('ai') || 'groq'; // Default ke groq

    // Guard Clause API Keys
    if (selectedAI === 'groq' && !process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: "GROQ_API_KEY is missing!" }, { status: 500 });
    }
    if (selectedAI === 'gemini' && !process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY is missing!" }, { status: 500 });
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

    // 3. Logika Pemilihan Model AI
    let modelToUse;
    if (selectedAI === 'gemini') {
      modelToUse = google('gemini-3.6-flash');
      console.log('🤖 Menggunakan Engine: Gemini 3.6 Flash (Gap Analysis)');
    } else {
      modelToUse = groq('openai/gpt-oss-20b');
      console.log('🤖 Menggunakan Engine: Groq GPT OSS 20B (Gap Analysis Default)');
    }

    // 4. Tembak AI yang dipilih dengan Structured Output
    const { object } = await generateObject({
      model: modelToUse,
      schema: GapInsightSchema,
      system: systemPrompt,
      prompt: userPrompt,
      temperature: 0.5,
    });

    return NextResponse.json({
      ai_engine_used: selectedAI,
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
