'use client';

import { GaplessApp } from '@/components/GaplessApp';
import { useGaplessContext } from '@/contexts/CareerContext';
import { useEffect } from 'react';

export function AssessmentPageClient() {
  const { currentView, setCurrentView, setSelectedRole } = useGaplessContext();

  useEffect(() => {
    if (currentView === 'selection') {
      setSelectedRole(null); 
      setCurrentView('assessment');
    }
  }, [currentView, setCurrentView, setSelectedRole]);

  return <GaplessApp />;
}
