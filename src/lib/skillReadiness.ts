import { CareerProfile, SKILL_LABELS } from '@/data/gaplessData';

export interface SkillItemDetail {
  name: string;
  current: number;
  required: number;
  currentLabel: string;
  requiredLabel: string;
  gap?: number;
}

export type ReadinessStatus = 'Siap Kerja' | 'Hampir Siap' | 'Perlu Pendalaman';

export interface SkillReadinessBreakdown {
  readinessPercentage: number;
  totalRequiredPoints: number;
  totalAchievedPoints: number;
  skillsMet: SkillItemDetail[];
  skillsGap: SkillItemDetail[];
  totalSkills: number;
  statusLabel: ReadinessStatus;
  statusColor: {
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    ringColor: string;
    progressBar: string;
  };
}

/**
 * Menghitung tingkat kesiapan skill (Skill Readiness %)
 * berdasarkan perbandingan skor aktual user vs standar kualifikasi karier.
 * 
 * Formula: (Sum of min(current, required) / Sum of required) * 100%
 */
export function computeSkillReadiness(
  career: CareerProfile | null | undefined,
  skillRatings: Record<string, number> | null | undefined
): SkillReadinessBreakdown {
  const ratings = skillRatings || {};

  if (!career || !career.skills || career.skills.length === 0) {
    return {
      readinessPercentage: 0,
      totalRequiredPoints: 0,
      totalAchievedPoints: 0,
      skillsMet: [],
      skillsGap: [],
      totalSkills: 0,
      statusLabel: 'Perlu Pendalaman',
      statusColor: {
        badgeBg: 'bg-amber-50',
        badgeText: 'text-amber-700',
        badgeBorder: 'border-amber-200',
        ringColor: '#f59e0b',
        progressBar: 'bg-amber-500',
      },
    };
  }

  let totalRequiredPoints = 0;
  let totalAchievedPoints = 0;
  const skillsMet: SkillItemDetail[] = [];
  const skillsGap: SkillItemDetail[] = [];

  career.skills.forEach((skill) => {
    const required = skill.required ?? 2;
    const current = ratings[skill.name] ?? 0;
    const achieved = Math.min(current, required);

    totalRequiredPoints += required;
    totalAchievedPoints += achieved;

    const currentLabel = SKILL_LABELS[current] || `Level ${current}`;
    const requiredLabel = SKILL_LABELS[required] || `Level ${required}`;

    if (current >= required) {
      skillsMet.push({
        name: skill.name,
        current,
        required,
        currentLabel,
        requiredLabel,
      });
    } else {
      skillsGap.push({
        name: skill.name,
        current,
        required,
        currentLabel,
        requiredLabel,
        gap: required - current,
      });
    }
  });

  const readinessPercentage = totalRequiredPoints > 0
    ? Math.round((totalAchievedPoints / totalRequiredPoints) * 100)
    : 0;

  let statusLabel: ReadinessStatus = 'Perlu Pendalaman';
  let statusColor = {
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-700',
    badgeBorder: 'border-amber-200',
    ringColor: '#f59e0b',
    progressBar: 'bg-amber-500',
  };

  if (readinessPercentage >= 85) {
    statusLabel = 'Siap Kerja';
    statusColor = {
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-700',
      badgeBorder: 'border-emerald-200',
      ringColor: '#10b981',
      progressBar: 'bg-emerald-500',
    };
  } else if (readinessPercentage >= 60) {
    statusLabel = 'Hampir Siap';
    statusColor = {
      badgeBg: 'bg-blue-50',
      badgeText: 'text-blue-700',
      badgeBorder: 'border-blue-200',
      ringColor: '#3b82f6',
      progressBar: 'bg-blue-600',
    };
  }

  return {
    readinessPercentage,
    totalRequiredPoints,
    totalAchievedPoints,
    skillsMet,
    skillsGap,
    totalSkills: career.skills.length,
    statusLabel,
    statusColor,
  };
}
