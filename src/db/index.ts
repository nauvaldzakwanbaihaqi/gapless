import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

const sql = neon(connectionString);

// Inisialisasi DB dengan skema Drizzle lu
export const db = drizzle(sql, { schema });