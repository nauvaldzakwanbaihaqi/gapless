import { db } from "../db";
import { onetOccupations } from "../db/schema";
import { ilike } from "drizzle-orm";

// Explicit manual mapping for fixed recommendations in Gapless
export const FIXED_CAREER_MAPPING: Record<string, string> = {
  "software-engineer": "15-1252.00",
  "ui-ux-designer": "27-1024.00",
  "data-analyst": "15-2051.00", // Mapped to Data Scientist
  "digital-marketing": "11-2021.00", // Marketing Manager
  "business-development": "13-1161.00",
};

/**
 * Match a career slug or name to an O*NET-SOC code.
 * Uses manual mapping first, then fuzzy matching via ILIKE.
 */
export async function matchCareerToOnet(careerSlugOrName: string): Promise<string | null> {
  // 1. Check fixed mapping
  const normalizedSlug = careerSlugOrName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  if (FIXED_CAREER_MAPPING[normalizedSlug]) {
    return FIXED_CAREER_MAPPING[normalizedSlug];
  }

  // 2. Fuzzy match in database
  const searchString = `%${careerSlugOrName.split(/[- ]/).join('%')}%`;
  const result = await db.select({
    onetsocCode: onetOccupations.onetsocCode,
  })
  .from(onetOccupations)
  .where(ilike(onetOccupations.title, searchString))
  .limit(1);

  if (result.length > 0) {
    return result[0].onetsocCode;
  }

  return null;
}
