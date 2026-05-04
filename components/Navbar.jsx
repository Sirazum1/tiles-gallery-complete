'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthProvider';

export default function Navbar() {
  const pathname = usePathname();
  const { user, logoutUser } = useAuth();

  const navClass = (path) =>
    pathname === path
      ? 'text-amber-700 font-bold'
      : 'text-stone-700 hover:text-amber-700';

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-stone-950">
          Tiles<span className="text-amber-700">Gallery</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link className={navClass('/')} href="/">Home</Link>
          <Link className={navClass('/all-tiles')} href="/all-tiles">All Tiles</Link>
          {user && (
            <Link className={navClass('/my-profile')} href="/my-profile">
              My Profile
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link href="/my-profile">
                <img
                  src={user.image || 'https://i.postimg.cc/7Z4BNK5K/user.png'}
                  className="w-10 h-10 rounded-full object-cover border-2 border-amber-600"
                  alt="profile"
                />
              </Link>
              <button onClick={logoutUser} className="btn btn-sm btn-neutral">
                Logout
              </button>
            </>
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