'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { CAREER_PROFILES, getSkillGapData, TRAIT_META, Trait } from '@/data/gaplessData';
import { AnalysisResultBlock } from '@/components/AnalysisResultBlock';
import { GapInsight } from '@/contexts/CareerContext';

interface Props {
  resultId: string;
  selectedCareer: string;
  skillRatings: Record<string, number>;
  dominantTrait: string;
}

export function ResultDetailClient({ resultId, selectedCareer, skillRatings, dominantTrait }: Props) {
  const router = useRouter();
  
  const [gapInsight, setGapInsight] = useState<GapInsight | null>(null);
  const [isLoadingGapAi, setIsLoadingGapAi] = useState(false);
  const [chartReady, setChartReady] = useState(false);

  // Find the career profile
  const careerProfile = useMemo(() => {
    return CAREER_PROFILES.find(c => c.title === selectedCareer) || null;
  }, [selectedCareer]);

  // Compute skill gap data
  const skillGapData = useMemo(() => {
    if (!careerProfile || !skillRatings) return [];
    return getSkillGapData(careerProfile, skillRatings);
  }, [careerProfile, skillRatings]);

  // Build radar data
  const radarData = useMemo(() => {
    return skillGapData.map((s) => ({
      name: s.name.split(' ').slice(0, 2).join(' '),
      required: s.required,
      current: s.current,
    }));
  }, [skillGapData]);

  const traitMetaColor = useMemo(() => {
    if (!careerProfile) return '#3b82f6';
    return TRAIT_META[careerProfile.trait as Trait]?.color || '#3b82f6';
  }, [careerProfile]);

  useEffect(() => {
    const t = setTimeout(() => setChartReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!careerProfile || !skillGapData.length) return;

    const fetchInsight = async () => {
      setIsLoadingGapAi(true);
      try {
        const res = await fetch('/api/analyze-gap?ai=gemini', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            skillGapData,
            roleName: careerProfile.title,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          setGapInsight(data);
        }
      } catch (err) {
        console.error('Failed to fetch gap insight', err);
      } finally {
        setIsLoadingGapAi(false);
      }
    };

    fetchInsight();
  }, [careerProfile, skillGapData]);

  if (!careerProfile) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <p className="text-gray-500">Data karier tidak ditemukan atau tidak valid.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-10 text-center sm:text-left">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
          style={{
            background: `${traitMetaColor}10`,
            border: `1px solid ${traitMetaColor}25`,
          }}
        >
          <span className="text-xs font-semibold" style={{ color: traitMetaColor }}>
            Detail Analisis: {dominantTrait}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          {careerProfile.icon} {careerProfile.title}
        </h1>
        <p className="text-gray-500 text-base max-w-lg">
          Rekap hasil analisis kesenjangan (gap) antara profilmu saat ini dengan yang dibutuhkan.
        </p>
      </div>

      <AnalysisResultBlock
        radarData={radarData}
        traitMetaColor={traitMetaColor}
        chartReady={chartReady}
        isLoadingGapAi={isLoadingGapAi}
        gapInsight={gapInsight}
        onNext={() => router.push('/roadmap')}
        showBackHome={true}
      />
    </div>
  );
}
