'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, CheckCircle2, Circle, ChevronLeft, ChevronDown, RotateCcw, Lock, Home } from 'lucide-react';
import { TRAIT_META } from '@/data/gaplessData';
import { useGaplessContext } from '@/contexts/CareerContext';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import type { CareerProfile } from '@/data/gaplessData';
import type { RoadmapNode } from '@/contexts/CareerContext';

const PHASE_COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981'];
const PHASE_ICONS = ['🌱', '🌿', '🌳', '🏔️'];

export interface RoadmapViewProps {
  overrideData?: {
    id?: string;
    selectedCareer: CareerProfile | null;
    roadmapWithProgress: RoadmapNode[];
  };
}

import { useRouter } from 'next/navigation';

export function RoadmapView({ overrideData }: RoadmapViewProps = {}) {
  const context = useGaplessContext();
  const selectedCareer = overrideData?.selectedCareer || context.selectedCareer;
  const roadmapWithProgress = overrideData?.roadmapWithProgress || context.roadmapWithProgress;
  const resetProgress = context.resetProgress;
  const { data: session } = useSession();
  const router = useRouter();
  const [isResetting, setIsResetting] = useState(false);

  const handleReset = async () => {
    if (!window.confirm('Progress roadmap ini akan direset ke 0%. Hasil analisis dan riwayat tes kamu tidak akan terhapus. Lanjutkan?')) {
      return;
    }

    if (overrideData?.id) {
      setIsResetting(true);
      try {
        const res = await fetch('/api/roadmap/reset', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ assessmentId: overrideData.id })
        });
        if (res.ok) {
          // Refresh page so server component refetches
          window.location.reload();
        } else {
          alert('Gagal mereset progress.');
        }
      } catch (err) {
        alert('Terjadi kesalahan jaringan.');
      } finally {
        setIsResetting(false);
      }
    } else {
      // Fallback for SPA flow guest / logged in user right after assessment
      resetProgress();
    }
  };

  const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  const handleModuleClick = (mod: string, isLockedSeq: boolean) => {
    if (isLockedSeq) return;
    if (overrideData?.id) {
      router.push(`/roadmap/${overrideData.id}/modul/${slugify(mod)}`);
    } else {
      alert('Silakan login dan simpan hasil tes terlebih dahulu untuk melihat detail modul.');
    }
  };

  if (!selectedCareer) return null;

  const userTier = (session?.user as any)?.tier || 'Free';
  const isPro = userTier === 'Student Pro' || userTier === 'Pro';

  const traitMeta = TRAIT_META[selectedCareer.trait];

  const totalModules = roadmapWithProgress.reduce(
    (sum, p) => sum + p.modules.length,
    0
  );
  const completedModules = roadmapWithProgress.reduce(
    (sum, p) => sum + p.completedModules.length,
    0
  );
  const overallProgress = totalModules > 0 ? completedModules / totalModules : 0;

  return (
    <div className="min-h-screen bg-space">
      {/* Logo Strip (Minimal Navbar) */}
      <div className="w-full px-6 py-4 max-w-7xl mx-auto flex items-center justify-start">
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform hover:scale-105 animate-slide-from-left"
        >
          <img src="/Asset 1.png" alt="Gapless Explorer Logo" className="h-10 w-auto" />
          <span className="font-bold text-slate-900 text-2xl">Gapless</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full mb-6 bg-slate-100/80 border border-slate-200/50">
            <span className="text-sm font-semibold text-slate-700">
              Roadmap Belajar
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 mx-auto max-w-4xl leading-tight">
            Roadmap {selectedCareer.title}
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto mb-12">
            Jalur belajar personal 4 fase. Modul yang sudah kamu penuhi
            akan ditandai selesai secara otomatis.
          </p>

          {/* Overall Progress */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between text-sm md:text-base font-medium text-slate-500 mb-3">
              <span>Progres Keseluruhan</span>
              <span>{Math.round(overallProgress * 100)}% Selesai</span>
            </div>
            <div className="progress-track h-2.5 bg-slate-200">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress * 100}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="progress-fill h-full bg-blue-600"
              />
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {roadmapWithProgress.map((phase, phaseIdx) => {
            const isCompleted = phase.progress === 1;
            const isLocked = !isPro && phaseIdx >= 2;
            const isActivePhase = !isCompleted && !isLocked && (phaseIdx === 0 || roadmapWithProgress[phaseIdx - 1].progress === 1);

            let isPreviousCompleted = true; // reset for each phase

            return (
              <motion.div
                key={phase.phase || phaseIdx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + phaseIdx * 0.15 }}
                className="relative"
              >
                {/* Phase Card */}
                <div
                  className={`bg-white rounded-[2rem] p-6 md:p-8 relative overflow-hidden transition-all duration-300 ${
                    isActivePhase ? 'border-2 border-blue-600 ring-4 ring-blue-50 shadow-md' : 'border border-slate-200 shadow-sm'
                  }`}
                >
                  {isLocked && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[4px] bg-white/40">
                      <div className="bg-white/90 backdrop-blur-md border border-slate-100 p-8 rounded-3xl shadow-xl flex flex-col items-center max-w-sm">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-slate-100">
                          <Lock className="w-6 h-6 text-slate-700" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-xl mb-3">Fase Terkunci</h4>
                        <p className="text-sm text-slate-500 mb-6 px-2 leading-relaxed">
                          Upgrade ke paket Student Pro untuk membuka fase roadmap tingkat lanjut dan maksimalkan potensimu.
                        </p>
                        <Link href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg w-full">
                          Upgrade Sekarang
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Phase Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-600 text-white uppercase tracking-wide">
                          Fase {phase.phase || (phaseIdx + 1)}
                        </span>
                        <span className="text-sm font-medium text-slate-500">{phase.duration || 'Beberapa Minggu'}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-1">{phase.title}</h3>
                      <p className="text-sm font-medium text-blue-600">{phase.subtitle}</p>
                    </div>
                    <div className="text-right shrink-0 pt-1">
                      <span className="text-2xl font-bold text-blue-600">
                        {Math.round(phase.progress * 100)}%
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-6 truncate max-w-3xl">
                    {phase.description}
                  </p>

                  {/* Phase Progress Bar */}
                  <div className="progress-track mb-6 h-2 bg-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${phase.progress * 100}%` }}
                      transition={{ duration: 0.8, delay: 0.5 + phaseIdx * 0.15 }}
                      className="progress-fill h-full bg-blue-600"
                    />
                  </div>

                  {/* Modules */}
                  <div className="space-y-3">
                    {phase.modules.map((mod, modIdx) => {
                      const isModuleCompleted = phase.completedModules.includes(mod);
                      const isAvailable = !isModuleCompleted && isPreviousCompleted;
                      const isLockedSeq = !isModuleCompleted && !isAvailable;
                      
                      isPreviousCompleted = isModuleCompleted;
                      
                      const isPremiumLocked = isLocked;

                      return (
                        <div key={mod}>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + phaseIdx * 0.1 + modIdx * 0.04 }}
                            role="button"
                            tabIndex={isLockedSeq ? -1 : 0}
                            onClick={() => handleModuleClick(mod, isLockedSeq)}
                            className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                              isModuleCompleted
                                ? 'bg-blue-50/60 border-blue-100'
                                : isAvailable
                                ? 'bg-white border-slate-200 shadow-sm hover:border-blue-300 cursor-pointer'
                                : 'bg-slate-50 border-slate-100 cursor-not-allowed'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className="shrink-0 flex items-center justify-center">
                                {isModuleCompleted ? (
                                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                  </div>
                                ) : isAvailable ? (
                                  <div className="w-5 h-5 rounded-full border-2 border-slate-300 ml-0.5" />
                                ) : (
                                  <Lock className="w-5 h-5 text-slate-400" />
                                )}
                              </div>
                              <span
                                className={`font-semibold text-sm md:text-base ${
                                  isLockedSeq ? 'text-slate-400' : 'text-slate-800'
                                }`}
                              >
                                {mod}
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              {isModuleCompleted && (
                                <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold tracking-wide">
                                  Terpenuhi
                                </span>
                              )}
                              {isLockedSeq && !isPremiumLocked && (
                                <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold tracking-wide">
                                  Selesaikan Modul Sebelumnya
                                </span>
                              )}
                              
                              <ChevronDown 
                                className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                                  isLockedSeq ? 'text-slate-300' : 'text-slate-500'
                                } -rotate-90`} 
                              />
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pb-8"
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center shadow-sm relative z-30"
          >
            <Home size={18} /> Home
          </Link>
          
          <button
            onClick={handleReset}
            disabled={isResetting}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center shadow-sm relative z-30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RotateCcw size={18} className={isResetting ? "animate-spin" : ""} /> {isResetting ? "Mereset..." : "Reset Progress"}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
