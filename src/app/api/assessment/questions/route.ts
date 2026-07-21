import { sql, inArray } from "drizzle-orm";
import { db } from "@/db";
import { questions } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const randomIds = await db
    .select({ id: questions.id })
    .from(questions)
    .orderBy(sql`RANDOM()`)
    .limit(15);

  const results = await db.query.questions.findMany({
    where: inArray(
      questions.id,
      randomIds.map((r) => r.id)
    ),
    with: { options: true },
  });

  return NextResponse.json(results);
}
