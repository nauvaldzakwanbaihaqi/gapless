'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, ChevronRight, ChevronLeft, BarChart3 } from 'lucide-react';
import { ASSESSMENT_QUESTIONS, type AssessmentOption } from '@/data/gaplessData';
import { useGaplessContext } from '@/contexts/CareerContext';

// Fisher-Yates shuffle — creates a new shuffled array
function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function AssessmentFlow() {
  const { answers, setAnswer, isAssessmentComplete, setView } =
    useGaplessContext();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [started, setStarted] = useState(false);
  const [showRetakeModal, setShowRetakeModal] = useState(false);
  const [isCheckingActive, setIsCheckingActive] = useState(false);

  const question = ASSESSMENT_QUESTIONS[currentIdx];
  const total = ASSESSMENT_QUESTIONS.length;
  const progress = ((currentIdx + 1) / total) * 100;

  // Shuffle options once on mount — stable per session, different across sessions
  // Each question gets its own shuffled order, stored as an array of
  // { originalIndex, option } so we can map back to the original index for scoring
  const shuffledOptionsMap = useMemo(() => {
    const map: Record<number, { originalIndex: number; option: AssessmentOption }[]> = {};
    for (const q of ASSESSMENT_QUESTIONS) {
      const indexed = q.options.map((opt, idx) => ({ originalIndex: idx, option: opt }));
      map[q.id] = shuffleArray(indexed);
    }
    return map;
  }, []); // Empty deps = computed once on mount

  const currentShuffledOptions = shuffledOptionsMap[question.id] || question.options.map((opt, idx) => ({ originalIndex: idx, option: opt }));

  const handleSelect = (optionIndex: number) => {
    setAnswer(question.id, optionIndex);
  };

  const handleNext = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx((i) => i + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((i) => i - 1);
    }
  };

  const handleFinish = () => {
    setView('results');
  };

  // ── Start Screen ──
  if (!started) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-space px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-lg"
        >
          <div
            className="flex items-center justify-center w-20 h-20 rounded-2xl mx-auto mb-6"
            style={{
              background: 'linear-gradient(135deg, #1d4ed8, #3b82f6, #22d3ee)',
              boxShadow: '0 0 40px rgba(37,99,235,0.3)',
            }}
          >
            <Brain size={36} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            <span className="gradient-text">Assesmen</span> Karir
          </h1>
          <p className="text-gray-500 text-lg mb-4 leading-relaxed">
            Jawab 15 pertanyaan untuk menemukan trait karir dominanmu dan temukan
            jalur karir yang paling cocok untukmu.
          </p>
          <p className="text-gray-400 text-sm mb-8">
            100% client-side &middot; Tidak ada data yang keluar dari browsermu &middot; ~3 menit
          </p>
          <button
            onClick={async () => {
              setIsCheckingActive(true);
              try {
                // Determine quizType logic here if we have multiple paths in the future
                // Currently defaults to 'belum_tahu_minat'
                const res = await fetch('/api/assessment/has-active?quizType=belum_tahu_minat');
                const data = await res.json();
                if (data.hasActive) {
                  setShowRetakeModal(true);
                } else {
                  setStarted(true);
                }
              } catch (e) {
                setStarted(true); // Fallback to start if API fails
              } finally {
                setIsCheckingActive(false);
              }
            }}
            disabled={isCheckingActive}
            className="btn-primary flex items-center gap-2 mx-auto text-base disabled:opacity-70"
          >
            <Brain size={18} />
            {isCheckingActive ? 'Memuat...' : 'Mulai Assesmen'}
          </button>
        </motion.div>

        {/* Retake Modal */}
        <AnimatePresence>
          {showRetakeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-card w-full max-w-md rounded-2xl border border-white/10 p-6 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-cyan-400" />
                <h2 className="text-xl font-bold text-white mb-3">Konfirmasi Retake</h2>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Kamu akan mengambil tes ini lagi. Hasil analisis kamu akan diperbarui. Kalau rekomendasi kariernya beda dari sebelumnya, progress roadmap lama kamu tetap tersimpan tapi untuk sementara tidak ditampilkan. Lanjutkan?
                </p>
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setShowRetakeModal(false)}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    onClick={() => {
                      setShowRetakeModal(false);
                      setStarted(true);
                    }}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors border border-blue-500/30"
                  >
                    Ya, Lanjutkan
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ── Completion Screen ──
  if (isAssessmentComplete && currentIdx === total - 1 && answers[question.id] !== undefined) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-space px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div
            className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #10b981, #06b6d4)',
              boxShadow: '0 0 40px rgba(16,185,129,0.3)',
            }}
          >
            <BarChart3 size={36} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Assesmen Selesai!</h2>
          <p className="text-gray-500 text-lg mb-8">
            Semua {total} pertanyaan telah dijawab. Siap melihat hasilmu.
          </p>
          <button
            onClick={handleFinish}
            className="btn-primary flex items-center gap-2 mx-auto text-base"
          >
            Lihat Hasil
            <ChevronRight size={18} />
          </button>
        </motion.div>
      </div>
    );
  }

  // ── Question Flow ──
  return (
    <div className="min-h-screen bg-space px-6 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Brain size={20} style={{ color: '#1d4ed8' }} />
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
              Assesmen
            </span>
          </div>
          <span className="text-sm text-gray-400">
            {currentIdx + 1} / {total}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="progress-track mb-8">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Dimension Badge */}
        <div className="mb-4">
          <span
            className="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
            style={{
              background: 'rgba(37,99,235,0.08)',
              color: '#3b82f6',
            }}
          >
            {question.dimension}
          </span>
        </div>
        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8 leading-relaxed">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {currentShuffledOptions.map((item, displayIdx) => {
                const isSelected = answers[question.id] === item.originalIndex;
                return (
                  <motion.button
                    key={item.option.label + '-' + item.originalIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: displayIdx * 0.06 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelect(item.originalIndex)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-200 flex items-start gap-4 ${
                      isSelected
                        ? 'option-card selected'
                        : 'option-card'
                    }`}
                  >
                    <span
                      className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold"
                      style={{
                        background: isSelected
                          ? 'rgba(37,99,235,0.12)'
                          : '#f1f5f9',
                        color: isSelected ? '#1d4ed8' : '#94a3b8',
                      }}
                    >
                      {['A', 'B', 'C', 'D'][displayIdx]}
                    </span>
                    <span
                      className="text-base leading-relaxed pt-1"
                      style={{
                        color: isSelected ? '#1e293b' : '#64748b',
                      }}
                    >
                      {item.option.text}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10">
          <button
            onClick={handlePrev}
            disabled={currentIdx === 0}
            className="btn-ghost flex items-center gap-1 text-sm disabled:opacity-30"
          >
            <ChevronLeft size={16} />
            Sebelumnya
          </button>

          {currentIdx === total - 1 ? (
            <button
              onClick={handleFinish}
              disabled={answers[question.id] === undefined}
              className="btn-primary flex items-center gap-2 text-sm disabled:opacity-40"
            >
              Selesai
              <BarChart3 size={16} />
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={answers[question.id] === undefined}
              className="btn-primary flex items-center gap-2 text-sm disabled:opacity-40"
            >
              Selanjutnya
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
