import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { ASSESSMENT_QUESTIONS } from '../src/data/gaplessData';
import { fileURLToPath } from 'url';

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("Missing GEMINI_API_KEY");
    process.exit(1);
}

async function run() {
    const rewrittenQuestions = [];
    
    for (let i = 0; i < ASSESSMENT_QUESTIONS.length; i++) {
        const q = ASSESSMENT_QUESTIONS[i];
        console.log(`Processing Archetype Question ${i+1}/${ASSESSMENT_QUESTIONS.length}`);
        
        const prompt = `Kamu adalah psikolog karier yang menggunakan kerangka asesmen RIASEC (Holland Code). Diberikan soal kuis minat karier (archetype assessment).
Dimensi atau Topik: ${q.dimension}

Tugasmu:
1. GANTI format pertanyaan skenario situasional menjadi format **Tes Minat (Interest Inventory) khas RIASEC**.
2. Pertanyaannya harus berkisar tentang: "Aktivitas mana yang paling kamu minati?", "Apa yang paling ingin kamu pelajari?", "Lingkungan kerja seperti apa yang paling membuatmu nyaman?", atau "Masalah apa yang paling kamu suka untuk diselesaikan?".
3. Buat ulang 4 opsi jawaban tersebut berdasarkan 4 profil Archetype yang dikawinkan dengan RIASEC:
   - **Opsi Thinker (Investigative):** Aktivitas yang melibatkan riset mendalam, analisis data, berpikir kritis, memecahkan masalah teoritis, atau sains.
   - **Opsi Creator (Artistic):** Aktivitas yang melibatkan kreativitas, desain visual, seni, ekspresi diri, inovasi, dan kebebasan tanpa aturan kaku.
   - **Opsi Connector (Social/Enterprising):** Aktivitas yang melibatkan interaksi dengan orang lain, persuasi, mengajar, membantu, negosiasi, atau memimpin tim.
   - **Opsi Builder (Realistic/Conventional):** Aktivitas yang melibatkan eksekusi praktis, struktur, bekerja dengan alat/sistem, keteraturan, keterprediksian, atau membangun sesuatu yang nyata.
4. JANGAN gunakan skenario "apa yang kamu lakukan saat terjadi masalah X". Fokus murni pada **Preferensi, Hobi, Ketertarikan, dan Lingkungan Kerja Ideal**.
5. Panjang kalimat dari ke-4 opsi HARUS seragam dan pendek (maksimal 1 kalimat). Gunakan bahasa Indonesia kasual tapi profesional.
6. Hindari menyebutkan nama profesi secara gamblang (jangan bilang "Saya suka jadi desainer"). Gunakan aktivitasnya (misal: "Saya suka merancang tata letak visual").

OUTPUT FORMAT JSON:
{
  "question": "Pertanyaan preferensi/minat baru...",
  "options": [
    "Opsi minat Thinker",
    "Opsi minat Creator",
    "Opsi minat Connector",
    "Opsi minat Builder"
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
                
                const newQ = JSON.parse(JSON.stringify(q));
                if (parsed.question && Array.isArray(parsed.options) && parsed.options.length === 4) {
                    newQ.question = parsed.question;
                    newQ.options[0].text = parsed.options[0]; // Thinker
                    newQ.options[1].text = parsed.options[1]; // Creator
                    newQ.options[2].text = parsed.options[2]; // Connector
                    newQ.options[3].text = parsed.options[3]; // Builder
                    rewrittenQuestions.push(newQ);
                } else {
                    console.error("  Invalid format format");
                    rewrittenQuestions.push(q);
                }
            } else {
                console.error("  Error response");
                rewrittenQuestions.push(q);
            }
            
            await new Promise(r => setTimeout(r, 4100));
        } catch (e) {
            const message = e instanceof Error ? e.message : String(e);
            console.error("  Exception", message);
            rewrittenQuestions.push(q);
        }
    }
    
    // Now replace the array in the file
    const filePath = path.resolve('./src/data/gaplessData.ts');
    let fileContent = fs.readFileSync(filePath, 'utf8');
    
    // We will generate the string representation of the new array
    const newArrayString = JSON.stringify(rewrittenQuestions, null, 2)
        // Convert to TS syntax
        .replace(/"label": "([A-D])"/g, "label: '$1'")
        .replace(/"trait": "(.*?)"/g, "trait: '$1'")
        .replace(/"id": /g, "id: ")
        .replace(/"question": /g, "question: ")
        .replace(/"dimension": "(.*?)"/g, "dimension: '$1'")
        .replace(/"options": /g, "options: ")
        .replace(/"text": /g, "text: ");
        
    const regex = /export const ASSESSMENT_QUESTIONS: AssessmentQuestion\[\] = \[([\s\S]*?)\];/;
    fileContent = fileContent.replace(regex, `export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = ${newArrayString};`);
    
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log("Done updating gaplessData.ts");
}

run();
