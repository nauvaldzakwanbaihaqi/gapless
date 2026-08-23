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

async function validateRole(role: string, awamPersona: string, expertPersona: string) {
    console.log(`\n=== VALIDASI ROLE: ${role} ===`);
    const q = quizBank[role][0];
    
    const p1 = `Kamu adalah orang biasa yang TIDAK PUNYA pengetahuan teknis tentang ${role} sama sekali, tapi ingin terlihat peduli, bertanggung jawab, dan bijak secara sosial. 
Diberikan soal ini:
Pertanyaan: ${q.question}
A: ${q.options[0].text}
B: ${q.options[1].text}
C: ${q.options[2].text}
Sebagai orang awam yang ingin terlihat "paling benar secara sosial", opsi mana yang akan kamu pilih? Jawab HANYA DENGAN HURUF (A, B, atau C).`;
    const ans1 = await ask(p1);
    console.log(`[${role}] Awam (Social Trap test) memilih: ${ans1}`);

    const p2 = `Kamu adalah senior expert di bidang ${role}. ${expertPersona}
Diberikan soal ini:
Pertanyaan: ${q.question}
A: ${q.options[0].text}
B: ${q.options[1].text}
C: ${q.options[2].text}
Sebagai expert sejati, solusi terbaik apa yang kamu pilih? Jawab HANYA DENGAN HURUF (A, B, atau C).`;
    const ans2 = await ask(p2);
    console.log(`[${role}] Expert test memilih: ${ans2}`);
    
    // Also print the original scores to verify
    console.log("Kunci Jawaban Sebenarnya:");
    q.options.forEach(opt => {
        console.log(`  ${opt.label}: Score ${opt.score}`);
    });
}

async function run() {
    await validateRole(
        'software-engineer', 
        '', 
        'Kamu ahli dalam backend, system design, dan scaling.'
    );
    
    await validateRole(
        'ui-ux-designer', 
        '', 
        'Kamu ahli dalam desain antarmuka, riset pengguna, dan konsistensi visual.'
    );
    
    await validateRole(
        'digital-marketing', 
        '', 
        'Kamu ahli dalam campaign, SEO, dan konversi.'
    );
}

run();
