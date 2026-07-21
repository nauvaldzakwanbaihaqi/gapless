import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { AssessmentPageClient } from './AssessmentPageClient';

export default async function AssessmentPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/api/auth/signin?callbackUrl=/assessment');
  }

  return <AssessmentPageClient />;
}