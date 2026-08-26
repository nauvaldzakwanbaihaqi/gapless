'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, CheckCircle2, Circle, ChevronLeft, ChevronDown, RotateCcw, Lock } from 'lucide-react';
import { TRAIT_META } from '@/data/gaplessData';
import { useGaplessContext } from '@/contexts/CareerContext';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const PHASE_COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981'];
const PHASE_ICONS = ['🌱', '🌿', '🌳', '🏔️'];

export function RoadmapView() {
  const { selectedCareer, roadmapWithProgress, reset, setView } = useGaplessContext();
  const { data: session } = useSession();
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const toggleModule = (key: string) => {
    setExpandedModule((prev) => (prev === key ? null : key));
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
    <div className="min-h-screen bg-space px-4 sm:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: `${traitMeta.color}10`,
              border: `1px solid ${traitMeta.color}25`,
            }}
          >
            <Map size={14} style={{ color: traitMeta.color }} />
            <span className="text-xs font-semibold" style={{ color: traitMeta.color }}>
              Roadmap Belajar
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            {selectedCareer.icon} Roadmap {selectedCareer.title}
          </h1>
          <p className="text-gray-500 text-base max-w-lg mx-auto mb-6">
            Jalur belajar personal 4 fase. Modul yang sudah kamu penuhi
            akan ditandai selesai secara otomatis.
          </p>

          {/* Overall Progress */}
          <div className="max-w-sm mx-auto">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
              <span>Progres Keseluruhan</span>
              <span>
                {completedModules}/{totalModules} modul
              </span>
            </div>
            <div className="progress-track h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress * 100}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="progress-fill h-full"
                style={{
                  background: `linear-gradient(90deg, ${PHASE_COLORS[0]}, ${PHASE_COLORS[3]})`,
                }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">
              {Math.round(overallProgress * 100)}% selesai
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px"
            style={{ background: '#e5e7eb' }}
          />

          <div className="space-y-8">
            {roadmapWithProgress.map((phase, phaseIdx) => {
              const color = PHASE_COLORS[phaseIdx] ?? '#6b7280';
              const icon = PHASE_ICONS[phaseIdx] ?? '📌';
              const isCompleted = phase.progress === 1;
              const isPartial = phase.progress > 0 && phase.progress < 1;
              const isLocked = !isPro && phaseIdx >= 2;

              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + phaseIdx * 0.15 }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Timeline node */}
                  <div className="absolute left-3 sm:left-5 top-6 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                        delay: 0.3 + phaseIdx * 0.15,
                      }}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                      style={{
                        background: isLocked ? '#f8fafc' : (isCompleted
                          ? color
                          : isPartial
                            ? `${color}20`
                            : '#f1f5f9'),
                        border: `2px solid ${isLocked ? '#cbd5e1' : color}`,
                        boxShadow: isCompleted && !isLocked ? `0 0 20px ${color}30` : 'none',
                      }}
                    >
                      {isLocked ? (
                        <Lock size={14} className="text-slate-400" />
                      ) : isCompleted ? (
                        <CheckCircle2 size={16} className="text-white" />
                      ) : (
                        <span>{icon}</span>
                      )}
                    </motion.div>
                  </div>

                  {/* Phase Card */}
                  <div
                    className="glass-card p-6 sm:p-8 relative overflow-hidden"
                    style={{
                      border: `1px solid ${isCompleted && !isLocked ? `${color}30` : '#e5e7eb'}`,
                    }}
                  >
                    {isLocked && (
                      <div className="absolute inset-0 bg-white/70 backdrop-blur-[3px] z-20 flex flex-col items-center justify-center p-6 text-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3">
                          <Lock className="w-5 h-5 text-slate-500" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg mb-2">Fase Terkunci</h4>
                        <p className="text-sm text-gray-600 mb-5 max-w-sm">
                          Upgrade ke paket Student Pro untuk membuka fase roadmap tingkat lanjut dan maksimalkan potensimu.
                        </p>
                        <Link href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                          Upgrade Sekarang
                        </Link>
                      </div>
                    )}

                    {/* Phase Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                            style={{
                              background: `${color}12`,
                              color: color,
                            }}
                          >
                            Fase {phase.phase}
                          </span>
                          <span className="text-xs text-gray-400">{phase.duration}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{phase.title}</h3>
                        <p className="text-sm text-gray-500">{phase.subtitle}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span
                          className="text-2xl font-bold"
                          style={{ color }}
                        >
                          {Math.round(phase.progress * 100)}%
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Phase Progress Bar */}
                    <div className="progress-track mb-5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${phase.progress * 100}%` }}
                        transition={{ duration: 0.8, delay: 0.5 + phaseIdx * 0.15 }}
                        className="progress-fill"
                        style={{ background: color }}
                      />
                    </div>

                    {/* Modules */}
                    <div className="space-y-2">
                      {phase.modules.map((mod, modIdx) => {
                        const isModuleCompleted = phase.completedModules.includes(mod);
                        const skill = selectedCareer.skills[modIdx % selectedCareer.skills.length];
                        const moduleKey = `${phaseIdx}-${modIdx}`;
                        const isExpanded = expandedModule === moduleKey;

                        return (
                          <div key={mod}>
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 + phaseIdx * 0.1 + modIdx * 0.04 }}
                              role="button"
                              tabIndex={0}
                              aria-expanded={isExpanded}
                              onClick={() => toggleModule(moduleKey)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  toggleModule(moduleKey);
                                }
                              }}
                              className={`flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all cursor-pointer select-none ${isExpanded
                                  ? 'ring-1 shadow-sm'
                                  : 'hover:bg-gray-50'
                                }`}
                              style={{
                                background: isModuleCompleted
                                  ? `${color}08`
                                  : isExpanded
                                    ? '#f8fafc'
                                    : 'transparent',
                                ...(isExpanded
                                  ? { ringColor: `${color}30`, borderColor: `${color}20` }
                                  : {}),
                              }}
                            >
                              {isModuleCompleted ? (
                                <CheckCircle2
                                  size={16}
                                  style={{ color, flexShrink: 0 }}
                                />
                              ) : (
                                <Circle
                                  size={16}
                                  className="text-gray-300"
                                  style={{ flexShrink: 0 }}
                                />
                              )}
                              <span
                                className="text-sm flex-1"
                                style={{
                                  color: isModuleCompleted
                                    ? '#1e293b'
                                    : '#64748b',
                                  textDecoration: isModuleCompleted ? 'line-through' : 'none',
                                  textDecorationColor: `${color}60`,
                                }}
                              >
                                {mod}
                              </span>
                              {isModuleCompleted && skill && (
                                <span
                                  className="text-[10px] shrink-0 px-1.5 py-0.5 rounded"
                                  style={{ background: `${color}12`, color }}
                                >
                                  Terpenuhi
                                </span>
                              )}
                              <ChevronDown
                                size={14}
                                className={`shrink-0 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                                  }`}
                              />
                            </motion.div>

                            {/* Expanded Detail */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div
                                    className="ml-9 mt-1 mb-2 p-3 rounded-lg text-xs space-y-1.5"
                                    style={{ background: `${color}06`, border: `1px solid ${color}12` }}
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className="text-gray-500">Terkait skill:</span>
                                      <span className="font-medium" style={{ color }}>
                                        {skill?.name || 'Umum'}
                                      </span>
                                    </div>
                                    {skill && (
                                      <div className="flex items-center gap-2">
                                        <span className="text-gray-500">Target level:</span>
                                        <span className="font-medium text-slate-700">
                                          {['Tidak Ada', 'Dasar', 'Menengah', 'Lanjutan'][skill.required] || skill.required}
                                        </span>
                                      </div>
                                    )}
                                    <p className="text-gray-500 leading-relaxed pt-1">
                                      {isModuleCompleted
                                        ? '✅ Kamu sudah memenuhi skill ini. Modul ini bisa di-skip atau dijadikan review.'
                                        : '📘 Modul ini perlu dipelajari untuk menutup gap skill-mu.'}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-between mt-12 pb-8"
        >
          <button
            onClick={() => setView('skills')}
            className="btn-ghost flex items-center gap-1 text-sm relative z-30"
          >
            <ChevronLeft size={16} /> Kembali ke Skill
          </button>
          <button
            onClick={reset}
            className="btn-ghost flex items-center gap-2 text-sm relative z-30"
          >
            <RotateCcw size={14} /> Mulai Ulang
          </button>
        </motion.div>
      </div>
    </div>
  );
}
