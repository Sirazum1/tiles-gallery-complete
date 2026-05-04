'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthProvider';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

export default function UpdateProfilePage() {
  const router = useRouter();
  const { user } = useAuth();

  const [name, setName] = useState(user?.name || '');
  const [image, setImage] = useState(user?.image || '');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || 'Update failed');
      return;
    }

    toast.success('Profile updated');
    router.push('/my-profile');
    router.refresh();
  };

  if (!user) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center">
        <h1 className="text-3xl font-black">Please login first</h1>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] bg-stone-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-stone-200 p-8">
        <h1 className="text-4xl font-black text-center mb-8">
          Update Profile
        </h1>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-stone-900"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter new name"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Photo URL</label>
            <input
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-stone-900"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Paste direct image URL"
              required
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-stone-950 text-white rounded-xl py-3 font-bold"
          >
            {loading ? 'Updating...' : 'Update Information'}
          </button>
        </form>
      </div>
    </section>
  );
}