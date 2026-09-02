import { db } from '@/db';
import { assessmentResults } from '@/db/schema';
import { eq, and, count } from 'drizzle-orm';

export const FREE_TIER_LIMIT = 2;

export async function getRemainingAttempts(userId: string, quizType: string, tier: string = 'FREE') {
  const isPremium = tier.toUpperCase() !== 'FREE';
  
  if (isPremium) {
    return { isAllowed: true, remaining: Infinity, limit: Infinity, isPremium: true };
  }

  try {
    const [result] = await db
      .select({ value: count() })
      .from(assessmentResults)
      .where(
        and(
          eq(assessmentResults.userId, userId),
          eq(assessmentResults.quizType, quizType)
        )
      );

    const attempts = result?.value || 0;
    const remaining = Math.max(0, FREE_TIER_LIMIT - attempts);
    
    return { 
      isAllowed: remaining > 0, 
      remaining, 
      limit: FREE_TIER_LIMIT,
      isPremium: false
    };
  } catch (error) {
    console.error('Error counting assessment attempts:', error);
    // Fallback to allow if DB fails
    return { isAllowed: true, remaining: 1, limit: FREE_TIER_LIMIT, isPremium: false };
  }
}
