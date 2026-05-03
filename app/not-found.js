import Link from 'next/link';
export default function NotFound() {
  return <div className="min-h-[60vh] grid place-items-center text-center px-4"><div><h1 className="text-6xl font-black text-primary">404</h1><p className="my-4 text-xl">Page not found.</p><Link href="/" className="btn btn-primary text-white">Go Home</Link></div></div>;
}
