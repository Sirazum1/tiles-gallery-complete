'use client';
import { createContext, useContext, useMemo } from 'react';
import { authClient } from '@/lib/auth-client';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { data: session, isPending, refetch } = authClient.useSession();
  const user = session?.user || null;

  const value = useMemo(() => ({ user, session, loading: isPending, refetch }), [user, session, isPending, refetch]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
