import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

// Gunakan fallback dummy URL saat proses build di Vercel agar tidak error
const connectionString = process.env.DATABASE_URL || "postgres://dummy:dummy@dummy/dummy";
const sql = neon(connectionString);

// Inisialisasi DB dengan skema Drizzle lu
export const db = drizzle(sql, { schema });