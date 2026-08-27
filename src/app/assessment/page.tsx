import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { AssessmentPageClient } from './AssessmentPageClient';
import { Suspense } from 'react';

export default async function AssessmentPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/api/auth/signin?callbackUrl=/assessment');
  }

  return (
    <Suspense fallback={<div>Memuat...</div>}>
      <AssessmentPageClient />
    </Suspense>
  );
}