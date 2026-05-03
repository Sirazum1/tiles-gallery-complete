'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.signIn.email({ email, password });

    setLoading(false);

    if (error) return toast.error(error.message || 'Login failed');

    toast.success('Login successful');
    router.push('/');
    router.refresh();
  };

  const googleLogin = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/',
    });
  };

  return (
    <section className="min-h-[80vh] bg-stone-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-stone-200 p-8">
        <h1 className="text-4xl font-black text-center text-stone-950 mb-2">
          Login
        </h1>

        <p className="text-center text-stone-500 mb-8">
          Login to view private tile details and profile.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-2 font-semibold text-stone-700">
              Email
            </label>
            <input
              className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-stone-900"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-stone-700">
              Password
            </label>
            <input
              className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-stone-900"
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-stone-950 text-white rounded-xl py-3 font-bold hover:bg-stone-800"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <button
            type="button"
            onClick={googleLogin}
            className="w-full border border-stone-300 rounded-xl py-3 font-bold hover:bg-stone-100"
          >
            Continue with Google
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          New here?{' '}
          <Link className="font-bold text-amber-700" href="/register">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}