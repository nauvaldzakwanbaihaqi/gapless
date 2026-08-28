import { db } from '../src/db';
import { sql } from 'drizzle-orm';

async function auditUsers() {
  console.log('--- AUDIT MENYELURUH: USER TANPA OAUTH ACCOUNT ---');
  try {
    const query = sql`
      SELECT u.id, u.email, u.name
      FROM "user" u
      LEFT JOIN "account" a ON u.id = a."userId"
      WHERE a."providerAccountId" IS NULL;
    `;
    
    const result = await db.execute(query);
    const orphanedUsers = result.rows;

    console.log(`Ditemukan ${orphanedUsers.length} user yatim (tanpa row di tabel accounts).`);
    
    if (orphanedUsers.length > 0) {
      console.log('\nDaftar User:');
      orphanedUsers.forEach((u: any, i: number) => {
        console.log(`${i + 1}. ID: ${u.id} | Email: ${u.email} | Name: ${u.name}`);
      });
    }

  } catch (error) {
    console.error('Terjadi kesalahan saat audit:', error);
  }
}

auditUsers();
