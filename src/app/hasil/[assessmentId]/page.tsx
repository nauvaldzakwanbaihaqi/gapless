import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import { assessmentResults } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { ResultDetailClient } from './ResultDetailClient';
import { Navbar } from '@/components/Navbar';

export default async function ResultDetailPage({ params }: { params: { assessmentId: string } }) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect(`/api/auth/signin?callbackUrl=/hasil/${params.assessmentId}`);
  }

  const result = await db.query.assessmentResults.findFirst({
    where: and(
      eq(assessmentResults.id, params.assessmentId)
    )
  });

  if (!result) {
    redirect('/results');
  }

  // ⚠️ OWNERSHIP CHECK ⚠️
  if (result.userId !== session.user.id) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
          <div className="glass-card p-8 max-w-md w-full border-red-100">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Akses Ditolak</h1>
            <p className="text-slate-600 mb-6">
              Maaf, kamu tidak memiliki akses untuk melihat hasil asesmen ini. Data ini milik akun lain.
            </p>
            <a href="/results" className="btn-primary inline-flex">
              Kembali ke Hasil Saya
            </a>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ResultDetailClient 
            resultId={result.id} 
            selectedCareer={result.selectedCareer as string} 
            skillRatings={result.skillRatings as Record<string, number>} 
            dominantTrait={result.dominantTrait as string} 
        />
      </main>
    </div>
  );
}
