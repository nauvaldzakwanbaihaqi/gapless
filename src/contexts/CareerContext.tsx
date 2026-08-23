'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useRef,
  type ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

import {
  type Trait,
  type CareerProfile,
  type CurriculumPhase,
  ASSESSMENT_QUESTIONS,
  computeTraitScores,
  getDominantTrait,
  getTraitRadarData,
  getSkillGapData,
  getRecommendedCareers,
} from '@/data/gaplessData';

// ──────────────────────────────────────────────
// Database Types
// ──────────────────────────────────────────────

export type JobRole = {
  id: string;
  dimension: string;
  roleName: string;
  salaryRange: string | null;
  companies: string[] | null;
  hardSkills: string[] | null;
  softSkills: string[] | null;
};

// ──────────────────────────────────────────────
// View navigation
// ──────────────────────────────────────────────

export type View = 'assessment' | 'results' | 'skills' | 'roadmap' | 'selection' | 'case-study';

// ──────────────────────────────────────────────
// AI Insight types
// ──────────────────────────────────────────────

export interface AiInsight {
  personality_summary: string;
  reasoning: string;
  traits: string[];
  strengths: string[];
  ai_engine_used?: string;
}

// ──────────────────────────────────────────────
// Skill-gap enrichment types
// ──────────────────────────────────────────────

export interface SkillGapEntry {
  name: string;
  required: number;
  current: number;
  delta: number;
}

export interface RoadmapNode extends CurriculumPhase {
  completedModules: string[];
  progress: number; // 0-1 fraction
}

// ──────────────────────────────────────────────
// Context shape
// ──────────────────────────────────────────────

export interface GaplessContextValue {
  // ── Navigation ──
  currentView: View;
  setCurrentView: Dispatch<SetStateAction<View>>;
  setView: (v: View) => void;

  // ── Assessment ──
  answers: Record<number, number>;
  setAnswer: (questionId: number, optionIndex: number) => void;
  completedQuestions: number;
  isAssessmentComplete: boolean;

  // ── Trait results (computed from answers) ──
  traitScores: Record<Trait, number>;
  dominantTrait: Trait | null;
  traitRadarData: ReturnType<typeof getTraitRadarData>;
  recommendedCareers: CareerProfile[];

  // ── AI Insight ──
  aiInsight: AiInsight | null;
  isLoadingAi: boolean;
  aiError: string | null;
  fetchAiInsight: () => Promise<void>;

  // ── Career selection (Assessment flow) ──
  selectedCareer: CareerProfile | null;
  selectCareer: (career: CareerProfile) => void;

  // ── Role selection (Database flow) ──
  selectedRole: JobRole | null;
  setSelectedRole: (role: JobRole | null) => void;

  // ── Skill self-ratings ──
  skillRatings: Record<string, number>;
  setSkillRating: (skillName: string, level: number) => void;
  skillGapData: SkillGapEntry[];
  allSkillsRated: boolean;

  // ── Roadmap ──
  roadmapWithProgress: RoadmapNode[];

  // ── Reset ──
  reset: () => void;
}

// ──────────────────────────────────────────────
// Empty / default state
// ──────────────────────────────────────────────

const CareerContext = createContext<GaplessContextValue | null>(null);

// ──────────────────────────────────────────────
// Hook
// ──────────────────────────────────────────────

export function useGaplessContext() {
  const ctx = useContext(CareerContext);
  if (!ctx) {
    throw new Error('useGaplessContext must be used within GaplessProvider');
  }
  return ctx;
}

// ──────────────────────────────────────────────
// Provider
// ──────────────────────────────────────────────

