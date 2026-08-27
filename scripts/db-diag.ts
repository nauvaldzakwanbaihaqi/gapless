import { db } from '../src/db';
import { users, assessmentResults } from '../src/db/schema';

async function run() {
  console.log('--- USERS ---');
  const allUsers = await db.query.users.findMany();
  console.log(allUsers.map(u => ({ id: u.id, name: u.name, email: u.email })));
  
  const emailCounts = allUsers.reduce((acc, user) => {
    acc[user.email] = (acc[user.email] || 0) + 1;
    return acc;
  }, {});
  console.log('Duplikat Email:', Object.keys(emailCounts).filter(e => emailCounts[e] > 1));

  console.log('\n--- ASSESSMENT RESULTS ---');
  const results = await db.query.assessmentResults.findMany();
  console.log(results.map(r => ({ id: r.id, userId: r.userId, selectedCareer: r.selectedCareer })));
  
  process.exit(0);
}
run();
