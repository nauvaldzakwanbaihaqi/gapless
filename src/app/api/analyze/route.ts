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
const AIInsightSchema = z.object({
  personality_summary: z.string().describe("Paragraf 2-3 kalimat yang sangat menarik mendeskripsikan kepribadian, gaya kerja, dan energi mereka (dalam Bahasa Indonesia)."),
  reasoning: z.string().describe("Penjelasan detail mengapa AI merekomendasikan profil ini berdasarkan kombinasi jawaban spesifik dari user, ditulis dalam 2-3 paragraf Bahasa Indonesia yang mengedukasi dan transparan."),
  traits: z.array(z.string()).max(5).describe("List of exactly 5 traits"),
  strengths: z.array(z.string()).max(5).describe("List of exactly 5 strengths")
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
    const { answers, traitScores, dominantTrait } = body as {
      answers: Record<number, number>;
      traitScores: Record<string, number>;
      dominantTrait: string;
    };

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
      modelToUse = groq('llama-3.3-70b-versatile');
      console.log('🤖 Menggunakan Engine: Groq LLaMA 3.3');
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
  } catch (error: any) {
    console.error('AI Analysis Error Detail:', error); 
    return NextResponse.json(
      { error: 'Gagal menghasilkan analisis AI', details: error.message, stack: error.stack },
      { status: 500 }
    );
  }
}