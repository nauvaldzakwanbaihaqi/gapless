import { db } from "./index";
import { questions, options } from "./schema";
import { SEED_QUESTIONS } from "../data/seed-questions";

async function seedDatabase() {
    console.log("Memulai proses seeding...");

    for (const q of SEED_QUESTIONS) {
        // Insert soal
        const [insertedQuestion] = await db.insert(questions).values({
            text: q.text,
            dimension: q.dimension,
        }).returning({ id: questions.id });

        // Siapkan array jawaban
        const optionsToInsert = q.options.map(opt => ({
            questionId: insertedQuestion.id,
            text: opt.text,
            mappedArchetype: opt.mappedArchetype
        }));

        // Insert jawaban
        await db.insert(options).values(optionsToInsert);
    }

    console.log("Seeding selesai! Data siap digunakan.");
    process.exit(0);
}

seedDatabase().catch((err) => {
    console.error("Gagal melakukan seeding:", err);
    process.exit(1);
});