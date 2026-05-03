'use client';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/context/AuthProvider';

export default function Providers({ children }) {
  return (
    <AuthProvider>
      {children}
      <Toaster position="top-center" />
    </AuthProvider>
  );
}
