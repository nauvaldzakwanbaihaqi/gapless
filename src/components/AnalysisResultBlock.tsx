'use client';

import { motion } from 'motion/react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Radar, Legend } from 'recharts';
import { Sparkles, CheckCircle2, AlertTriangle, ChevronRight, ChevronLeft, Home } from 'lucide-react';
import { GapInsight } from '@/contexts/CareerContext';
import Link from 'next/link';

interface AnalysisResultBlockProps {
  radarData: any[];
  traitMetaColor: string;
  chartReady: boolean;
  isLoadingGapAi: boolean;
  gapInsight: GapInsight | null;
  onNext?: () => void;
  onRetry?: () => void;
  nextLabel?: string;
  showBackHome?: boolean;
}

export function AnalysisResultBlock({
  radarData,
  traitMetaColor,
  chartReady,
  isLoadingGapAi,
  gapInsight,
  onNext,
  onRetry,
  nextLabel = 'Buat Roadmap',
  showBackHome = false
}: AnalysisResultBlockProps) {
  return (
    <div className="w-full flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mb-8">
        {/* Kolom Kiri: Radar Chart */}
        <div className="glass-card p-6 sm:p-8 flex flex-col items-center h-full">
          <h2 className="text-xl font-bold text-slate-900 mb-2 self-start">Radar Perbandingan</h2>
          <p className="text-xs text-gray-500 mb-6 self-start">
            Diperlukan (garis putus) vs. Level Kamu Saat Ini (isi)
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: chartReady ? 1 : 0,
              scale: chartReady ? 1 : 0.7,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="w-full"
            style={{ maxWidth: 500, aspectRatio: '1' }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="rgba(0,0,0,0.08)" />
                <PolarAngleAxis
                  dataKey="name"
                  tick={{ fill: '#64748b', fontSize: 10, fontWeight: 500 }}
                />
                <PolarRadiusAxis angle={90} domain={[0, 3]} tick={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: 12,
                    color: '#1e293b',
                    fontSize: 12,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  }}
                />
                <Radar
                  name="Diperlukan"
                  dataKey="required"
                  stroke="#ef4444"
                  strokeWidth={2}
                  strokeDasharray="6 3"
                  fill="transparent"
                />
                <Radar
                  name="Level Kamu"
                  dataKey="current"
                  stroke={traitMetaColor}
                  strokeWidth={2}
                  fill={traitMetaColor}
                  fillOpacity={0.2}
                  dot={{ r: 4, fill: traitMetaColor, stroke: '#fff', strokeWidth: 1.5 }}
                />
                <Legend
                  wrapperStyle={{ fontSize: 12, color: '#64748b' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Legend explanation */}
          <div className="mt-4 w-full space-y-2">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span
                className="w-4 h-0.5 rounded"
                style={{ background: '#ef4444', display: 'inline-block' }}
              />
              Garis putus = Level yang diperlukan
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span
                className="w-4 h-0.5 rounded"
                style={{ background: traitMetaColor, display: 'inline-block' }}
              />
              Isi solid = Level kamu saat ini
            </div>
          </div>
        </div>
        {/* Akhir Kolom Kiri */}

        {/* Kolom Kanan: AI Gap Insight */}
        <div className="h-full flex flex-col">
          {isLoadingGapAi ? (
            <div className="glass-card p-6 flex flex-col items-center justify-center animate-pulse gap-3 h-full min-h-[300px]">
              <Sparkles size={24} className="text-gray-400 animate-spin-slow" />
              <p className="text-sm text-gray-500 font-medium">AI sedang menganalisis kesenjangan skill-mu...</p>
            </div>
          ) : gapInsight ? (
            <div className="glass-card p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={20} style={{ color: traitMetaColor }} />
                <h3 className="font-bold text-slate-900">Analisis Kesenjangan (AI)</h3>
              </div>

              <div className="text-xs text-gray-500 mb-6 pb-4 border-b border-gray-100 flex items-start gap-2">
                <div className="mt-0.5">ℹ️</div>
                <div>{gapInsight.basis_penilaian}</div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-emerald-600">
                    <CheckCircle2 size={18} />
                    <h4 className="font-semibold text-sm">Kesesuaian (Sudah Baik)</h4>
                  </div>
                  <ul className="space-y-2">
                    {gapInsight.kesesuaian.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3 text-amber-600">
                    <AlertTriangle size={18} />
                    <h4 className="font-semibold text-sm">Perlu Ditingkatkan (Gap)</h4>
                  </div>
                  <ul className="space-y-2">
                    {gapInsight.kekurangan.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-medium text-slate-700 italic text-center">
                "{gapInsight.catatan_singkat}"
              </div>
            </div>
          ) : (
            <div className="glass-card p-6 flex items-center justify-center h-full text-gray-400 text-sm italic">
              Belum ada data analisis.
            </div>
          )}
        </div>
        {/* Akhir Kolom Kanan */}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-2 sm:gap-4">
          {showBackHome && (
            <Link href="/" className="btn-ghost flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900">
              <Home size={16} /> Home
            </Link>
          )}
          {onRetry && (
            <button onClick={onRetry} className="btn-ghost flex items-center gap-1 text-sm">
              <ChevronLeft size={16} /> Ulangi Kuis
            </button>
          )}
        </div>
        {onNext && (
          <button
            onClick={onNext}
            className="btn-primary flex items-center gap-2 text-sm"
          >
            {nextLabel}
            <ChevronRight size={16} />
          </button>
        )}
      </motion.div>
    </div>
  );
}
