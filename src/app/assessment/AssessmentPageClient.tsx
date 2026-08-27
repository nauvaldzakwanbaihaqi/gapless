'use client';

import { GaplessApp } from '@/components/GaplessApp';
import { useGaplessContext } from '@/contexts/CareerContext';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function AssessmentPageClient() {
  const { currentView, setCurrentView, setSelectedRole, setQuizType } = useGaplessContext();
  const searchParams = useSearchParams();

  useEffect(() => {
    const quizTypeParam = searchParams.get('quizType');
    if (quizTypeParam) {
      setQuizType(quizTypeParam);
    }
  }, [searchParams, setQuizType]);

  useEffect(() => {
    if (currentView === 'selection') {
      setSelectedRole(null); 
      setCurrentView('assessment');
    }
  }, [currentView, setCurrentView, setSelectedRole]);

  return <GaplessApp />;
}
