'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Star, Sparkles } from 'lucide-react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { getArchetypeReasoning, TRAITS, TRAIT_META, ASSESSMENT_QUESTIONS, Trait } from '@/data/gaplessData';

interface Props {
  dominantTrait: string;
  traitScores: Record<string, number>;
  // Optional key traits from AI insight, if any
  keyTraits?: string[];
  hideTitle?: boolean;
}

export function ArchetypeReasoningBlock({ dominantTrait, traitScores, keyTraits, hideTitle }: Props) {
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setChartReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  const meta = TRAIT_META[dominantTrait as Trait];
  const maxScore = ASSESSMENT_QUESTIONS.length;
  const archetypeReasoning = getArchetypeReasoning(traitScores);
  
  const traitRadarData = useMemo(() => {
    return TRAITS.map(t => ({ trait: t, value: traitScores[t] || 0 }));
  }, [traitScores]);

  if (!meta) return null;

  return (
    <div className="mb-12">
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        {!hideTitle && (
          <>
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Kamu Adalah{' '}
              <span style={{ color: meta.color }}>{dominantTrait}</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-6">
              {meta.description}
            </p>
          </>
        )}
        
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
      <div className="grid lg:grid-cols-2 gap-6">
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
              const score = traitScores[trait] || 0;
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
                  <div className="score-bar-track overflow-hidden bg-slate-100 rounded-full h-2">
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
          {keyTraits && keyTraits.length > 0 && (
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
                {keyTraits.map((t) => (
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
    </div>
  );
}
