import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { db } from '@/db';
import { assessmentResults, roadmapProgress } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { computeTraitScores, getDominantTrait } from '@/data/gaplessData';

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { rawAnswers, selectedCareer, skillRatings } = body;

    if (!rawAnswers) {
      return NextResponse.json({ error: 'Missing required data' }, { status: 400 });
    }

    // Recompute trait scores on server to ensure validity and security
    const serverTraitScores = computeTraitScores(rawAnswers);
    const serverDominantTrait = getDominantTrait(serverTraitScores);

    if (!serverDominantTrait) {
      return NextResponse.json({ error: 'Failed to compute dominant trait' }, { status: 400 });
    }

    // Save assessment result
    const [newResult] = await db.insert(assessmentResults).values({
      userId: session.user.id,
      rawAnswers,
      traitScores: serverTraitScores,
      dominantTrait: serverDominantTrait,
      selectedCareer: selectedCareer || null,
      skillRatings: skillRatings || null,
    }).returning();

    // Generate a roadmap progress entry if a career is selected
    if (selectedCareer) {
      await db.insert(roadmapProgress).values({
        assessmentResultId: newResult.id,
        userId: session.user.id,
        moduleStatuses: {}, // Empty initially
      });
    }

    return NextResponse.json({ success: true, result: newResult });
  } catch (error) {
    console.error('Failed to sync assessment result:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
