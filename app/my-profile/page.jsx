'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthProvider';

export default function MyProfile() {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => { if (!loading && !user) router.push('/login'); }, [loading, user, router]);
  if (loading) return <div className="py-24 text-center"><span className="loading loading-spinner loading-lg text-primary" /></div>;
  if (!user) return null;
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="card bg-white shadow-2xl border border-teal-100">
        <div className="card-body items-center text-center">
          <Image src={user.image || 'https://i.postimg.cc/7Z4BNK5K/user.png'} alt={user.name || 'User'} width={150} height={150} className="rounded-full object-cover border-4 border-primary" />
          <h1 className="text-4xl font-black mt-4">{user.name}</h1>
          <p className="opacity-70">{user.email}</p>
          <Link href="/my-profile/edit" className="btn btn-primary text-white mt-6">Update Information</Link>
        </div>
      </div>
    </section>
  );
}
