'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { CAREER_PROFILES, getSkillGapData, TRAIT_META, Trait } from '@/data/gaplessData';
import { AnalysisResultBlock } from '@/components/AnalysisResultBlock';
import { ArchetypeReasoningBlock } from '@/components/ArchetypeReasoningBlock';
import { GapInsight } from '@/contexts/CareerContext';

interface Props {
  resultId: string;
  selectedCareer: string;
  skillRatings: Record<string, number>;
  dominantTrait: string;
  quizType: string;
  traitScores: Record<string, number>;
}

export function ResultDetailClient({ resultId, selectedCareer, skillRatings, dominantTrait, quizType, traitScores }: Props) {
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
      {quizType === 'belum_tahu_minat' && dominantTrait && traitScores && (
        <>
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: `${traitMetaColor}10`,
                border: `1px solid ${traitMetaColor}25`,
              }}
            >
              <span className="text-xs font-semibold" style={{ color: traitMetaColor }}>
                Detail Kepribadian: {dominantTrait}
              </span>
            </div>
          </div>

          <ArchetypeReasoningBlock 
            dominantTrait={dominantTrait} 
            traitScores={traitScores} 
            hideTitle={true}
          />
          
          <div className="flex items-center justify-center my-16 opacity-50">
            <div className="h-px w-24 bg-slate-300"></div>
            <div className="mx-4 text-slate-400 text-sm font-semibold tracking-widest uppercase">Analisis Skill-Gap</div>
            <div className="h-px w-24 bg-slate-300"></div>
          </div>
        </>
      )}

      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          {careerProfile.icon} {careerProfile.title}
        </h2>
        <p className="text-gray-500 text-base max-w-lg mx-auto">
          Rekap hasil analisis kesenjangan (gap) antara profilmu saat ini dengan yang dibutuhkan.
        </p>
      </div>

      <AnalysisResultBlock
        radarData={radarData}
        traitMetaColor={traitMetaColor}
        chartReady={chartReady}
        isLoadingGapAi={isLoadingGapAi}
        gapInsight={gapInsight}
        showBackHome={true}
        roadmapHref={`/roadmap?assessmentId=${resultId}`}
      />
    </div>
  );
}
