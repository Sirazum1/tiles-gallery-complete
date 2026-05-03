'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    image: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.signUp.email(form);

    setLoading(false);

    if (error) return toast.error(error.message || 'Registration failed');

    toast.success('Registration successful. Please login.');
    router.push('/login');
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
        <h1 className="text-4xl font-black text-center text-stone-950 mb-8">
          Registration
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block mb-2 font-semibold text-stone-700">
              Name
            </label>
            <input
              name="name"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-stone-900"
              placeholder="Enter your name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-stone-700">
              Email
            </label>
            <input
              name="email"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-stone-900"
              type="email"
              placeholder="Enter your email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-stone-700">
              Photo URL
            </label>
            <input
              name="image"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-stone-900"
              type="url"
              placeholder="Paste photo URL"
              required
              value={form.image}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-stone-700">
              Password
            </label>
            <input
              name="password"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-stone-900"
              type="password"
              placeholder="Minimum 6 characters"
              minLength={6}
              required
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-stone-950 text-white rounded-xl py-3 font-bold hover:bg-stone-800"
          >
            {loading ? 'Creating account...' : 'Register'}
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
          Already registered?{' '}
          <Link className="font-bold text-amber-700" href="/login">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}