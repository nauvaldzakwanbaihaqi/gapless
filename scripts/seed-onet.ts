import fs from "fs";
import path from "path";
import readline from "readline";
import { db } from "../src/db";
import { onetOccupations, onetSkills, onetTasks, onetKnowledge, onetTools } from "../src/db/schema";
import { eq } from "drizzle-orm";

const DB_DIR = path.join(process.cwd(), "scratch/onet_db/db_31_0_text");

// Subset of careers relevant to Gapless to save DB space
const RELEVANT_ONETSOC_CODES = new Set([
  "15-1252.00", // Software Developers
  "15-1221.00", // Computer and Information Research Scientists (often mapped to Data Scientist)
  "15-1254.00", // Web Developers
  "27-1024.00", // Graphic Designers (UI/UX)
  "11-2021.00", // Marketing Managers
  "13-1071.00", // Human Resources Specialists
  "15-1299.08", // Computer Systems Engineers/Architects
  "15-1299.09", // Information Technology Project Managers
  "11-3021.00", // Computer and Information Systems Managers
  "15-2051.00", // Data Scientists
  "13-1161.00", // Market Research Analysts and Marketing Specialists
]);

async function processFile(filename: string, processLine: (columns: string[]) => Promise<void>) {
  const filePath = path.join(DB_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`File ${filePath} not found. Skipping.`);
    return;
  }

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let isFirstLine = true;
  for await (const line of rl) {
    if (isFirstLine) {
      isFirstLine = false;
      continue; // Skip header
    }
    const columns = line.split('\t');
    await processLine(columns);
  }
}

async function main() {
  console.log("Starting O*NET data import...");

  if (!fs.existsSync(DB_DIR)) {
    console.error(`ERROR: Database directory ${DB_DIR} not found.`);
    console.error("Please download db_31_0_text.zip from O*NET and extract it to scratch/onet_db/db_31_0_text");
    process.exit(1);
  }

  // 1. Occupations
  console.log("Processing Occupation Data.txt...");
  const occupations: typeof onetOccupations.$inferInsert[] = [];
  await processFile("Occupation Data.txt", async (cols) => {
    const [onetsocCode, title, description] = cols;
    if (RELEVANT_ONETSOC_CODES.has(onetsocCode)) {
      occupations.push({
        onetsocCode,
        title,
        description,
      });
    }
  });

  if (occupations.length > 0) {
    console.log(`Inserting ${occupations.length} occupations...`);
    // Delete existing to avoid conflicts on re-run (Cascade will delete skills/tasks)
    for (const occ of occupations) {
      await db.delete(onetOccupations).where(eq(onetOccupations.onetsocCode, occ.onetsocCode));
    }
    await db.insert(onetOccupations).values(occupations).onConflictDoNothing();
  }

  // 2. Skills (Essential Skills)
  console.log("Processing Essential Skills.txt...");
  const skills: typeof onetSkills.$inferInsert[] = [];
  await processFile("Essential Skills.txt", async (cols) => {
    const onetsocCode = cols[0];
    const elementName = cols[2];
    
    // We only care if it's in our relevant set
    if (RELEVANT_ONETSOC_CODES.has(onetsocCode) && cols[3] === "IM") { // IM = Importance scale
      const dataValue = parseFloat(cols[4]);
      // Only insert skills with high importance (> 3.0 out of 5)
      if (dataValue >= 3.0) {
        skills.push({
          onetsocCode,
          elementName,
        });
      }
    }
  });

  if (skills.length > 0) {
    console.log(`Inserting ${skills.length} skills...`);
    // Batch insert
    for (let i = 0; i < skills.length; i += 1000) {
      await db.insert(onetSkills).values(skills.slice(i, i + 1000));
    }
  }

  // 2b. Software Skills (Tech Skills) -> Tools
  console.log("Processing Software Skills.txt...");
  const tools: typeof onetTools.$inferInsert[] = [];
  await processFile("Software Skills.txt", async (cols) => {
    const onetsocCode = cols[0];
    const example = cols[1]; // Adobe Acrobat
    
    if (RELEVANT_ONETSOC_CODES.has(onetsocCode)) {
      tools.push({
        onetsocCode,
        example,
      });
    }
  });

  if (tools.length > 0) {
    console.log(`Inserting ${tools.length} tools...`);
    for (let i = 0; i < tools.length; i += 1000) {
      await db.insert(onetTools).values(tools.slice(i, i + 1000));
    }
  }

  // 2c. Knowledge
  console.log("Processing Knowledge.txt...");
  const knowledge: typeof onetKnowledge.$inferInsert[] = [];
  await processFile("Knowledge.txt", async (cols) => {
    const onetsocCode = cols[0];
    const elementName = cols[2];
    
    if (RELEVANT_ONETSOC_CODES.has(onetsocCode) && cols[3] === "IM") { // Importance scale
      const dataValue = parseFloat(cols[4]);
      if (dataValue >= 3.0) {
        knowledge.push({
          onetsocCode,
          elementName,
        });
      }
    }
  });

  if (knowledge.length > 0) {
    console.log(`Inserting ${knowledge.length} knowledge items...`);
    for (let i = 0; i < knowledge.length; i += 1000) {
      await db.insert(onetKnowledge).values(knowledge.slice(i, i + 1000));
    }
  }

  // 3. Tasks
  console.log("Processing Task Statements.txt...");
  const tasks: typeof onetTasks.$inferInsert[] = [];
  await processFile("Task Statements.txt", async (cols) => {
    const onetsocCode = cols[0];
    const task = cols[2];

    if (RELEVANT_ONETSOC_CODES.has(onetsocCode)) {
      tasks.push({
        onetsocCode,
        task,
      });
    }
  });

  if (tasks.length > 0) {
    console.log(`Inserting ${tasks.length} tasks...`);
    // Batch insert
    for (let i = 0; i < tasks.length; i += 1000) {
      await db.insert(onetTasks).values(tasks.slice(i, i + 1000));
    }
  }

  console.log("✅ O*NET data import completed successfully!");
  process.exit(0);
}

main().catch((err) => {
  console.error("Error during import:", err);
  process.exit(1);
});
