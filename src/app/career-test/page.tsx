import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { jobRoles } from "@/db/schema";
import { CareerSelectionWrapper } from "@/components/CareerSelectionWrapper";

export default async function CareerTestPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/api/auth/signin?callbackUrl=/career-test');
  }

  // 1. Ambil data
  const roles = await db.select().from(jobRoles);

  if (!roles || roles.length === 0) {
    return <div className="p-10 text-white">Database kosong atau gagal fetch. Cek console server lu.</div>;
  }

  // 3. Kirim ke wrapper
  return <CareerSelectionWrapper roles={roles} />;
}