'use client';

import { useSession, signOut } from 'next-auth/react';
import { useCallback, useState } from 'react';

export function useAuthGuard() {
  const { data: session, status } = useSession();
  const [isVerifying, setIsVerifying] = useState(false);

  const checkIsAuthenticated = useCallback(async (): Promise<boolean> => {
    // If not authenticated in client state, return false immediately
    if (status !== 'authenticated' || !session?.user?.id) {
      return false;
    }

    setIsVerifying(true);
    try {
      // Verify with the database to prevent ghost/stale sessions
      const res = await fetch('/api/auth/verify', {
        method: 'GET',
        headers: { 'Cache-Control': 'no-cache' }
      });
      
      const data = await res.json();
      
      if (!res.ok || !data.isValid) {
        // The user was deleted from the DB but the cookie is still present.
        // Force logout to clear the stale session.
        await signOut({ redirect: false });
        return false;
      }

      return true;
    } catch (err) {
      console.error('Failed to verify auth:', err);
      // In case of network error, err on the side of caution or let them try again
      return false;
    } finally {
      setIsVerifying(false);
    }
  }, [session, status]);

  return {
    isVerifying,
    checkIsAuthenticated,
    status,
    session
  };
}
