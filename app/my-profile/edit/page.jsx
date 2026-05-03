'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '@/context/AuthProvider';
import { authClient } from '@/lib/auth-client';

export default function EditProfile() {
  const { user, loading, refetch } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ name: '', image: '' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.push('/login');
    if (user) setForm({ name: user.name || '', image: user.image || '' });
  }, [loading, user, router]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await authClient.updateUser({ name: form.name, image: form.image });
    setSaving(false);
    if (error) return toast.error(error.message || 'Update failed');
    await refetch?.();
    toast.success('Profile updated successfully');
    router.push('/my-profile');
    router.refresh();
  };

  if (loading) return <div className="py-24 text-center"><span className="loading loading-spinner loading-lg text-primary" /></div>;
  if (!user) return null;

  return (
    <section className="min-h-[75vh] grid place-items-center px-4 py-12">
      <div className="card w-full max-w-md bg-white shadow-2xl border border-teal-100">
        <form onSubmit={handleUpdate} className="card-body">
          <h1 className="text-4xl font-black text-center">Update Information</h1>
          <label className="form-control"><span className="label-text">Name</span><input className="input input-bordered" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
          <label className="form-control"><span className="label-text">Image URL</span><input className="input input-bordered" type="url" required value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} /></label>
          <button disabled={saving} className="btn btn-primary text-white mt-4">{saving ? <span className="loading loading-spinner" /> : 'Update Information'}</button>
        </form>
      </div>
    </section>
  );
}
