import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { db } from '@/db';
import { assessmentResults } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

export async function GET(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ hasActive: false });
    }

    const { searchParams } = new URL(req.url);
    const quizType = searchParams.get('quizType') || 'belum_tahu_minat';

    const activeResult = await db.query.assessmentResults.findFirst({
      where: and(
        eq(assessmentResults.userId, session.user.id),
        eq(assessmentResults.quizType, quizType),
        eq(assessmentResults.isActive, true)
      ),
    });

    return NextResponse.json({ hasActive: !!activeResult });
  } catch (error) {
    console.error('Failed to check active assessment:', error);
    return NextResponse.json({ hasActive: false }, { status: 500 });
  }
}
