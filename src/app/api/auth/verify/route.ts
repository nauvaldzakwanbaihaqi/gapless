import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ isValid: false }, { status: 401 });
    }

    // Verify if the user still exists in the database
    const userInDb = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.id, session.user.id))
      .limit(1);

    if (userInDb.length === 0) {
      return NextResponse.json({ isValid: false }, { status: 401 });
    }

    return NextResponse.json({ isValid: true }, { status: 200 });
  } catch (error) {
    console.error('Error verifying auth:', error);
    return NextResponse.json({ isValid: false }, { status: 500 });
  }
}
