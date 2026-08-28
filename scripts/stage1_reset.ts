import { db } from '../src/db';
import { sql } from 'drizzle-orm';

async function resetStage1() {
  console.log('--- EXECUTING STAGE 1 RESET ---');
  try {
    console.log('Menghapus data di tabel roadmap_progress...');
    await db.execute(sql`DELETE FROM roadmap_progress;`);
    
    console.log('Menghapus data di tabel assessment_results...');
    await db.execute(sql`DELETE FROM assessment_results;`);

    console.log('Mencari dan menghapus user yatim...');
    await db.execute(sql`
      DELETE FROM "user" 
      WHERE id IN (
        SELECT u.id
        FROM "user" u
        LEFT JOIN "account" a ON u.id = a."userId"
        WHERE a."providerAccountId" IS NULL
      );
    `);

    console.log('Reset berhasil dieksekusi!');
  } catch (error) {
    console.error('Terjadi kesalahan saat mengeksekusi reset:', error);
  }
}

resetStage1();
