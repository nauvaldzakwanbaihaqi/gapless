import { db } from '../src/db';
import { roadmapProgress } from '../src/db/schema';

async function run() {
  const allProgress = await db.query.roadmapProgress.findMany();
  console.log('--- ROADMAP PROGRESS ---');
  allProgress.forEach(p => {
    console.log(`User: ${p.userId}, Assessment: ${p.assessmentResultId}`);
    console.log(`Statuses: ${JSON.stringify(p.moduleStatuses)}`);
  });
  process.exit(0);
}
run();
