import { NextResponse } from 'next/server';
import { db } from '@/db';
import { aiRoadmaps, assessmentResults } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { CAREER_PROFILES } from '@/data/gaplessData';
import { auth } from '@/auth';
import { z } from 'zod';
import { checkRateLimit } from '@/lib/rateLimit';
import { matchCareerToOnet } from '@/lib/onetMatcher';
import { onetSkills, onetTasks, onetKnowledge, onetTools } from '@/db/schema';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateObject } from 'ai';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});


const RequestSchema = z.object({
  assessmentId: z.string().min(1, 'Missing assessmentId'),
});

function redactRoadmap(roadmap: any[]) {
  if (!Array.isArray(roadmap)) return roadmap;
  return roadmap.map((phase, idx) => {
    if (idx >= 2) {
      return {
        ...phase,
        title: 'Lanjutan',
        subtitle: 'Materi lanjutan untuk memaksimalkan potensimu.',
        description: 'Pelajari materi lebih dalam dengan praktik industri nyata.',
        modules: phase.modules.map((_: any, i: number) => `Materi Premium ${i + 1}`),
      };
    }
    return phase;
  });
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userTier = (session.user as any).tier || 'Free';
    const isPro = userTier === 'Student Pro' || userTier === 'Pro';

    if (!checkRateLimit(session.user.id, 5, 60000)) {
      return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 });
    }

    const rawBody = await req.json();
    const validationResult = RequestSchema.safeParse(rawBody);
    
    if (!validationResult.success) {
      return NextResponse.json({ error: 'Bad Request', details: validationResult.error.format() }, { status: 400 });
    }

    const { assessmentId } = validationResult.data;

    // 1. Dapatkan assessment dan careerSlug
    const assessment = await db.query.assessmentResults.findFirst({
      where: and(
        eq(assessmentResults.id, assessmentId),
        eq(assessmentResults.userId, session.user.id)
      )
    });

    if (!assessment || !assessment.selectedCareer) {
      return NextResponse.json({ error: 'Assessment not found or career not selected' }, { status: 404 });
    }

    const careerName = assessment.selectedCareer;
    // Buat slug manual untuk sementara (jika assessment.careerSlug null)
    const slug = assessment.careerSlug || careerName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    // 2. Cek Cache di ai_roadmaps
    const cachedRoadmap = await db.query.aiRoadmaps.findFirst({
      where: eq(aiRoadmaps.careerSlug, slug)
    });

    if (cachedRoadmap) {
      console.log(`[CACHE HIT] Mengambil roadmap untuk ${slug}`);
      
      let finalRoadmap = cachedRoadmap.roadmapData as any[];
      if (!isPro) {
        finalRoadmap = redactRoadmap(finalRoadmap);
      }

      return NextResponse.json({
        success: true,
        source: 'cache',
        careerSlug: slug,
        careerName: cachedRoadmap.careerName,
        roadmap: finalRoadmap
      });
    }

    console.log(`[CACHE MISS] Generating roadmap untuk ${slug}...`);

    // 3. Match ke O*NET Lokal
    const onetsocCode = await matchCareerToOnet(careerName);
    
    let onetContextText = "";
    let systemPrompt = "";
    let onetDataToCache = null;

    if (onetsocCode) {
      console.log(`[ONET] Matched ${careerName} to ${onetsocCode}`);
      // Ambil skills, tasks, knowledge, tools
      const skills = await db.select().from(onetSkills).where(eq(onetSkills.onetsocCode, onetsocCode)).limit(20);
      const tasks = await db.select().from(onetTasks).where(eq(onetTasks.onetsocCode, onetsocCode)).limit(10);
      const knowledge = await db.select().from(onetKnowledge).where(eq(onetKnowledge.onetsocCode, onetsocCode)).limit(20);
      const tools = await db.select().from(onetTools).where(eq(onetTools.onetsocCode, onetsocCode)).limit(20);
      
      const skillNames = skills.map(s => s.elementName).join(", ");
      const taskNames = tasks.map(t => t.task).join("; ");
      const knowledgeNames = knowledge.map(k => k.elementName).join(", ");
      const toolNames = tools.map(t => t.example).join(", ");
      
      onetContextText = `Referensi O*NET:\n- Keahlian (Skills): ${skillNames}\n- Pengetahuan (Knowledge): ${knowledgeNames}\n- Tugas Utama (Tasks): ${taskNames}\n- Tools & Teknologi: ${toolNames}`;
      onetDataToCache = { onetsocCode, skillNames, taskNames, knowledgeNames, toolNames };
      
      systemPrompt = `Kamu adalah Konselor Karier Senior. Buat 4 fase learning roadmap untuk karier yang disebutkan.
      Wajib gunakan keahlian, pengetahuan, tools, dan tugas dari referensi O*NET yang diberikan sebagai materi utama dalam modul.
      Instruksi eksplisit: gunakan HANYA skill/task dari referensi yang diberikan, jangan mengarang di luar itu.
      Hasil HANYA boleh dalam format JSON sesuai skema.`;
    } else {
      console.log(`[ONET] No match for ${careerName}, falling back to general AI knowledge`);
      onetContextText = "Referensi data spesifik tidak ditemukan.";
      
      systemPrompt = `Kamu adalah Konselor Karier Senior. Buat 4 fase learning roadmap untuk karier yang disebutkan.
      PENTING: Tidak ada referensi standar okupasi spesifik (O*NET) yang ditemukan untuk karier ini. Harap berhati-hati, buatlah roadmap secara umum dan wajar, serta jangan melebih-lebihkan ekspektasi industri.
      Hasil HANYA boleh dalam format JSON sesuai skema.`;
    }

    // 4. Generate via Gemini
    console.log(`[GEMINI] Memanggil LLM untuk ${careerName}...`);
    
    const { object: generatedRoadmapData } = await generateObject({
      model: google('gemini-3.5-flash-lite'),
      system: systemPrompt,
      prompt: `Karier: ${careerName}\n\n${onetContextText}`,
      schema: z.array(z.object({
        title: z.string().describe("Judul fase (misal: 'Fundamental', 'Advanced')"),
        subtitle: z.string().describe("Subjudul singkat"),
        description: z.string().describe("Deskripsi panjang tentang apa yang dipelajari"),
        modules: z.array(z.string()).describe("Daftar materi spesifik yang akan dipelajari")
      })).length(4),
    });

    // 5. Simpan ke Database (Simpan data full, redaksi hanya saat response)
    await db.insert(aiRoadmaps).values({
      careerSlug: slug,
      careerName: careerName,
      roadmapData: generatedRoadmapData,
      onetData: onetDataToCache || { status: "no_match" },
    });

    let finalRoadmap = generatedRoadmapData;
    if (!isPro) {
      finalRoadmap = redactRoadmap(generatedRoadmapData);
    }

    return NextResponse.json({
      success: true,
      source: 'generated (mock)',
      careerSlug: slug,
      careerName: careerName,
      roadmap: finalRoadmap
    });

  } catch (error) {
    console.error('Roadmap Generation Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
