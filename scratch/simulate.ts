import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { quizBank } from '../src/data/quizBank.js';

const API_KEY = process.env.GEMINI_API_KEY;

async function ask(prompt: string) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.1 }
        })
    });
    const data = await response.json();
    return data.candidates[0].content.parts[0].text.trim();
}

async function validateRole(role: string) {
    console.log(`\n=== VALIDASI ROLE: ${role} ===`);
    const q = quizBank[role][0];
    
    const basePrompt = `Diberikan soal ini:
Pertanyaan: ${q.question}
A: ${q.options[0].text}
B: ${q.options[1].text}
C: ${q.options[2].text}
Opsi mana yang akan kamu pilih? Jawab HANYA DENGAN HURUF (A, B, atau C).`;

    const personas = [
        { name: "Expert (Thinker)", desc: `Kamu adalah senior expert di bidang ${role}. Kamu memprioritaskan penyelesaian akar masalah, arsitektur jangka panjang, dan kualitas teknis di atas segalanya.` },
        { name: "Pragmatic (Builder)", desc: `Kamu adalah eksekutor cepat di bidang ${role}. Kamu memprioritaskan penyelesaian tugas secepat mungkin, memenuhi target bisnis/tenggat waktu, dan tidak masalah dengan kompromi teknis asalkan jalan.` },
        { name: "Social (Connector)", desc: `Kamu adalah komunikator handal di bidang ${role}. Kamu sangat menghindari konflik, memprioritaskan harmoni tim, menjaga hubungan baik dengan klien, dan selalu mendengarkan keluhan semua pihak sebelum bertindak.` },
        { name: "Awam (Layman)", desc: `Kamu adalah orang awam yang TIDAK PUNYA pengetahuan teknis tentang ${role}. Kamu menjawab hanya mengandalkan insting umum dan memilih jawaban yang paling enak didengar secara moral dan sosial.` }
    ];

    for (const p of personas) {
        const prompt = `${p.desc}\n${basePrompt}`;
        const ans = await ask(prompt);
        console.log(`[${role}] ${p.name} memilih: ${ans}`);
    }
    
    console.log("Kunci Jawaban Sebenarnya:");
    q.options.forEach(opt => {
        console.log(`  ${opt.label}: Score ${opt.score}`);
    });
}

async function run() {
    await validateRole('software-engineer');
    await validateRole('ui-ux-designer');
    await validateRole('digital-marketing');
}

run();
