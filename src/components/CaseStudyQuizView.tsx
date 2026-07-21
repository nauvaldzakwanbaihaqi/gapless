'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGaplessContext } from '@/contexts/CareerContext';
import { quizBank } from '@/data/quizBank';

// Simple slugify to match DB roleName to quizBank keys (e.g. 'Software Engineer' -> 'software-engineer')
const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export function CaseStudyQuizView() {
    const { selectedRole, selectedCareer, setSkillRating, setView } = useGaplessContext();
    
    // Map DB role slugs to quizBank keys if they don't match exactly
    const ROLE_ALIASES: Record<string, string> = {
        'graphic-designer-digital-creative-product-designer': 'graphic-designer',
        'content-creator-social-media-specialist': 'content-creator',
        'software-engineer-front-back-full-stack': 'software-engineer',
        'ai-ml-engineer-machine-learning-engineer': 'ai-ml-engineer',
        'devops-engineer-qa-automation-engineer': 'devops-qa-engineer',
        'data-analyst-business-intelligence': 'data-analyst',
        'data-researcher-strategy-analyst': 'data-researcher',
        'digital-marketing-specialist': 'digital-marketing',
        'business-development-account-executive': 'business-development',
        'e-commerce-dropship-specialist': 'ecommerce-specialist',
    };

    // Attempt to get the quiz questions
    let roleSlug = selectedRole ? slugify(selectedRole.roleName) : '';
    
    // Apply alias if exists
    if (ROLE_ALIASES[roleSlug]) {
        roleSlug = ROLE_ALIASES[roleSlug];
    }
    
    let questions = quizBank[roleSlug] || [];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);

    // If no questions are found for this role, we can just skip or show a placeholder.
    if (!questions || questions.length === 0) {
        return (
            <div className="min-h-screen bg-space flex items-center justify-center px-4">
                <div className="max-w-md w-full glass-card p-8 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Quiz Case Study</h2>
                    <p className="mb-6 text-gray-500">Modul kuis untuk peran ini sedang disiapkan.</p>
                    <button 
                        onClick={() => {
                            // Assign default level 1 so roadmap works
                            selectedCareer?.skills.forEach(skill => {
                                setSkillRating(skill.name, 1);
                            });
                            setView('roadmap');
                        }}
                        className="btn-primary w-full"
                    >
                        Lanjut ke Roadmap →
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];
    
    const handleAnswer = (optionScore: number) => {
        const newScore = score + optionScore;
        
        if (currentIndex < questions.length - 1) {
            setScore(newScore);
            setCurrentIndex(currentIndex + 1);
        } else {
            // Finish Quiz
            // Convert score to skill level (0-3)
            // Total possible is usually 70 (7 questions * 10 max score)
            let finalLevel = 0;
            if (newScore > 50) {
                finalLevel = 3; // Lanjutan
            } else if (newScore > 30) {
                finalLevel = 2; // Menengah
            } else if (newScore > 0) {
                finalLevel = 1; // Dasar
            }
            
            // Assign this skill level to all skills in the selected career
            if (selectedCareer) {
                selectedCareer.skills.forEach(skill => {
                    setSkillRating(skill.name, finalLevel);
                });
            }
            
            // Proceed to Roadmap
            setView('roadmap');
        }
    };

    const progress = ((currentIndex) / questions.length) * 100;

    return (
        <div className="min-h-screen bg-space flex flex-col items-center justify-center px-4 sm:px-6 py-12">
            <div className="w-full max-w-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Case Study: {selectedRole?.roleName}</h2>
                    <p className="text-gray-500">Pertanyaan {currentIndex + 1} dari {questions.length}</p>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 h-2 rounded-full mb-10 overflow-hidden">
                    <motion.div 
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #1d4ed8, #3b82f6, #22d3ee)' }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                {/* Question Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="glass-card p-6 sm:p-8"
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-8 leading-relaxed">
                            {currentQuestion.question}
                        </h3>

                        <div className="space-y-4">
                            {currentQuestion.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(option.score)}
                                    className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group flex items-start gap-4"
                                >
                                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-sm font-bold text-gray-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 shrink-0 transition-all">
                                        {option.label}
                                    </div>
                                    <span className="text-gray-600 group-hover:text-slate-900 mt-1 transition-colors">
                                        {option.text}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
