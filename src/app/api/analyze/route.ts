import { createGroq } from '@ai-sdk/groq';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

// 1. Inisialisasi KEDUA Provider
const groq = createGroq({ apiKey: process.env.GROQ_API_KEY || '' });
const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function POST(request: Request) {
  try {
    // 2. Baca saklar AI dari URL (contoh: /api/analyze?ai=gemini)
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
IMPORTANT: Write the content values in Indonesian (Bahasa Indonesia). The JSON keys must remain in English.
Respond ONLY with a valid JSON object. DO NOT wrap it in markdown blockquotes.
Schema:
{
  "personality_summary": "Paragraf 2-3 kalimat yang sangat menarik mendeskripsikan kepribadian, gaya kerja, dan energi mereka (dalam Bahasa Indonesia).",
  "traits": ["Sifat1", "Sifat2", "Sifat3", "Sifat4", "Sifat5"],
  "strengths": ["Kekuatan1", "Kekuatan2", "Kekuatan3", "Kekuatan4", "Kekuatan5"]
}`;

    const userPrompt = `TRAIT SCORES: ${scoreSummary}
DOMINANT TRAIT: ${dominantTrait}
ANSWER PATTERN: ${answerSummary}

Trait dimensions: The Thinker (data-driven, logical, analytical), The Creator (imaginative, design-oriented), The Connector (digital marketing, people-oriented, empathic), The Builder (tech-focused, leadership, building systems).

Analyze their answer patterns in depth. Reference specific traits. Be specific, not generic. 
Berikan hasil analisis (values dari JSON) sepenuhnya menggunakan Bahasa Indonesia yang profesional, memotivasi, dan mudah dipahami.`;

    // 3. Logika Pemilihan Model AI
    let modelToUse;
    if (selectedAI === 'gemini') {
      modelToUse = google('gemini-3.1-flash-lite');
      console.log('🤖 Menggunakan Engine: Gemini 3.1 Flash Lite');
    } else {
      modelToUse = groq('llama-3.3-70b-versatile');
      console.log('🤖 Menggunakan Engine: Groq LLaMA 3.3');
    }

    // 4. Tembak AI yang dipilih
    const { text } = await generateText({
      model: modelToUse,
      system: systemPrompt,
      prompt: userPrompt,
      temperature: 0.7,
    });

    // 5. Hacker-Grade JSON Cleaner
    const cleanJson = text.replace(/```json/gi, "").replace(/```/gi, "").trim();
    const parsed = JSON.parse(cleanJson);

    return NextResponse.json({
      ai_engine_used: selectedAI, // <-- Info tambahan buat lu ngecek di frontend/network
      personality_summary: parsed.personality_summary || '',
      traits: Array.isArray(parsed.traits) ? parsed.traits.slice(0, 5) : [],
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths.slice(0, 5) : [],
    });
  } catch (error: any) {
    console.error('AI Analysis Error Detail:', error); 
    return NextResponse.json(
      { error: 'Gagal menghasilkan analisis AI', details: error.message, stack: error.stack },
      { status: 500 }
    );
  }
}