import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { db } from '@/db';
import { assessmentResults, roadmapProgress } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { computeTraitScores, getDominantTrait, CAREER_PROFILES } from '@/data/gaplessData';

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const userId = session.user.id;

    const body = await req.json();
    const { assessmentId, rawAnswers, selectedCareer, skillRatings } = body;
    const quizType = body.quizType || 'belum_tahu_minat';

    if (!rawAnswers) {
      return NextResponse.json({ error: 'Missing required data' }, { status: 400 });
    }

    let finalDominantTrait = body.dominantTrait;

    if (quizType === 'belum_tahu_minat') {
      // Recompute trait scores on server to ensure validity and security
      const serverTraitScores = computeTraitScores(rawAnswers);
      const serverDominantTrait = getDominantTrait(serverTraitScores);

      if (!serverDominantTrait) {
        return NextResponse.json({ error: 'Failed to compute dominant trait' }, { status: 400 });
      }
      finalDominantTrait = serverDominantTrait;
    } else {
      // For sudah_tahu_minat, use the trait from the client or fallback to 'The Thinker'
      if (!finalDominantTrait) {
        finalDominantTrait = 'The Thinker';
      }
    }

    let careerSlug: string | null = null;
    if (selectedCareer) {
      const profile = CAREER_PROFILES.find((p) => p.title === selectedCareer);
      if (profile) careerSlug = profile.id;
    }

    let newResult;

    if (assessmentId) {
      // Update existing
      const [updated] = await db.update(assessmentResults).set({
        rawAnswers,
        traitScores: quizType === 'belum_tahu_minat' ? computeTraitScores(rawAnswers) : { 'The Thinker': 0, 'The Creator': 0, 'The Connector': 0, 'The Builder': 0 },
        dominantTrait: finalDominantTrait,
        selectedCareer: selectedCareer || null,
        careerSlug: careerSlug,
        skillRatings: skillRatings || null,
      }).where(eq(assessmentResults.id, assessmentId)).returning();
      newResult = updated;
    } else {
      // Create new (Retake / First Time)
      // Soft-delete the previous active result for this quizType
      await db.update(assessmentResults)
        .set({ isActive: false })
        .where(
          and(
            eq(assessmentResults.userId, userId),
            eq(assessmentResults.quizType, quizType),
            eq(assessmentResults.isActive, true)
          )
        );

      // Insert the new one
      const [inserted] = await db.insert(assessmentResults).values({
        userId: userId,
        quizType: quizType,
        isActive: true,
        rawAnswers,
        traitScores: quizType === 'belum_tahu_minat' ? computeTraitScores(rawAnswers) : { 'The Thinker': 0, 'The Creator': 0, 'The Connector': 0, 'The Builder': 0 },
        dominantTrait: finalDominantTrait,
        selectedCareer: selectedCareer || null,
        careerSlug: careerSlug,
        skillRatings: skillRatings || null,
      }).returning();
      newResult = inserted;
    }

    if (newResult && careerSlug) {
      // Ensure roadmapProgress exists for this (userId, careerSlug)
      const existingProgress = await db.query.roadmapProgress.findFirst({
        where: and(
          eq(roadmapProgress.userId, userId),
          eq(roadmapProgress.careerSlug, careerSlug)
        )
      });
      if (!existingProgress) {
        await db.insert(roadmapProgress).values({
          userId: userId,
          careerSlug: careerSlug,
          moduleStatuses: {},
        });
      }
    }

    return NextResponse.json({ success: true, result: newResult });
  } catch (error) {
    console.error('Failed to sync assessment result:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
