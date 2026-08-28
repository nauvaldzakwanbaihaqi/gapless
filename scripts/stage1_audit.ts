import { db } from '../src/db';
import { sql } from 'drizzle-orm';

async function auditStage1() {
  console.log('--- STAGE 1 PRE-EXECUTION AUDIT ---');
  try {
    // 1. Check assessment_results count
    const resAssessment = await db.execute(sql`SELECT COUNT(*) as count FROM assessment_results;`);
    console.log(`Jumlah baris di assessment_results yang akan di-reset: ${resAssessment.rows[0].count}`);

    // 2. Check roadmap_progress count
    const resRoadmap = await db.execute(sql`SELECT COUNT(*) as count FROM roadmap_progress;`);
    console.log(`Jumlah baris di roadmap_progress yang akan di-reset: ${resRoadmap.rows[0].count}`);

    // 3. Audit yatim users
    const query = sql`
      SELECT u.id, u.email, u.name
      FROM "user" u
      LEFT JOIN "account" a ON u.id = a."userId"
      WHERE a."providerAccountId" IS NULL;
    `;
    
    const result = await db.execute(query);
    const orphanedUsers = result.rows;

    console.log(`\nJumlah user yatim (tanpa row di tabel accounts) yang akan DIHAPUS: ${orphanedUsers.length}`);
    
    if (orphanedUsers.length > 0) {
      console.log('Daftar User Yatim:');
      orphanedUsers.forEach((u: any, i: number) => {
        console.log(`${i + 1}. ID: ${u.id} | Email: ${u.email} | Name: ${u.name}`);
      });
    }

  } catch (error) {
    console.error('Terjadi kesalahan saat pre-execution audit:', error);
  }
}

auditStage1();
