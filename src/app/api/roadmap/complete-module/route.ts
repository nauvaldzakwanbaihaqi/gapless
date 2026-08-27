import { NextResponse } from 'next/server';
import { db } from '@/db';
import { roadmapProgress, assessmentResults } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { auth } from '@/auth';

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { assessmentId, moduleSlug } = await req.json();
    if (!assessmentId || !moduleSlug) {
      return NextResponse.json({ error: 'Missing assessmentId or moduleSlug' }, { status: 400 });
    }

    // Ambil assessmentResult untuk mengetahui careerSlug
    const assessmentResult = await db.query.assessmentResults.findFirst({
      where: eq(assessmentResults.id, assessmentId)
    });

    if (!assessmentResult || !assessmentResult.careerSlug) {
      return NextResponse.json({ error: 'Assessment result not found or has no career' }, { status: 404 });
    }

    // Ambil data progress yang ada sekarang berdasarkan careerSlug
    const existingProgress = await db.query.roadmapProgress.findFirst({
      where: and(
        eq(roadmapProgress.careerSlug, assessmentResult.careerSlug),
        eq(roadmapProgress.userId, session.user.id)
      )
    });

    if (!existingProgress) {
      return NextResponse.json({ error: 'Progress not found' }, { status: 404 });
    }

    // Update moduleStatuses (gabungkan dengan yang sudah ada)
    const currentStatuses = existingProgress.moduleStatuses as Record<string, boolean> || {};
    const updatedStatuses = {
      ...currentStatuses,
      [moduleSlug]: true
    };

    await db.update(roadmapProgress)
      .set({
        moduleStatuses: updatedStatuses,
        updatedAt: new Date()
      })
      .where(
        eq(roadmapProgress.id, existingProgress.id)
      );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error completing module:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
