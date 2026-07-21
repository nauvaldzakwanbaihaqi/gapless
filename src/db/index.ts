import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

// Pastikan DATABASE_URL lu ngarah ke URL koneksi Neon yang berawalan postgres:// atau postgresql://
const sql = neon(process.env.DATABASE_URL!);

// Inisialisasi DB dengan skema Drizzle lu
export const db = drizzle(sql, { schema });