import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import { assessmentResults } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { ResultDetailClient } from './ResultDetailClient';
import { Navbar } from '@/components/Navbar';

export default async function ResultDetailPage({ params }: { params: { id: string } }) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect(`/api/auth/signin?callbackUrl=/results/${params.id}`);
  }

  const result = await db.query.assessmentResults.findFirst({
    where: and(
      eq(assessmentResults.id, params.id),
      eq(assessmentResults.userId, session.user.id)
    )
  });

  if (!result) {
    redirect('/results');
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
