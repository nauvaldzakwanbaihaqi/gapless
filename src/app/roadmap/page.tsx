import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { db } from '@/db';
import { assessmentResults, roadmapProgress } from '@/db/schema';
import { desc, eq, isNotNull, and } from 'drizzle-orm';
import Link from 'next/link';
import { Map, Compass, Target } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import RoadmapClient from './RoadmapClient';

interface RoadmapPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RoadmapPage({ searchParams }: RoadmapPageProps) {
  const params = await searchParams;
  const assessmentId = typeof params.assessmentId === 'string' ? params.assessmentId : undefined;

  const session = await auth();

  if (!session?.user?.id) {
    redirect('/api/auth/signin?callbackUrl=/roadmap');
  }

  // Fetch active roadmaps (max 2)
  const history = await db
    .select({
      id: assessmentResults.id,
      createdAt: assessmentResults.createdAt,
      selectedCareer: assessmentResults.selectedCareer,
      skillRatings: assessmentResults.skillRatings,
      quizType: assessmentResults.quizType,
      careerSlug: assessmentResults.careerSlug,
      moduleStatuses: roadmapProgress.moduleStatuses,
    })
    .from(assessmentResults)
    .leftJoin(
      roadmapProgress, 
      and(
        eq(roadmapProgress.userId, session.user.id),
        eq(roadmapProgress.careerSlug, assessmentResults.careerSlug)
      )
    )
    .where(
      and(
        eq(assessmentResults.userId, session.user.id),
        eq(assessmentResults.isActive, true),
        isNotNull(assessmentResults.selectedCareer)
      )
    )
    .orderBy(desc(assessmentResults.createdAt));

  if (history.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-slate-100 flex flex-col items-center max-w-lg">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Map className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Belum Ada Roadmap</h2>
            <p className="text-slate-600 mb-8">
              Kamu belum memiliki Learning Roadmap. Selesaikan asesmen karier dan pilih tujuanmu untuk membuka roadmap yang dipersonalisasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link
                href="/assessment"
                className="flex-1 flex flex-col items-center justify-center p-4 bg-white border-2 border-slate-100 hover:border-blue-500 rounded-2xl hover:bg-blue-50/50 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Compass size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">Belum Tahu Minat</h3>
                <span className="text-xs text-slate-500 text-center">Rekomendasi dari awal</span>
              </Link>
              <Link
                href="/career-test"
                className="flex-1 flex flex-col items-center justify-center p-4 bg-white border-2 border-slate-100 hover:border-indigo-500 rounded-2xl hover:bg-indigo-50/50 transition-all group"
              >
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Target size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">Sudah Tahu Minat</h3>
                <span className="text-xs text-slate-500 text-center">Pilih target spesifik</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return <RoadmapClient history={history} initialAssessmentId={assessmentId} />;
}
