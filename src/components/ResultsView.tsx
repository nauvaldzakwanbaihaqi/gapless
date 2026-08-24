'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Star, ArrowRight, Sparkles, AlertCircle, Zap } from 'lucide-react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { getArchetypeReasoning, TRAITS, TRAIT_META, ASSESSMENT_QUESTIONS } from '@/data/gaplessData';
import { useGaplessContext } from '@/contexts/CareerContext';

export function ResultsView() {
  const {
    traitScores,
    dominantTrait,
    traitRadarData,
    recommendedCareers,
    selectCareer,
    reset,
    aiInsight,
    isLoadingAi,
    aiError,
    fetchAiInsight,
  } = useGaplessContext();

  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setChartReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  // Trigger AI analysis on mount
  useEffect(() => {
    fetchAiInsight();
  }, [fetchAiInsight]);

  if (!dominantTrait) return null;

  const meta = TRAIT_META[dominantTrait];
  const maxScore = ASSESSMENT_QUESTIONS.length;
  const archetypeReasoning = getArchetypeReasoning(traitScores);

  return (
    <div className="min-h-screen bg-space px-4 sm:px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="text-5xl mb-4">{meta.emoji}</div>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: `${meta.color}10`,
              border: `1px solid ${meta.color}30`,
            }}
          >
            <Star size={14} style={{ color: meta.color }} />
            <span className="text-xs font-semibold" style={{ color: meta.color }}>
              Hasilmu Sudah Siap
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Kamu Adalah{' '}
            <span style={{ color: meta.color }}>{dominantTrait}</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-6">
            {meta.description}
          </p>
          
          <div className="max-w-2xl mx-auto bg-white/60 p-6 rounded-2xl border border-white/50 text-left shadow-sm">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 mt-1 shrink-0" style={{ color: meta.color }} />
              <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                <span className="font-bold text-slate-900 block mb-1">Mengapa kamu mendapat hasil ini?</span>
                {archetypeReasoning}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Two Column: Trait Breakdown + Radar ── */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Left — Trait Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-6">Rincian Trait</h2>
            <div className="space-y-5">
              {TRAITS.map((trait) => {
                const score = traitScores[trait];
                const pct = Math.round((score / maxScore) * 100);
                const tMeta = TRAIT_META[trait];
                const isDominant = trait === dominantTrait;
                return (
                  <div key={trait}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{tMeta.emoji}</span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: isDominant ? tMeta.color : '#64748b' }}
                        >
                          {trait}
                        </span>
                        {isDominant && (
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{
                              background: `${tMeta.color}15`,
                              color: tMeta.color,
                            }}
                          >
                            DOMINAN
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-400">
                        {score}/{maxScore} ({pct}%)
                      </span>
                    </div>
                    <div className="score-bar-track">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        style={{
                          height: '100%',
                          borderRadius: 99,
                          background: tMeta.color,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Radar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 flex flex-col items-center"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-2 self-start">Radar Trait</h2>
            <p className="text-xs text-gray-500 mb-6 self-start">
              Distribusi kepribadianmu di 4 dimensi
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: chartReady ? 1 : 0,
                scale: chartReady ? 1 : 0.7,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="w-full"
              style={{ maxWidth: 360, aspectRatio: '1' }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="72%" data={traitRadarData}>
                  <PolarGrid stroke="rgba(0,0,0,0.08)" />
                  <PolarAngleAxis
                    dataKey="trait"
                    tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, maxScore]}
                    tick={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: 12,
                      color: '#1e293b',
                      fontSize: 13,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    }}
                  />
                  <Radar
                    name="Score"
                    dataKey="value"
                    stroke={meta.color}
                    strokeWidth={2.5}
                    fill={meta.color}
                    fillOpacity={0.2}
                    dot={{
                      r: 5,
                      fill: meta.color,
                      stroke: '#fff',
                      strokeWidth: 1.5,
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Key Traits badges */}
            {aiInsight?.traits && aiInsight.traits.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-4 w-full p-4 rounded-xl"
                style={{
                  background: `${meta.color}08`,
                  border: `1px solid ${meta.color}20`,
                }}
              >
                <p className="text-xs text-gray-500 mb-2">Sifat Utama (Key Traits)</p>
                <div className="flex flex-wrap gap-2">
                  {aiInsight.traits.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: `${meta.color}12`,
                        color: meta.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* ── AI Personality Narrative ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #1d4ed8, #3b82f6, #22d3ee)',
                boxShadow: '0 0 20px rgba(37,99,235,0.2)',
              }}
            >
              <Sparkles size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Analisis Kepribadian AI</h2>
              <p className="text-xs text-gray-400">
                {isLoadingAi
                  ? 'Menghubungkan ke neural engine...'
                  : aiError
                    ? 'Analisis AI sedang tidak tersedia'
                    : `Didukung oleh ${aiInsight?.ai_engine_used === 'gemini' ? 'Google Gemini' : 'Groq'} — berdasarkan pola jawaban spesifikmu`
                }
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isLoadingAi && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 py-8 justify-center"
              >
                <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-sm text-gray-500">
                  Menganalisis pola kepribadianmu...
                </span>
              </motion.div>
            )}

            {aiError && !isLoadingAi && (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 py-6 px-4 rounded-xl"
                style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}
              >
                <AlertCircle size={18} className="text-red-500 shrink-0" />
                <div>
                  <p className="text-sm text-red-600">Analisis AI tidak tersedia</p>
                  <p className="text-xs text-gray-500">
                    Hasil berbasis aturanmu tetap akurat. Narasi AI tidak dapat dihasilkan.
                  </p>
                </div>
              </motion.div>
            )}

            {aiInsight && !isLoadingAi && (
              <motion.div
                key="narrative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-600 leading-relaxed text-[15px] whitespace-pre-line">
                  {aiInsight.personality_summary}
                </p>

                {aiInsight.reasoning && (
                  <div className="mt-4">
                    <details className="group [&_summary::-webkit-details-marker]:hidden bg-blue-50/50 rounded-xl border border-blue-100/50">
                      <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-semibold text-blue-900">
                        <div className="flex items-center gap-2">
                          <Sparkles size={16} className="text-blue-500" />
                          Bagaimana AI menyimpulkan ini?
                        </div>
                        <span className="transition duration-300 group-open:-rotate-180 text-blue-500">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                      </summary>
                      <div className="text-gray-600 text-[14px] leading-relaxed px-4 pb-4 whitespace-pre-line border-t border-blue-100/50 pt-3 mt-1">
                        {aiInsight.reasoning}
                      </div>
                    </details>
                  </div>
                )}

                {/* Strengths */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Zap size={14} style={{ color: '#10b981' }} />
                    Kekuatan Utama
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {aiInsight.strengths.map((s, i) => (
                      <motion.div
                        key={s}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.05 }}
                        className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full"
                        style={{
                          background: 'rgba(16,185,129,0.08)',
                          border: '1px solid rgba(16,185,129,0.15)',
                          color: '#475569',
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: '#10b981' }}
                        />
                        {s}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Recommended Careers ── */}
        {recommendedCareers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="glass-card p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.15)',
                }}
              >
                <TrendingUp size={18} className="text-emerald-500" />
              </div>
              <div>
                <h2 className="text-slate-900 text-xl font-bold">Karir yang Direkomendasikan</h2>
                <p className="text-xs text-gray-500">
                  Pilihan terbaik untuk profilmu {dominantTrait} — klik untuk menjelajahi
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {recommendedCareers.map((career, i) => {
                return (
                  <motion.button
                    key={career.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + i * 0.1 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => selectCareer(career)}
                    className="glass-card p-5 text-left group cursor-pointer"
                    style={{
                      border: `1px solid ${i === 0 ? `${meta.color}30` : '#e5e7eb'}`,
                    }}
                  >
                    {i === 0 && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 inline-block"
                        style={{
                          background: `${meta.color}12`,
                          color: meta.color,
                        }}
                      >
                        Pilihan Terbaik
                      </span>
                    )}
                    <div className="text-2xl mb-2">{career.icon}</div>
                    <h3 className="text-slate-900 font-bold mb-1">{career.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">
                      {career.description}
                    </p>

                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: 'rgba(16,185,129,0.08)',
                          color: '#059669',
                          border: '1px solid rgba(16,185,129,0.15)',
                        }}
                      >
                        {career.salaryRange}
                      </span>
                      <span className="text-xs text-gray-400">
                        Pertumbuhan {career.growthOutlook}
                      </span>
                    </div>
                    <div className="mt-5">
                      <div className="btn-primary flex items-center justify-center gap-2 text-sm w-full py-3 shadow-md group-hover:shadow-lg transition-all">
                        Analisis kesenjangan skill
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ── Reset ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center pb-8"
        >
          <button
            onClick={reset}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Ulangi assesmen
          </button>
        </motion.div>
      </div>
    </div>
  );
}