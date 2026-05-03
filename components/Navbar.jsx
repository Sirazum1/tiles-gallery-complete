'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthProvider';

export default function Navbar() {
  const { user, logoutUser } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-stone-900">
          TilesGallery
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-stone-700">
          <Link href="/">Home</Link>
          <Link href="/all-tiles">All Tiles</Link>
          {user && <Link href="/my-profile">My Profile</Link>}
        </nav>

        <div>
          {user ? (
            <button onClick={logoutUser} className="btn btn-sm btn-neutral">
              Logout
            </button>
          ) : (
            <Link href="/login" className="btn btn-sm btn-neutral">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}