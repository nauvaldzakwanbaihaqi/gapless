import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function POST() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Update user tier in DB to Student Pro
    await db.update(users)
      .set({ tier: 'Student Pro' })
      .where(eq(users.id, session.user.id));

    return NextResponse.json({
      success: true,
      tier: 'Student Pro',
      message: 'Selamat! Akun kamu berhasil di-upgrade ke Student Pro.',
    });
  } catch (error) {
    console.error('Error upgrading to Pro:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