export function GaplessProvider({ children }: { children: ReactNode }) {
  // ── Navigation ──
  const [currentView, setCurrentView] = useState<View>('selection');

  // ── Assessment answers ──
  const [answers, setAnswers] = useState<Record<number, number>>({});

  // ── Career selection (Assessment flow) ──
  const [selectedCareer, setSelectedCareer] = useState<CareerProfile | null>(
    null
  );

  // ── Role selection (Database flow) ──
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);

  // ── Skill self-ratings ──
  const [skillRatings, setSkillRatingsState] = useState<Record<string, number>>(
    {}
  );

  // ── AI Insight ──
  const [aiInsight, setAiInsight] = useState<AiInsight | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // ── Locks for Anti-Spam ──
  const fetchLock = useRef(false);
  const lastFetchedAnswers = useRef<string>('');

  // ── Derived: trait scores ──
  const traitScores = useMemo(() => computeTraitScores(answers), [answers]);

  // ── Derived: dominant trait ──
  const dominantTrait = useMemo(() => getDominantTrait(traitScores), [traitScores]);

  // ── Derived: radar chart data ──
  const traitRadarData = useMemo(() => getTraitRadarData(traitScores), [traitScores]);

  // ── Derived: completed questions count ──
  const completedQuestions = useMemo(
    () => Object.keys(answers).length,
    [answers]
  );

  // ── Derived: is assessment complete ──
  const isAssessmentComplete = useMemo(
    () => completedQuestions === ASSESSMENT_QUESTIONS.length,
    [completedQuestions]
  );

  // ── Derived: recommended careers ──
  const recommendedCareers = useMemo(
    () => getRecommendedCareers(dominantTrait),
    [dominantTrait]
  );

  // ── Derived: skill gap data ──
  const skillGapData = useMemo(() => {
    if (!selectedCareer) return [];
    return getSkillGapData(selectedCareer, skillRatings);
  }, [selectedCareer, skillRatings]);

  // ── Derived: all skills rated ──
  const allSkillsRated = useMemo(() => {
    if (!selectedCareer) return false;
    return selectedCareer.skills.every(
      (s) => skillRatings[s.name] !== undefined
    );
  }, [selectedCareer, skillRatings]);

  // ── Derived: roadmap with progress ──
  const roadmapWithProgress = useMemo<RoadmapNode[]>(() => {
    if (!selectedCareer) return [];

    return selectedCareer.roadmap.map((phase) => {
      const completedModules = phase.modules.filter((_module, idx) => {
        const skill = selectedCareer.skills[idx % selectedCareer.skills.length];
        if (!skill) return false;
        const userLevel = skillRatings[skill.name] ?? 0;
        return userLevel >= skill.required;
      });

      return {
        ...phase,
        completedModules,
        progress:
          phase.modules.length > 0
            ? completedModules.length / phase.modules.length
            : 0,
      };
    });
  }, [selectedCareer, skillRatings]);

  // ── Actions ──

  const setView = useCallback((v: View) => {
    setCurrentView(v);
  }, []);

  const setAnswer = useCallback((questionId: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }, []);

  const selectCareer = useCallback((career: CareerProfile) => {
    setSelectedCareer(career);
    setSkillRatingsState({});
    setCurrentView('skills');
  }, []);

  const setSkillRating = useCallback((skillName: string, level: number) => {
    setSkillRatingsState((prev) => ({ ...prev, [skillName]: level }));
  }, []);

  const fetchAiInsight = useCallback(async () => {
    const currentAnswersStr = JSON.stringify(answers);

    if (
      aiInsight || 
      fetchLock.current || 
      lastFetchedAnswers.current === currentAnswersStr
    ) {
      return;
    }

    fetchLock.current = true;
    lastFetchedAnswers.current = currentAnswersStr;
    
    setIsLoadingAi(true);
    setAiError(null);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 60_000);

      const res = await fetch('/api/analyze?ai=gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers,
          traitScores,
          dominantTrait,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) throw new Error('Analisis AI gagal');

      const data: AiInsight = await res.json();
      setAiInsight(data);
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        setAiError('Analisis AI habis waktu');
      } else {
        setAiError(err instanceof Error ? err.message : 'Error tidak diketahui');
      }
    } finally {
      setIsLoadingAi(false);
      fetchLock.current = false;
    }
  }, [answers, traitScores, dominantTrait, aiInsight]); 

  const reset = useCallback(() => {
    setCurrentView('assessment');
    setAnswers({});
    setSelectedCareer(null);
    setSelectedRole(null);
    setSkillRatingsState({});
    setAiInsight(null);
    setIsLoadingAi(false);
    setAiError(null);
    lastFetchedAnswers.current = '';
    fetchLock.current = false;
  }, []);

  // ── Context value ──

  const value = useMemo<GaplessContextValue>(
    () => ({
      currentView,
      setCurrentView,
      setView,
      answers,
      setAnswer,
      completedQuestions,
      isAssessmentComplete,
      traitScores,
      dominantTrait,
      traitRadarData,
      recommendedCareers,
      aiInsight,
      isLoadingAi,
      aiError,
      fetchAiInsight,
      selectedCareer,
      selectCareer,
      selectedRole,
      setSelectedRole,
      skillRatings,
      setSkillRating,
      skillGapData,
      allSkillsRated,
      roadmapWithProgress,
      reset,
    }),
    [
      currentView,
      setView,
      answers,
      setAnswer,
      completedQuestions,
      isAssessmentComplete,
      traitScores,
      dominantTrait,
      traitRadarData,
      recommendedCareers,
      aiInsight,
      isLoadingAi,
      aiError,
      fetchAiInsight,
      selectedCareer,
      selectCareer,
      selectedRole,
      setSelectedRole,
      skillRatings,
      setSkillRating,
      skillGapData,
      allSkillsRated,
      roadmapWithProgress,
      reset,
    ]
  );

  return (
    <CareerContext.Provider value={value}>{children}</CareerContext.Provider>
  );
}