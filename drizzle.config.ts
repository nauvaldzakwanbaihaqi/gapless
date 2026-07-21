import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Baca file .env.local
dotenv.config({ path: ".env.local" });

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle", // Folder output untuk file migrasi SQL
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});