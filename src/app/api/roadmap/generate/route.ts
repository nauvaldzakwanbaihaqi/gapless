import { NextResponse } from 'next/server';
import { db } from '@/db';
import { aiRoadmaps, assessmentResults } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { CAREER_PROFILES } from '@/data/gaplessData';
import { auth } from '@/auth';
import { z } from 'zod';
import { checkRateLimit } from '@/lib/rateLimit';

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

    // 3. TODO: Panggil O*NET Web Services API (DITUNDA KARENA KREDENSIAL PENDING)
    // 4. TODO: Generate via Groq LLaMA 3.3 (DITUNDA)
    
    // MOCK: Sementara kita ambil dari gaplessData.ts sebagai dummy AI generation
    const mockProfile = CAREER_PROFILES.find(c => c.title === careerName);
    
    if (!mockProfile) {
      return NextResponse.json({ error: 'Career not found for generation' }, { status: 404 });
    }

    const generatedRoadmapData = mockProfile.roadmap;

    // 5. Simpan ke Database (Simpan data full, redaksi hanya saat response)
    await db.insert(aiRoadmaps).values({
      careerSlug: slug,
      careerName: careerName,
      roadmapData: generatedRoadmapData,
      onetData: { status: "pending", mock: true },
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
