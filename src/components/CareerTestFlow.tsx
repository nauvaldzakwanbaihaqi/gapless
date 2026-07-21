'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { CAREER_PROFILES, SKILL_LABELS, type CareerProfile } from '@/data/gaplessData';
import { useGaplessContext } from '@/contexts/CareerContext';

export function CareerTestFlow() {
  const { selectCareer, setSkillRating, skillRatings } = useGaplessContext();
  const [step, setStep] = useState<'select' | 'rating'>('select');
  const [selectedCareer, setSelectedCareer] = useState<CareerProfile | null>(null);

  const handleSelectCareer = (career: CareerProfile) => {
    setSelectedCareer(career);
    setStep('rating');
  };

  const handleSubmit = () => {
    if (!selectedCareer) return;
    selectCareer(selectedCareer);
  };

  const handleBack = () => {
    if (step === 'rating') setStep('select');
  };

  if (step === 'select') {
    return (
      <div className="min-h-screen bg-space px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase size={20} style={{ color: '#3b82f6' }} />
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
              Select Target Career
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Where do you want to go?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAREER_PROFILES.map((career) => (
              <motion.button
                key={career.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelectCareer(career)}
                className="glass-card p-5 text-left hover:border-blue-500 transition-colors"
              >
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                  {career.trait}
                </p>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{career.icon} {career.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{career.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {career.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill.name}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(37,99,235,0.08)', color: '#1d4ed8' }}
                    >
                      {skill.name}
                    </span>
                  ))}
                  {career.skills.length > 3 && (
                    <span className="text-xs text-gray-400">+{career.skills.length - 3}</span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (step === 'rating' && selectedCareer) {
    return (
      <div className="min-h-screen bg-space px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Briefcase size={20} style={{ color: '#3b82f6' }} />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                Self Assessment
              </span>
            </div>
            <button onClick={handleBack} className="btn-ghost text-sm px-4 py-2 flex items-center gap-1">
              <ChevronLeft size={16} /> Back
            </button>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Skills for <span className="gradient-text">{selectedCareer.title}</span>
          </h2>
          <p className="text-gray-500 mb-10">Rate your current level for each required skill:</p>

          <div className="space-y-6">
            <AnimatePresence>
              {selectedCareer.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="glass-card p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-slate-900 font-semibold">{skill.name}</p>
                    <span className="text-xs text-gray-500">
                      Required: {SKILL_LABELS[skill.required]}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3].map((level) => (
                      <button
                        key={level}
                        onClick={() => setSkillRating(skill.name, level)}
                        className={`flex-1 py-2.5 px-2 rounded-xl text-sm font-medium transition-all ${
                          (skillRatings[skill.name] ?? -1) === level
                            ? 'bg-blue-50 border border-blue-500 text-blue-700'
                            : 'bg-gray-50 border border-gray-200 text-gray-500 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-0.5">
                          <span>{SKILL_LABELS[level]}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <button
              onClick={handleSubmit}
              className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-base"
            >
              <Star size={18} />
              View Results
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
}
