'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useGaplessContext } from '@/contexts/CareerContext';

export default function Page() {
  const router = useRouter();
  const { dominantTrait } = useGaplessContext();

  useEffect(() => {
    if (!dominantTrait) router.replace('/');
  }, [dominantTrait, router]);

  if (!dominantTrait) return null;

  return (
    <div className="min-h-screen bg-space flex items-center justify-center">
      <p className="text-white text-lg">Loading results...</p>
    </div>
  );
}
