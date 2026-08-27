'use client';

import { useState, useMemo } from 'react';
import { CAREER_PROFILES as CAREERS } from '@/data/gaplessData';
import { RoadmapView } from '@/components/RoadmapView';
import type { RoadmapNode } from '@/contexts/CareerContext';
import { useSession } from 'next-auth/react';
import { Navbar } from '@/components/Navbar';

type AssessmentResult = {
  id: string;
  createdAt: Date | null;
  selectedCareer: string | null;
  skillRatings: unknown;
  quizType: string;
  careerSlug: string | null;
  moduleStatuses?: unknown;
};

export default function RoadmapClient({ history }: { history: AssessmentResult[] }) {
  const { data: session } = useSession();
  const userTier = (session?.user as any)?.tier || 'Free';
  const isPro = userTier === 'Student Pro' || userTier === 'Pro';

  // Default to the most recent roadmap
  const [selectedId, setSelectedId] = useState<string>(history[0]?.id);

  const selectedHistory = useMemo(() => {
    return history.find(h => h.id === selectedId) || history[0];
  }, [history, selectedId]);

  const overrideData = useMemo(() => {
    if (!selectedHistory || !selectedHistory.selectedCareer) return undefined;

    // Find the static career profile
    const profile = CAREERS.find((c: any) => c.title === selectedHistory.selectedCareer);
    if (!profile) return undefined;

    const skillRatings = selectedHistory.skillRatings || {};

    const roadmapWithProgress: RoadmapNode[] = profile.roadmap.map((phase: any, phaseIdx: number) => {
      const isLockedPhase = !isPro && phaseIdx >= 2;
      
      if (isLockedPhase) {
        return {
          ...phase,
          title: 'Lanjutan',
          subtitle: 'Materi lanjutan untuk memaksimalkan potensimu.',
          description: 'Pelajari materi lebih dalam dengan praktik industri nyata.',
          modules: phase.modules.map((_: any, i: number) => `Materi Premium ${i + 1}`),
          completedModules: [],
          progress: 0,
        };
      }

      const moduleStatuses: Record<string, boolean> = (selectedHistory.moduleStatuses as Record<string, boolean>) || {};
      
      const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

      const completedModules = phase.modules.filter((_module: any, idx: number) => {
        const moduleSlug = slugify(_module);
        if (moduleStatuses[moduleSlug]) return true;

        const skill = profile.skills[idx % profile.skills.length];
        if (!skill) return false;
        const ratings = (skillRatings as Record<string, number>) || {};
        const userLevel = ratings[skill.name] ?? 0;
        return userLevel >= skill.required;
      });

      return {
        ...phase,
        completedModules,
        progress: phase.modules.length > 0 ? completedModules.length / phase.modules.length : 0,
      };
    });

    return {
      id: selectedHistory.id,
      selectedCareer: profile,
      roadmapWithProgress,
    };
  }, [selectedHistory, isPro]);

  return (
    <div className="min-h-screen flex flex-col bg-space">
      <Navbar />

      <main className="flex-1">
        {/* Switcher Header - Tabs */}
        {history.length > 1 && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-between relative z-10 gap-4">
              <div className="text-center">
                <h2 className="font-bold text-slate-800">Riwayat Roadmap Kamu</h2>
                <p className="text-sm text-slate-500">Pilih dari hasil asesmen aktif</p>
              </div>
              <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
                {history.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setSelectedId(h.id)}
                    className={`flex-1 sm:flex-none px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                      selectedId === h.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    {h.quizType === 'belum_tahu_minat' ? 'Jalur Eksplorasi' : 'Jalur Terarah'}: {h.selectedCareer}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {overrideData ? (
          <div className="-mt-12">
            <RoadmapView overrideData={overrideData} />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-4 py-20 text-center">
            <p className="text-slate-600">Terjadi kesalahan saat memuat data roadmap.</p>
          </div>
        )}
      </main>
    </div>
  );
}
