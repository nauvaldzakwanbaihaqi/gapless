'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Briefcase, 
  Clock, 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Send, 
  Sparkles, 
  FileText, 
  ArrowLeft,
  Share2,
  Lock
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IndustrySimulation } from '@/data/industrySimulations';

interface Props {
  assessmentId: string;
  careerTitle: string;
  careerSlug: string;
  simulation: IndustrySimulation;
  isInitiallyCompleted: boolean;
  userName: string;
}

export default function SimulationClient({
  assessmentId,
  careerTitle,
  careerSlug,
  simulation,
  isInitiallyCompleted,
  userName,
}: Props) {
  const router = useRouter();
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(isInitiallyCompleted);
  const [showCelebrationModal, setShowCelebrationModal] = useState(false);

  const currentTask = simulation.tasks[currentTaskIndex];
  const totalTasks = simulation.tasks.length;
  const progressPercent = Math.round(((currentTaskIndex + 1) / totalTasks) * 100);

  const handleOptionSelect = (optionIdx: number) => {
    setSelectedOptions((prev) => ({ ...prev, [currentTask.id]: optionIdx }));
    setAnswers((prev) => ({ ...prev, [currentTask.id]: currentTask.options?.[optionIdx]?.text }));
  };

  const handleTextChange = (text: string) => {
    setAnswers((prev) => ({ ...prev, [currentTask.id]: text }));
  };

  const isCurrentTaskFilled = () => {
    if (currentTask.deliverableType === 'choice') {
      return selectedOptions[currentTask.id] !== undefined;
    }
    const txt = answers[currentTask.id];
    return typeof txt === 'string' && txt.trim().length > 10;
  };

  const handleNextTask = () => {
    if (currentTaskIndex < totalTasks - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
    }
  };

  const handlePrevTask = () => {
    if (currentTaskIndex > 0) {
      setCurrentTaskIndex(currentTaskIndex - 1);
    }
  };

  const handleSubmitAll = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/simulation/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          assessmentId,
          careerSlug,
          answers,
        }),
      });

      if (res.ok) {
        setIsCompleted(true);
        setShowCelebrationModal(true);
      } else {
        alert('Terjadi kesalahan saat mengirim jawaban simulasi.');
      }
    } catch (e) {
      console.error(e);
      alert('Gagal menghubungi server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          href={`/roadmap?assessmentId=${assessmentId}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors bg-white/80 px-4 py-2 rounded-xl border border-slate-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Roadmap</span>
        </Link>

        {isCompleted && (
          <Link
            href={`/roadmap/${assessmentId}/sertifikat`}
            className="inline-flex items-center gap-2 text-sm font-bold bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <Award className="w-4 h-4" />
            <span>Lihat Sertifikat LinkedIn</span>
          </Link>
        )}
      </div>

      {/* Hero Header Partner Card */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-blue-100/50 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg text-white shadow-xs"
              style={{ backgroundColor: simulation.companyColor }}
            >
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Virtual Job Simulation
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {simulation.badgeLabel}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                {simulation.companyName} &bull; {careerTitle}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-100">
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <Clock className="w-3.5 h-3.5 text-blue-600" /> {simulation.estimatedHours}
            </span>
            <span>&bull;</span>
            <span className="font-semibold text-slate-700">{simulation.difficulty}</span>
          </div>
        </div>

        <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
          {simulation.simulationTitle}
        </h2>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
          {simulation.summary}
        </p>

        {/* Skills Validated Tags */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 mr-2">Skill yang Divalidasi:</span>
          {simulation.skillsValidated.map((skill) => (
            <span
              key={skill}
              className="text-xs font-semibold px-3 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-100"
            >
              ✓ {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Task Progress Tracker */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs">
        <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-2">
          <span>Milestone Simulasi: Task {currentTaskIndex + 1} dari {totalTasks}</span>
          <span className="text-blue-600">{progressPercent}% Selesai</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            className="h-full bg-linear-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-300"
          />
        </div>

        {/* Task Tabs */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {simulation.tasks.map((t, idx) => {
            const isDone = selectedOptions[t.id] !== undefined || (typeof answers[t.id] === 'string' && answers[t.id].length > 10);
            const isCurrent = idx === currentTaskIndex;

            return (
              <button
                key={t.id}
                onClick={() => setCurrentTaskIndex(idx)}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-blue-50/80 border-blue-400 text-blue-900 shadow-2xs'
                    : isDone
                    ? 'bg-emerald-50/40 border-emerald-200 text-slate-700'
                    : 'bg-slate-50/50 border-slate-200 text-slate-500 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold">Task {idx + 1}</span>
                  {isDone ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                  )}
                </div>
                <p className="text-xs font-semibold truncate">{t.title.split(':')[1] || t.title}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Task Workspace */}
      <motion.div
        key={currentTask.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6"
      >
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-1">
            <FileText className="w-4 h-4" />
            <span>Task {currentTaskIndex + 1} &bull; Estimasi {currentTask.duration}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            {currentTask.title}
          </h3>
        </div>

        {/* Skenario Kasus */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 text-xs md:text-sm text-slate-700 leading-relaxed space-y-2">
          <p className="font-bold text-slate-900 flex items-center gap-1.5">
            <span>📌 Skenario Kasus Industri:</span>
          </p>
          <p>{currentTask.scenario}</p>
        </div>

        {/* Instruksi Pengerjaan */}
        <div className="space-y-2">
          <h4 className="font-bold text-xs md:text-sm text-slate-900">Instruksi Deliverable:</h4>
          <ul className="space-y-1.5">
            {currentTask.instructions.map((inst, i) => (
              <li key={i} className="text-xs md:text-sm text-slate-600 flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>{inst}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Task Input Section */}
        <div className="pt-4 border-t border-slate-100">
          {currentTask.deliverableType === 'choice' && currentTask.options && (
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-700 mb-2">
                {currentTask.sampleQuestion || 'Pilih strategi atau solusi paling optimal:'}
              </p>
              {currentTask.options.map((opt, optIdx) => {
                const isSelected = selectedOptions[currentTask.id] === optIdx;

                return (
                  <div
                    key={opt.label}
                    onClick={() => handleOptionSelect(optIdx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-50 border-blue-500 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {opt.label}
                      </span>
                      <div className="flex-1">
                        <p className="text-xs md:text-sm font-medium text-slate-800 leading-relaxed">
                          {opt.text}
                        </p>

                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-3 p-3 rounded-xl bg-white border border-blue-200 text-xs text-blue-900"
                          >
                            <span className="font-bold">Insight Mentor Industri: </span>
                            {opt.feedback}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {currentTask.deliverableType === 'text' && (
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                Tuliskan Solusi / Rancangan Kerjamu:
              </label>
              <textarea
                rows={6}
                value={answers[currentTask.id] || ''}
                onChange={(e) => handleTextChange(e.target.value)}
                placeholder={currentTask.placeholderAnswer || 'Ketik analisis atau langkah solusimu di sini...'}
                className="w-full p-4 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-xs md:text-sm text-slate-800 outline-none transition-all font-mono"
              />
              {currentTask.hint && (
                <p className="text-[11px] text-slate-400 italic">
                  💡 Tips: {currentTask.hint}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Task Bottom Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <button
            onClick={handlePrevTask}
            disabled={currentTaskIndex === 0}
            className="flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Task Sebelumnya</span>
          </button>

          {currentTaskIndex < totalTasks - 1 ? (
            <button
              onClick={handleNextTask}
              disabled={!isCurrentTaskFilled()}
              className="flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs"
            >
              <span>Lanjut ke Task {currentTaskIndex + 2}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmitAll}
              disabled={!isCurrentTaskFilled() || isSubmitting}
              className="flex items-center gap-2 text-xs md:text-sm font-bold px-6 py-3 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md"
            >
              {isSubmitting ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Memverifikasi Solusi...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kirim & Terbitkan Sertifikat</span>
                </>
              )}
            </button>
          )}
        </div>
      </motion.div>

      {/* CELEBRATION MODAL ON SUCCESS */}
      <AnimatePresence>
        {showCelebrationModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white border border-slate-200 p-8 rounded-3xl max-w-md w-full shadow-2xl text-center relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-xs">
                <Award className="w-8 h-8" />
              </div>

              <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wider mb-3 inline-block">
                Simulasi Selesai 100%
              </span>

              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Selamat, {userName}!
              </h3>

              <p className="text-xs md:text-sm text-slate-600 mb-6 leading-relaxed">
                Kamu telah menuntaskan seluruh tantangan studi kasus <strong>{simulation.companyName}</strong> untuk posisi <strong>{careerTitle}</strong>. Bukti kompetensimu siap diklaim dan diposting ke LinkedIn!
              </p>

              <div className="space-y-3">
                <Link
                  href={`/roadmap/${assessmentId}/sertifikat`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-linear-to-r from-blue-600 via-indigo-600 to-sky-600 hover:opacity-95 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <Award className="w-4 h-4" />
                  <span>Buka & Klaim Sertifikat LinkedIn</span>
                </Link>

                <button
                  onClick={() => setShowCelebrationModal(false)}
                  className="w-full py-2.5 text-slate-500 hover:text-slate-800 text-xs font-semibold transition-colors"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
