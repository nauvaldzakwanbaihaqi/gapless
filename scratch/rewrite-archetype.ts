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
    let rewrittenQuestions = [];
    
    for (let i = 0; i < ASSESSMENT_QUESTIONS.length; i++) {
        let q = ASSESSMENT_QUESTIONS[i];
        console.log(`Processing Archetype Question ${i+1}/${ASSESSMENT_QUESTIONS.length}`);
        
        const prompt = `Kamu adalah psikolog karier dan psychometrician. Diberikan soal tes minat bakat (archetype assessment).
Dimensi atau Topik: ${q.dimension}
Opsi Thinker sebelumnya: ${q.options[0].text}
Opsi Creator sebelumnya: ${q.options[1].text}
Opsi Connector sebelumnya: ${q.options[2].text}
Opsi Builder sebelumnya: ${q.options[3].text}

Tugasmu:
1. Buat pertanyaan/skenario BARU yang spesifik dan unik, BERDASARKAN topik "${q.dimension}". Jangan terpaku pada pertanyaan sebelumnya. Skenario harus sangat bervariasi.
2. Gunakan bahasa Indonesia sehari-hari yang sangat mudah dipahami (casual tapi profesional). Hindari istilah teknis atau abstrak.
3. Pertanyaan (skenario) harus dibuat sangat konkret, relatable di dunia kerja/kehidupan, dan maksimal 1-2 kalimat pendek.
4. Buat ulang 4 opsi jawaban tersebut tanpa menggunakan kata kunci eksplisit (seperti logis, data, kreatif, desain, koding, atau sosial). Fokus pada deskripsi perilaku konkret yang implisit.
5. HARUS ada SATU opsi "jebakan sosial" (terdengar paling socially desirable / bijak secara umum) namun tetap selaras dengan trait-nya.
6. Panjang kalimat dari ke-4 opsi HARUS seragam dan pendek (maksimal 1-2 kalimat) agar tidak ada opsi yang terlihat menonjol formatnya.

OUTPUT FORMAT JSON:
{
  "question": "Skenario baru...",
  "options": [
    "Opsi Thinker baru",
    "Opsi Creator baru",
    "Opsi Connector baru",
    "Opsi Builder baru"
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
                
                let newQ = JSON.parse(JSON.stringify(q));
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
