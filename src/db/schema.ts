import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  primaryKey,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import type { AdapterAccount } from "@auth/core/adapters";

// ──────────────────────────────────────────────
// NEXTAUTH & USER TABLES (Autentikasi & Tier)
// ──────────────────────────────────────────────

export const users = pgTable("user", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  password: text("password"), // Untuk credentials login
  image: text("image"),
  tier: text("tier").default("FREE").notNull(), // Penanda FREE atau PREMIUM
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

// ──────────────────────────────────────────────
// GAPLESS APP TABLES (Assessment & Questions)
// ──────────────────────────────────────────────

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  dimension: text("dimension").notNull(),
});

export const options = pgTable("options", {
  id: serial("id").primaryKey(),
  questionId: integer("question_id")
    .references(() => questions.id)
    .notNull(),
  text: text("text").notNull(),
  mappedArchetype: text("mapped_archetype").notNull(),
});

export const questionsRelations = relations(questions, ({ many }) => ({
  options: many(options),
}));

export const optionsRelations = relations(options, ({ one }) => ({
  question: one(questions, {
    fields: [options.questionId],
    references: [questions.id],
  }),
}));

// ──────────────────────────────────────────────
// GAPLESS JOB ROLES TABLES (Data PDF Nopal)
// ──────────────────────────────────────────────

export const jobRoles = pgTable("job_roles", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  dimension: text("dimension").notNull(), // cth: "The Creator", "The Builder"
  roleName: text("role_name").notNull(), // cth: "UI/UX Designer"
  salaryRange: text("salary_range"), // cth: "Rp 5.000.000 - Rp 9.000.000/bulan"
  companies: text("companies").array(), // cth: ["PT Sigma Global Teknologi", "PT Ciputra Development"]
  hardSkills: text("hard_skills").array(), // cth: ["Figma", "Prototyping", "HTML/CSS"]
  softSkills: text("soft_skills").array(), // cth: ["Pemecahan Masalah", "Empati Pengguna"]
});