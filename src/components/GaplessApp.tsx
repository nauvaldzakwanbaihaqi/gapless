'use client';

import { AnimatePresence, motion } from 'motion/react';
import { AssessmentFlow } from '@/components/AssessmentFlow';
import { ResultsView } from '@/components/ResultsView';
import { SkillGapView } from '@/components/SkillGapView';
import { RoadmapView } from '@/components/RoadmapView';
import { GuestModuleDetailView } from '@/components/GuestModuleDetailView';
import { useGaplessContext } from '@/contexts/CareerContext';


// 1. Definisikan tipe data dari database biar TypeScript nggak cerewet
export type JobRole = {
  id: string;
  dimension: string;
  roleName: string;
  salaryRange: string | null;
  companies: string[] | null;
  hardSkills: string[] | null;
  softSkills: string[] | null;
};

// 2. Buat interface untuk Props-nya

import { CaseStudyQuizView } from '@/components/CaseStudyQuizView';

export function GaplessApp() {
  const { currentView } = useGaplessContext();



  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentView}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {currentView === 'assessment' && <AssessmentFlow />}
        {currentView === 'results' && <ResultsView />}
        {currentView === 'skills' && <SkillGapView />}
        {currentView === 'case-study' && <CaseStudyQuizView />}
        {currentView === 'roadmap' && <RoadmapView />}
        {currentView === 'module-detail' && <GuestModuleDetailView />}
      </motion.div>
    </AnimatePresence>
  );
}