import { db } from '../src/db';
import { assessmentResults, roadmapProgress } from '../src/db/schema';
import { inArray, sql } from 'drizzle-orm';

async function main() {
  console.log('Cleaning up duplicate assessment results...');
  
  // Find duplicates: same userId, same selectedCareer
  const duplicates = await db.execute(sql`
    SELECT id
    FROM (
      SELECT id,
             ROW_NUMBER() OVER(PARTITION BY user_id, selected_career ORDER BY created_at DESC) as rn
      FROM assessment_results
    ) t
    WHERE rn > 1;
  `);

  const duplicateIds = duplicates.rows.map(row => row.id as string);

  if (duplicateIds.length === 0) {
    console.log('No duplicates found.');
    process.exit(0);
  }

  console.log(`Found ${duplicateIds.length} duplicate entries. Deleting...`);

  // Delete roadmap progress for these (handled by cascade if set up, but let's be safe)
  await db.delete(roadmapProgress).where(inArray(roadmapProgress.assessmentResultId, duplicateIds));
  
  // Delete assessment results
  await db.delete(assessmentResults).where(inArray(assessmentResults.id, duplicateIds));

  console.log('Cleanup complete!');
  process.exit(0);
}

main().catch(console.error);
