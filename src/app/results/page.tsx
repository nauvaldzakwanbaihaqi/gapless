import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { db } from '@/db';
import { assessmentResults } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';
import Link from 'next/link';
import { BrainCircuit, Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';

export default async function ResultsPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect('/api/auth/signin?callbackUrl=/results');
  }

  const results = await db
    .select()
    .from(assessmentResults)
    .where(eq(assessmentResults.userId, session.user.id))
    .orderBy(desc(assessmentResults.createdAt));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Riwayat Asesmen</h1>
          <p className="text-slate-600">Lacak perkembangan dan eksplorasi kariermu dari waktu ke waktu.</p>
        </div>

        {results.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-slate-100 flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <BrainCircuit className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Belum Ada Riwayat</h2>
            <p className="text-slate-600 max-w-md mx-auto mb-8">
              Kamu belum pernah mengambil asesmen karier. Ayo mulai eksplorasi potensimu sekarang!
            </p>
            <Link
              href="/assessment"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg"
            >
              Mulai Asesmen
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {results.map((result) => {
              const date = new Date(result.createdAt).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              });

              return (
                <div key={result.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span>{date}</span>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        Archetype: {result.dominantTrait}
                      </h3>
                      {result.selectedCareer ? (
                        <div className="flex items-center gap-2 text-blue-600 font-medium bg-blue-50 w-fit px-3 py-1 rounded-full text-sm">
                          <Briefcase className="w-4 h-4" />
                          <span>Karier: {result.selectedCareer}</span>
                        </div>
                      ) : (
                        <div className="text-sm text-slate-400 italic">Belum memilih karier spesifik</div>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center">
                    {/* Placeholder for Detail view. For now, it just looks nice */}
                    <button className="flex items-center gap-1 text-slate-600 font-semibold hover:text-blue-600 transition-colors">
                      Lihat Detail <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
