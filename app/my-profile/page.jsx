'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthProvider';

export default function MyProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-black mb-4">Please login first</h1>
          <Link href="/login" className="btn btn-neutral">
            Go to Login
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 p-10 text-center">
        <img
          src={user.image || 'https://i.postimg.cc/7Z4BNK5K/user.png'}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-amber-600 mb-5"
        />

        <h1 className="text-4xl font-black text-stone-950 mb-2">
          {user.name}
        </h1>

        <p className="text-stone-600 mb-8">{user.email}</p>

        <Link href="/my-profile/edit" className="btn btn-neutral">
          Update Profile
        </Link>
      </div>
    </section>
  );
}