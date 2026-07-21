'use client';

import { AnimatePresence, motion } from 'motion/react';
import { AssessmentFlow } from '@/components/AssessmentFlow';
import { ResultsView } from '@/components/ResultsView';
import { SkillGapView } from '@/components/SkillGapView';
import { RoadmapView } from '@/components/RoadmapView';
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
interface GaplessAppProps {
  initialRoles?: JobRole[];
}

import { CaseStudyQuizView } from '@/components/CaseStudyQuizView';

export function GaplessApp({ initialRoles }: GaplessAppProps) {
  const { currentView } = useGaplessContext();

  // Uncomment baris di bawah ini kalau lu mau cek datanya beneran udah masuk ke Client
  console.log("Data Roles dari DB Neon berhasil ditarik:", initialRoles);

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
      </motion.div>
    </AnimatePresence>
  );
}