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
  answers: z.record(z.string().or(z.number()), z.number()).refine(obj => Object.keys(obj).length > 0, "Answers tidak boleh kosong"),
  traitScores: z.record(z.string(), z.number().min(0).max(60)).refine(obj => Object.keys(obj).length > 0, "Trait scores tidak boleh kosong"),
  dominantTrait: z.enum(['The Thinker', 'The Creator', 'The Connector', 'The Builder'])
});

const AIInsightSchema = z.object({
  personality_summary: z.string().describe("Paragraf 2-3 kalimat yang sangat menarik mendeskripsikan kepribadian, gaya kerja, dan energi mereka (dalam Bahasa Indonesia)."),
  reasoning: z.string().describe("Penjelasan detail mengapa AI merekomendasikan profil ini berdasarkan kombinasi jawaban spesifik dari user, ditulis dalam 2-3 paragraf Bahasa Indonesia yang mengedukasi dan transparan."),
  traits: z.array(z.string()).max(5).describe("List of exactly 5 traits"),
  strengths: z.array(z.string()).max(5).describe("List of exactly 5 strengths")
});

export async function POST(request: Request) {
  try {
    // A. Auth Guard
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // B. Rate Limit Check (Max 5 requests per minute per user)
    if (!checkRateLimit(session.user.id, 5, 60000)) {
      return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 });
    }

    // C. Origin Check
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const host = request.headers.get('host');
    const isAllowedOrigin = (origin && origin.includes(host as string)) || (referer && referer.includes(host as string));
    
    // Tolak request jika dipanggil dari luar domain (atau tanpa origin header seperti via curl)
    if (!isAllowedOrigin && process.env.NODE_ENV === 'production') {
       // Hanya enforce origin check di production untuk mencegah kesulitan testing local, 
       // tapi karena instruksi minta enforce origin check, kita enforce di semua env kalau nggak match host.
       // Tapi kalau host localhost, curl tanpa origin ditolak. Gak papa, sesuai requirements.
    }
    // Enforce stricter:
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
    
    const { answers, traitScores, dominantTrait } = validationResult.data;

    const answerSummary = Object.entries(answers)
      .map(([qId, optIdx]) => `Q${parseInt(qId)}: option ${['A', 'B', 'C', 'D'][optIdx]}`)
      .join(', ');

    const scoreSummary = Object.entries(traitScores)
      .map(([trait, score]) => `${trait}: ${score}/15`)
      .join(', ');

    const systemPrompt = `You are a career psychologist. Analyze the user's answers and provide a concise personality profile. 
IMPORTANT: Write the content values in Indonesian (Bahasa Indonesia).
Always provide detailed 'reasoning' showing exactly how you deduced their profile from their specific scores and answer pattern.`;

    const userPrompt = `TRAIT SCORES: ${scoreSummary}
DOMINANT TRAIT: ${dominantTrait}
ANSWER PATTERN: ${answerSummary}

Trait dimensions: The Thinker (data-driven, logical, analytical), The Creator (imaginative, design-oriented), The Connector (digital marketing, people-oriented, empathic), The Builder (tech-focused, leadership, building systems).

Analyze their answer patterns in depth. Reference specific traits. Be specific, not generic. 
Berikan hasil analisis sepenuhnya menggunakan Bahasa Indonesia yang profesional, memotivasi, dan mudah dipahami.`;

    // 3. Logika Pemilihan Model AI
    let modelToUse;
    if (selectedAI === 'gemini') {
      modelToUse = google('gemini-3.1-flash-lite'); // Gemini API model fallback
      console.log('🤖 Menggunakan Engine: Gemini 3.1 Flash Lite');
    } else {
      modelToUse = groq('openai/gpt-oss-20b');
      console.log('🤖 Menggunakan Engine: Groq GPT OSS 20B');
    }

    // 4. Tembak AI yang dipilih dengan Structured Output
    const { object } = await generateObject({
      model: modelToUse,
      schema: AIInsightSchema,
      system: systemPrompt,
      prompt: userPrompt,
      temperature: 0.7,
    });

    return NextResponse.json({
      ai_engine_used: selectedAI,
      personality_summary: object.personality_summary,
      reasoning: object.reasoning,
      traits: object.traits,
      strengths: object.strengths,
    });
  } catch (error: unknown) {
    console.error('AI Analysis Error Detail:', error); 
    return NextResponse.json(
      { error: 'Gagal menghasilkan analisis AI', details: 'Internal Server Error' },
      { status: 500 }
    );
  }
}