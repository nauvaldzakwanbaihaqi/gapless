import { NextResponse } from 'next/server';
import { db } from '@/db';
import { aiRoadmaps, assessmentResults } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { CAREER_PROFILES } from '@/data/gaplessData';
import { auth } from '@/auth';

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { assessmentId } = await req.json();

    if (!assessmentId) {
      return NextResponse.json({ error: 'assessmentId is required' }, { status: 400 });
    }

    // 1. Dapatkan assessment dan careerSlug
    const assessment = await db.query.assessmentResults.findFirst({
      where: eq(assessmentResults.id, assessmentId)
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
      return NextResponse.json({
        success: true,
        source: 'cache',
        careerSlug: slug,
        careerName: cachedRoadmap.careerName,
        roadmap: cachedRoadmap.roadmapData
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

    // 5. Simpan ke Database
    await db.insert(aiRoadmaps).values({
      careerSlug: slug,
      careerName: careerName,
      roadmapData: generatedRoadmapData,
      onetData: { status: "pending", mock: true },
    });

    return NextResponse.json({
      success: true,
      source: 'generated (mock)',
      careerSlug: slug,
      careerName: careerName,
      roadmap: generatedRoadmapData
    });

  } catch (error) {
    console.error('Roadmap Generation Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
