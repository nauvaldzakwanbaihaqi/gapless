'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, ChevronRight, ChevronLeft, Home, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { SKILL_LABELS, TRAIT_META } from '@/data/gaplessData';
import { useGaplessContext } from '@/contexts/CareerContext';
import { quizBank } from '@/data/quizBank';

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const getQuizKey = (title: string) => {
    const slug = slugify(title);
    const aliases: Record<string, string> = {
        'ui-ux-designer': 'ui-ux-designer',
        'content-creator-social-media-specialist': 'content-creator',
        'software-engineer-front-back-full-stack': 'software-engineer',
        'data-analyst-business-intelligence': 'data-analyst',
        'devops-engineer-qa-automation-engineer': 'devops-qa-engineer',
        'data-researcher-strategy-analyst': 'data-researcher',
        'digital-marketing-specialist': 'digital-marketing',
        'business-development-account-executive': 'business-development',
    };
    return aliases[slug] || slug;
};

export function SkillGapView() {
  const {
    selectedCareer,
    skillRatings,
    setSkillRating,
    skillGapData,
    allSkillsRated,
    setView,
    dominantTrait,
    gapInsight,
    isLoadingGapAi,
    fetchGapInsight,
  } = useGaplessContext();

  const [step, setStep] = useState(1);
  const [chartReady, setChartReady] = useState(false);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);

  useEffect(() => {
    if (step === 2) {
      const t = setTimeout(() => setChartReady(true), 300);
      return () => clearTimeout(t);
    }
  }, [step]);

  useEffect(() => {
    if (step === 2 && !gapInsight && !isLoadingGapAi) {
      fetchGapInsight();
    }
  }, [step, gapInsight, isLoadingGapAi, fetchGapInsight]);

  if (!selectedCareer) return null;

  const traitMeta = TRAIT_META[selectedCareer.trait];

  // Attempt to get the quiz questions
  const quizKey = getQuizKey(selectedCareer.title);
  const questions = quizBank[quizKey] || [];
  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (idx: number) => {
    setSelectedOptionIdx(idx);
  };

  const handleConfirmNext = () => {
    if (selectedOptionIdx === null || !currentQuestion) return;
    const optionScore = currentQuestion.options[selectedOptionIdx].score;
    const newScore = score + optionScore;
    
    if (currentIndex < questions.length - 1) {
        setScore(newScore);
        setCurrentIndex(currentIndex + 1);
        setSelectedOptionIdx(null); // Reset selection for next question
    } else {
        // Finish Quiz
        let finalLevel = 0;
        if (newScore > 50) {
            finalLevel = 3; // Lanjutan
        } else if (newScore > 30) {
            finalLevel = 2; // Menengah
        } else if (newScore > 0) {
            finalLevel = 1; // Dasar
        }
        
        // Assign this skill level to all skills in the selected career
        selectedCareer.skills.forEach(skill => {
            setSkillRating(skill.name, finalLevel);
        });
        
        // Proceed to Radar Chart
        setStep(2);
    }
  };

  // Build radar data: required vs current for each skill
  const radarData = skillGapData.map((s) => ({
    name: s.name.split(' ').slice(0, 2).join(' '), // short labels
    required: s.required,
    current: s.current,
  }));

  const handleCreateRoadmap = () => setView('roadmap');
  
  const handleBackToResults = () => {
    if (!dominantTrait) {
      window.location.href = '/career-test';
    } else {
      setView('results');
    }
  };

  return (
    <div className="min-h-screen bg-space px-4 sm:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: `${traitMeta.color}10`,
              border: `1px solid ${traitMeta.color}25`,
            }}
          >
            <Layers size={14} style={{ color: traitMeta.color }} />
            <span className="text-xs font-semibold" style={{ color: traitMeta.color }}>
              Analisis Kesenjangan Skill
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            {selectedCareer.icon} {selectedCareer.title}
          </h1>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Nilai level skillmu saat ini untuk melihat kesenjangan antara posisimu sekarang dan
            posisi yang perlu kamu capai.
          </p>
        </motion.div>

        {/* Wizard Steps */}
        <div className="mb-10 w-full relative">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="glass-card p-6 sm:p-8">
                  {(!questions || questions.length === 0) ? (
                    <div className="text-center py-8">
                      <h2 className="text-xl font-bold text-slate-900 mb-4">Quiz Case Study</h2>
                      <p className="mb-6 text-gray-500">Modul kuis untuk peran ini sedang disiapkan.</p>
                      <button 
                          onClick={() => {
                              selectedCareer.skills.forEach(skill => {
                                  setSkillRating(skill.name, 1);
                              });
                              setStep(2);
                          }}
                          className="btn-primary w-full max-w-xs mx-auto flex items-center justify-center gap-2"
                      >
                          Lanjut ke Analisis <ChevronRight size={16} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="text-center mb-6">
                          <h2 className="text-2xl font-bold text-slate-900 mb-2">Case Study: {selectedCareer.title}</h2>
                          <p className="text-gray-500 text-sm">Pertanyaan {currentIndex + 1} dari {questions.length}</p>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-gray-200 h-1.5 rounded-full mb-8 overflow-hidden">
                          <motion.div 
                              className="h-full rounded-full"
                              style={{ background: traitMeta.color }}
                              initial={{ width: 0 }}
                              animate={{ width: `${(currentIndex / questions.length) * 100}%` }}
                              transition={{ duration: 0.3 }}
                          />
                      </div>

                      <AnimatePresence mode="wait">
                          <motion.div
                              key={currentIndex}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.2 }}
                          >
                              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-6 leading-relaxed">
                                  {currentQuestion.question}
                              </h3>

                              <div className="space-y-3">
                                  {currentQuestion.options.map((option, idx) => {
                                      const isSelected = selectedOptionIdx === idx;
                                      return (
                                        <button
                                            key={idx}
                                            onClick={() => handleSelectOption(idx)}
                                            className={`w-full text-left p-4 rounded-xl border transition-all group flex items-start gap-3 ${
                                              isSelected
                                                ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-200'
                                                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                                            }`}
                                        >
                                            <div className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 transition-all mt-0.5 ${
                                              isSelected
                                                ? 'bg-blue-600 text-white border-blue-600'
                                                : 'border-gray-300 text-gray-400 group-hover:border-blue-400 group-hover:text-blue-500'
                                            }`}>
                                                {option.label}
                                            </div>
                                            <span className={`transition-colors text-sm ${
                                              isSelected ? 'text-slate-900 font-medium' : 'text-gray-600 group-hover:text-slate-900'
                                            }`}>
                                                {option.text}
                                            </span>
                                        </button>
                                      );
                                  })}
                              </div>

                              {/* Tombol Selanjutnya */}
                              <div className="mt-6 flex justify-end">
                                <button
                                  onClick={handleConfirmNext}
                                  disabled={selectedOptionIdx === null}
                                  className="btn-primary flex items-center gap-2 text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                                >
                                  {currentIndex === questions.length - 1 ? 'Lihat Hasil' : 'Selanjutnya'}
                                  <ChevronRight size={16} />
                                </button>
                              </div>
                          </motion.div>
                      </AnimatePresence>
                    </>
                  )}
                </div>

                {/* Navigation Step 1 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-between mt-8"
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Link href="/" className="btn-ghost flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900">
                      <Home size={16} /> Home
                    </Link>
                    <button onClick={handleBackToResults} className="btn-ghost flex items-center gap-1 text-sm">
                      <ChevronLeft size={16} /> Hasil
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="glass-card p-6 sm:p-8 flex flex-col items-center">
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
                          stroke={traitMeta.color}
                          strokeWidth={2}
                          fill={traitMeta.color}
                          fillOpacity={0.2}
                          dot={{ r: 4, fill: traitMeta.color, stroke: '#fff', strokeWidth: 1.5 }}
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
                        style={{ background: traitMeta.color, display: 'inline-block' }}
                      />
                      Isi solid = Level kamu saat ini
                    </div>
                  </div>
                </div>

                {/* AI Gap Insight */}
                <div className="mt-6 w-full">
                  {isLoadingGapAi ? (
                    <div className="glass-card p-6 flex flex-col items-center justify-center animate-pulse gap-3">
                      <Sparkles size={24} className="text-gray-400 animate-spin-slow" />
                      <p className="text-sm text-gray-500 font-medium">AI sedang menganalisis kesenjangan skill-mu...</p>
                    </div>
                  ) : gapInsight ? (
                    <div className="glass-card p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={20} style={{ color: traitMeta.color }} />
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
                  ) : null}
                </div>

                {/* Navigation Step 2 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-between mt-8"
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Link href="/" className="btn-ghost flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900">
                      <Home size={16} /> Home
                    </Link>
                    <button onClick={() => {
                        setStep(1);
                        setCurrentIndex(0);
                        setScore(0);
                      }} className="btn-ghost flex items-center gap-1 text-sm">
                      <ChevronLeft size={16} /> Ulangi Kuis
                    </button>
                  </div>
                  <button
                    onClick={handleCreateRoadmap}
                    className="btn-primary flex items-center gap-2 text-sm"
                  >
                    Buat Roadmap
                    <ChevronRight size={16} />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
