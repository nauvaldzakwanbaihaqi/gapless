import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  primaryKey,
  jsonb,
  boolean,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations, eq } from "drizzle-orm";
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

// ──────────────────────────────────────────────
// ASSESSMENT & ROADMAP PROGRESS
// ──────────────────────────────────────────────

import { sql } from "drizzle-orm";

export const assessmentResults = pgTable("assessment_results", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id").references(() => users.id, { onDelete: "cascade" }), // Nullable for guest
  quizType: text("quiz_type").default("belum_tahu_minat").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  careerSlug: text("career_slug"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  rawAnswers: jsonb("raw_answers").notNull(), // Record<number, number>
  traitScores: jsonb("trait_scores").notNull(), // Record<Trait, number>
  dominantTrait: text("dominant_trait").notNull(),
  selectedCareer: text("selected_career"), // Optional initially until user picks one
  skillRatings: jsonb("skill_ratings"), // Record<string, number>
}, (t) => ({
  activeQuizUnique: uniqueIndex("active_quiz_unique")
    .on(t.userId, t.quizType)
    .where(sql`${t.isActive} = true`),
}));

export const roadmapProgress = pgTable("roadmap_progress", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  careerSlug: text("career_slug").notNull(),
  moduleStatuses: jsonb("module_statuses").notNull().default({}), // For future manual tracking
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
}, (t) => ({
  userCareerUnique: uniqueIndex("user_career_unique")
    .on(t.userId, t.careerSlug),
}));

export const assessmentResultsRelations = relations(
  assessmentResults,
  ({ one }) => ({
    user: one(users, {
      fields: [assessmentResults.userId],
      references: [users.id],
    }),
  })
);

export const roadmapProgressRelations = relations(
  roadmapProgress,
  ({ one }) => ({
    user: one(users, {
      fields: [roadmapProgress.userId],
      references: [users.id],
    }),
  })
);

export const aiRoadmaps = pgTable("ai_roadmaps", {
  careerSlug: text("career_slug").primaryKey(),
  careerName: text("career_name").notNull(),
  roadmapData: jsonb("roadmap_data").notNull(),
  onetData: jsonb("onet_data"), // To cache O*NET data if needed later
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

export const aiModuleInsights = pgTable("ai_module_insights", {
  moduleSlug: text("module_slug").notNull(),
  careerSlug: text("career_slug").notNull(),
  insightData: jsonb("insight_data").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
}, (t) => ({
  compoundKey: primaryKey({ columns: [t.moduleSlug, t.careerSlug] }),
}));

// ──────────────────────────────────────────────
// O*NET LOCAL DATABASE (Reference Layer)
// ──────────────────────────────────────────────

export const onetOccupations = pgTable("onet_occupations", {
  onetsocCode: text("onetsoc_code").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
});

export const onetSkills = pgTable("onet_skills", {
  id: serial("id").primaryKey(),
  onetsocCode: text("onetsoc_code").references(() => onetOccupations.onetsocCode, { onDelete: "cascade" }).notNull(),
  elementName: text("element_name").notNull(),
});

export const onetTasks = pgTable("onet_tasks", {
  id: serial("id").primaryKey(),
  onetsocCode: text("onetsoc_code").references(() => onetOccupations.onetsocCode, { onDelete: "cascade" }).notNull(),
  task: text("task").notNull(),
});

export const onetKnowledge = pgTable("onet_knowledge", {
  id: serial("id").primaryKey(),
  onetsocCode: text("onetsoc_code").references(() => onetOccupations.onetsocCode, { onDelete: "cascade" }).notNull(),
  elementName: text("element_name").notNull(),
});

export const onetTools = pgTable("onet_tools", {
  id: serial("id").primaryKey(),
  onetsocCode: text("onetsoc_code").references(() => onetOccupations.onetsocCode, { onDelete: "cascade" }).notNull(),
  example: text("example").notNull(),
});

export const onetOccupationsRelations = relations(onetOccupations, ({ many }) => ({
  skills: many(onetSkills),
  tasks: many(onetTasks),
  knowledge: many(onetKnowledge),
  tools: many(onetTools),
}));

export const onetSkillsRelations = relations(onetSkills, ({ one }) => ({
  occupation: one(onetOccupations, {
    fields: [onetSkills.onetsocCode],
    references: [onetOccupations.onetsocCode],
  }),
}));

export const onetTasksRelations = relations(onetTasks, ({ one }) => ({
  occupation: one(onetOccupations, {
    fields: [onetTasks.onetsocCode],
    references: [onetOccupations.onetsocCode],
  }),
}));

export const onetKnowledgeRelations = relations(onetKnowledge, ({ one }) => ({
  occupation: one(onetOccupations, {
    fields: [onetKnowledge.onetsocCode],
    references: [onetOccupations.onetsocCode],
  }),
}));

export const onetToolsRelations = relations(onetTools, ({ one }) => ({
  occupation: one(onetOccupations, {
    fields: [onetTools.onetsocCode],
    references: [onetOccupations.onetsocCode],
  }),
}));