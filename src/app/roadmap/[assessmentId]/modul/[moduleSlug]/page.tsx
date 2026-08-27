import { redirect } from 'next/navigation';
import { db } from '@/db';
import { assessmentResults, roadmapProgress } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { auth } from '@/auth';
import { CAREER_PROFILES, MODULE_DETAILS } from '@/data/gaplessData';
import { Navbar } from '@/components/Navbar';
import ModuleDetailClient from './ModuleDetailClient';

export default async function ModuleDetailPage({ params }: { params: { assessmentId: string, moduleSlug: string } }) {
  const session = await auth();
  if (!session?.user) {
    redirect('/');
  }

  const { assessmentId, moduleSlug } = params;

  // 1. Ambil assessment result dari DB
  const result = await db.query.assessmentResults.findFirst({
    where: and(
      eq(assessmentResults.id, assessmentId),
      eq(assessmentResults.userId, session.user.id)
    )
  });

  if (!result || !result.selectedCareer) {
    redirect('/roadmap');
  }

  // 2. Ambil roadmap progress
  const progressRecord = await db.query.roadmapProgress.findFirst({
    where: eq(roadmapProgress.assessmentResultId, assessmentId)
  });
  
  const moduleStatuses = (progressRecord?.moduleStatuses as Record<string, boolean>) || {};

  // 3. Cocokkan profil karir
  const profile = CAREER_PROFILES.find((c) => c.title === result.selectedCareer);
  if (!profile) {
    redirect('/roadmap');
  }

  // 4. Cari fase mana yang memiliki modul ini, dan apakah modul ini valid
  // (Karena modules di gaplessData cuma string array, kita cocokkan stringnya setelah di-slugify)
  const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  
  let targetPhaseIndex = -1;
  let targetModuleIndex = -1;
  let moduleTitle = '';

  for (let i = 0; i < profile.roadmap.length; i++) {
    const phase = profile.roadmap[i];
    const modIdx = phase.modules.findIndex(m => slugify(m) === moduleSlug);
    if (modIdx !== -1) {
      targetPhaseIndex = i;
      targetModuleIndex = modIdx;
      moduleTitle = phase.modules[modIdx];
      break;
    }
  }

  if (targetPhaseIndex === -1) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Modul Tidak Ditemukan</h2>
        <p className="text-slate-500 mb-6">Kami tidak dapat menemukan modul "{moduleSlug}" di roadmap ini.</p>
        <a href="/roadmap" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Kembali ke Roadmap</a>
      </div>
    );
  }

  const phaseData = profile.roadmap[targetPhaseIndex];
  
  // 5. Cek apakah modul ini sudah selesai
  // Logic completion: dari manual moduleStatuses ATAU dari skillRatings awal
  let isCompleted = !!moduleStatuses[moduleSlug];
  
  if (!isCompleted) {
    const skill = profile.skills[targetModuleIndex % profile.skills.length];
    if (skill) {
      const skillRatings = (result.skillRatings as Record<string, number>) || {};
      const userLevel = skillRatings[skill.name] ?? 0;
      const requiredLevel = targetPhaseIndex + 1;
      if (userLevel >= requiredLevel) {
        isCompleted = true;
      }
    }
  }

  // 6. Ambil data kurasi manual untuk konten modul (jika ada, kalau tidak pakai fallback template)
  const detailData = MODULE_DETAILS[moduleSlug] || {
    slug: moduleSlug,
    title: moduleTitle,
    duration: 'Estimasi 1–2 jam',
    target: `Menguasai konsep dasar ${moduleTitle} untuk kebutuhan industri.`,
    breakdown: [
      { title: 'Konsep Dasar', description: `Pengenalan tentang ${moduleTitle}` },
      { title: 'Studi Kasus', description: 'Penerapan di dunia nyata' },
      { title: 'Praktik', description: 'Latihan mandiri' },
    ],
    resources: [
      {
        title: `Cari "${moduleTitle}" di Coursera`,
        provider: 'Coursera',
        type: 'Course',
        isFree: true,
        url: '#'
      },
      {
        title: `Cari "${moduleTitle}" di YouTube`,
        provider: 'YouTube',
        type: 'Video',
        isFree: true,
        url: '#'
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3FAFF]">
      <Navbar />
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-8 relative z-10">
        <ModuleDetailClient 
          assessmentId={assessmentId}
          moduleSlug={moduleSlug}
          profile={profile}
          phaseData={phaseData}
          phaseIndex={targetPhaseIndex}
          detailData={detailData}
          isCompleted={isCompleted}
        />
      </main>
    </div>
  );
}
