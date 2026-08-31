import { NextResponse } from 'next/server';
import { db } from '@/db';
import { assessmentResults } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { auth } from '@/auth';
import { z } from 'zod';

const RequestSchema = z.object({
  assessmentId: z.string().min(1, 'Missing assessmentId'),
});

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const rawBody = await req.json();
    const validationResult = RequestSchema.safeParse(rawBody);
    if (!validationResult.success) {
      return NextResponse.json({ error: 'Bad Request', details: validationResult.error.format() }, { status: 400 });
    }

    const { assessmentId } = validationResult.data;

    // Hanya reset skillRatings (yang menentukan status centang modul saat ini)
    // dan pastikan hanya mereset assesment milik user yang sedang login
    await db.update(assessmentResults)
      .set({
        skillRatings: null,
      })
      .where(
        and(
          eq(assessmentResults.id, assessmentId),
          eq(assessmentResults.userId, session.user.id)
        )
      );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error resetting roadmap progress:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
