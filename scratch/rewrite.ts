import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const API_KEY = process.env.GEMINI_API_KEY;

async function processRoles() {
    const { quizBank } = await import('../src/data/quizBank');
    
    const rolesToProcess = [
        'software-engineer',
        'ui-ux-designer',
        'digital-marketing'
    ];
    
    for (const role of rolesToProcess) {
        console.log(`Processing role: ${role}`);
        const questionsArray = quizBank[role];
        
        for (let i = 0; i < questionsArray.length; i++) {
            let q = questionsArray[i];
            console.log(`  Question ${i+1}/${questionsArray.length}`);
            
            const prompt = `Kamu adalah psikolog karier dan technical expert.
Diberikan soal kuis studi kasus.
Pertanyaan lama: ${q.question}
Opsi A (Score ${q.options[0].score}): ${q.options[0].text}
Opsi B (Score ${q.options[1].score}): ${q.options[1].text}
Opsi C (Score ${q.options[2].score}): ${q.options[2].text}

Tugasmu:
1. Ubah pertanyaan menjadi SEBUAH SKENARIO DILEMATIS (GENUINE DILEMMA) dengan situasi dunia kerja nyata (trade-off) tanpa ada jawaban yang secara objektif paling benar atau salah.
2. Buat ulang 3 opsi jawaban (Score 10, Score 5, Score 0) dengan prinsip HOTS (Higher Order Thinking Skills):
   - **TIDAK ADA JAWABAN YANG OBJEKTIF BURUK/SALAH ATAU BENAR MUTLAK.**
   - Setiap opsi harus SAMA-SAMA MASUK AKAL, VALID, dan DEFENSIBLE secara profesional.
   - Perbedaan antar opsi BUKAN benar vs salah, tapi prioritas/trade-off.
   - **Opsi Score 10 (The Expert):** Prioritas pada efisiensi jangka panjang, kualitas teknis/arsitektur, atau penyelesaian akar masalah secara struktural. 
   - **Opsi Score 5 (The Builder/Pragmatic):** Prioritas pada kecepatan eksekusi, kompromi bisnis jangka pendek, hasil instan, atau menyelamatkan target/tenggat waktu.
   - **Opsi Score 0 (The Connector/Social):** Prioritas pada menjaga hubungan baik, mendengarkan semua pihak (klien/tim), harmoni, dan penyelarasan visi bersama.
   - DILARANG KERAS menggunakan reaksi emosional negatif (marah, panik, menyerah, menyalahkan). Semua opsi harus terlihat seolah-olah ditulis oleh profesional handal yang memiliki nilai/value berbeda.
   - Panjang, gaya bahasa, dan tone semua opsi HARUS seragam. Acak posisi opsi Score 10, Score 5, dan Score 0 agar tidak tertebak posisinya.

OUTPUT FORMAT JSON:
{
  "question": "Skenario dilematis baru...",
  "options": [
     { "text": "Opsi...", "score": <number> },
     { "text": "Opsi...", "score": <number> },
     { "text": "Opsi...", "score": <number> }
  ]
}
OUTPUT HANYA JSON tanpa format backtick markdown.`;

            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${API_KEY}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }],
                        generationConfig: { temperature: 0.4, responseMimeType: "application/json" }
                    })
                });
                
                const data = await response.json();
                if (data.candidates && data.candidates[0].content.parts[0].text) {
                    const text = data.candidates[0].content.parts[0].text;
                    const parsed = JSON.parse(text);
                    if (parsed.question && Array.isArray(parsed.options) && parsed.options.length === 3) {
                        q.question = parsed.question;
                        q.options[0].text = parsed.options[0].text;
                        q.options[0].score = parsed.options[0].score;
                        q.options[1].text = parsed.options[1].text;
                        q.options[1].score = parsed.options[1].score;
                        q.options[2].text = parsed.options[2].text;
                        q.options[2].score = parsed.options[2].score;
                    }
                } else {
                    console.error("  Error response: ", JSON.stringify(data));
                }
                
                await new Promise(r => setTimeout(r, 4100)); // Rate limit 15 RPM (4.1s per request)
            } catch (e) {
                const message = e instanceof Error ? e.message : String(e);
                console.error("  Error generating for Q" + (i+1), message);
            }
        }
    }
    
    const jsonStr = JSON.stringify(quizBank, null, 4);
    const newContent = `export type QuizOption = {
    label: string;
    text: string;
    score: number;
};

export type QuizQuestion = {
    id: string;
    question: string;
    options: QuizOption[];
};

export const quizBank: Record<string, QuizQuestion[]> = ${jsonStr};
`;
    fs.writeFileSync(path.join(process.cwd(), 'src/data/quizBank.ts'), newContent, 'utf-8');
    console.log("Done rewriting!");
}

processRoles();

