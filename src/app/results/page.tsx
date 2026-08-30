import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { db } from '@/db';
import { assessmentResults } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import Link from 'next/link';
import { BrainCircuit, Briefcase, Calendar, ChevronRight, Map } from 'lucide-react';
import { Navbar } from '@/components/Navbar';

  const ResultCard = ({ title, description, result, quizType, Icon }: { title: string, description: string, result: { traitScores?: unknown; dominantTrait: string; selectedCareer: string | null; id: string; createdAt: Date | string | null } | undefined, quizType: string, Icon: React.ElementType }) => {
    if (!result) {
      return (
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-center shadow-sm border border-slate-100 flex flex-col items-center">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
            <Icon className="w-10 h-10 text-slate-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">{title}</h2>
          <p className="text-slate-600 max-w-md mx-auto mb-8">
            {description}
          </p>
          <Link
            href={quizType === 'sudah_tahu_minat' ? '/career-test' : `/assessment?quizType=${quizType}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg"
          >
            Mulai Tes
          </Link>
        </div>
      );
    }

    const date = result.createdAt ? new Date(result.createdAt).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }) : 'Baru saja';

    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-cyan-400" />
        
        <div className="flex flex-col sm:flex-row gap-6 sm:items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">{title}</h2>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>Diambil pada {date}</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="text-sm text-slate-500 mb-1">Archetype Dominan</div>
            <div className="font-bold text-lg text-slate-900">{result.dominantTrait}</div>
          </div>
          
          <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
            <div className="text-sm text-blue-600/80 mb-1">Karier Terpilih</div>
            {result.selectedCareer ? (
              <div className="flex items-center gap-2 font-bold text-blue-900">
                <Briefcase className="w-4 h-4" />
                <span>{result.selectedCareer}</span>
              </div>
            ) : (
              <div className="text-sm text-slate-400 italic">Belum memilih karier spesifik</div>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Link href={`/hasil/${result.id}`} className="flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Lihat Detail <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  };

export default async function ResultsPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect('/api/auth/signin?callbackUrl=/results');
  }

  const results = await db
    .select()
    .from(assessmentResults)
    .where(
      and(
        eq(assessmentResults.userId, session.user.id),
        eq(assessmentResults.isActive, true)
      )
    );

  const belumTahu = results.find(r => r.quizType === 'belum_tahu_minat');
  const sudahTahu = results.find(r => r.quizType === 'sudah_tahu_minat');



  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Riwayat Asesmen</h1>
          <p className="text-slate-600">Lihat hasil analisis profil karirmu dari kedua jalur yang tersedia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResultCard 
            title="Hasil Eksplorasi (Belum Tahu Minat)" 
            description="Kamu belum tahu ingin jadi apa? Tes ini menganalisis kepribadian kerjamu untuk menemukan opsi karir terbaik."
            quizType="belum_tahu_minat"
            result={belumTahu}
            Icon={BrainCircuit}
          />
          <ResultCard 
            title="Hasil Validasi (Sudah Tahu Minat)" 
            description="Sudah punya incaran karir? Tes ini memvalidasi kecocokan potensimu dengan karir yang kamu tuju."
            quizType="sudah_tahu_minat"
            result={sudahTahu}
            Icon={Map}
          />
        </div>
      </main>
    </div>
  );
}
