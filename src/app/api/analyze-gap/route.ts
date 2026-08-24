import { createGroq } from '@ai-sdk/groq';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'edge';

// 1. Inisialisasi KEDUA Provider
const groq = createGroq({ apiKey: process.env.GROQ_API_KEY || '' });
const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY || '' });

// 2. Definisi Skema Zod
const GapInsightSchema = z.object({
  basis_penilaian: z.string().describe("Sumber data atau dasar evaluasi skill ini. Harus persis atau setara dengan kalimat: 'Berdasarkan riset kebutuhan skill industri terkini untuk role ini'"),
  kesesuaian: z.array(z.string()).describe("Daftar 2-4 poin ringkas skill yang sudah match atau melebihi ekspektasi"),
  kekurangan: z.array(z.string()).describe("Daftar 2-4 poin ringkas skill yang masih kurang dan menjadi area pengembangan"),
  catatan_singkat: z.string().describe("Satu kalimat motivasi/catatan ringkas yang personal berdasarkan hasil gap"),
});

export async function POST(request: Request) {
  try {
    const url = new URL(request.url);
    const selectedAI = url.searchParams.get('ai') || 'groq'; // Default ke groq

    // Guard Clause API Keys
    if (selectedAI === 'groq' && !process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: "GROQ_API_KEY is missing!" }, { status: 500 });
    }
    if (selectedAI === 'gemini' && !process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY is missing!" }, { status: 500 });
    }

    const body = await request.json();
    const { skillGapData, roleName } = body as {
      skillGapData: any[];
      roleName: string;
    };

    const gapSummary = skillGapData
      .map(gap => `${gap.name}: User Level ${gap.userLevel}, Required Level ${gap.required}`)
      .join(', ');

    const systemPrompt = `You are an expert career counselor. Analyze the user's skill levels against the required skills for the role of "${roleName}".
IMPORTANT: Write all content in Indonesian (Bahasa Indonesia).
The data is based on current industry standards (riset kebutuhan skill industri terkini).
Create a balanced and highly personalized skill gap reasoning based exactly on the provided gap summary.
If a user is lacking in some skills, explicitly connect that to the idea that these can be developed through a structured learning roadmap.`;

    const userPrompt = `ROLE: ${roleName}
SKILL GAP DATA: ${gapSummary}

Berikan analisis terstruktur menggunakan Bahasa Indonesia yang profesional dan memotivasi.`;

    // 3. Logika Pemilihan Model AI
    let modelToUse;
    if (selectedAI === 'gemini') {
      modelToUse = google('gemini-3.1-flash-lite');
      console.log('🤖 Menggunakan Engine: Gemini 3.1 Flash Lite (Gap Analysis)');
    } else {
      modelToUse = groq('llama-3.3-70b-versatile');
      console.log('🤖 Menggunakan Engine: Groq LLaMA 3.3 (Gap Analysis)');
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
  } catch (error: any) {
    console.error('Gap AI Analysis Error Detail:', error); 
    return NextResponse.json(
      { error: 'Gagal menghasilkan analisis AI untuk skill gap', details: error.message, stack: error.stack },
      { status: 500 }
    );
  }
}
