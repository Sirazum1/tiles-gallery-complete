import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { tiles } from '@/data/tiles';

export function generateStaticParams() {
  return tiles.map((tile) => ({ id: tile.id }));
}

export default function TileDetails({ params }) {
  const tile = tiles.find((item) => item.id === params.id);
  if (!tile) notFound();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <Link href="/all-tiles" className="btn btn-outline btn-primary mb-8">← Back to Gallery</Link>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-teal-100">
          <Image src={tile.image} alt={tile.title} fill className="object-cover" priority />
        </div>
        <div>
          <div className="badge badge-secondary text-white mb-3">{tile.category}</div>
          <h1 className="text-4xl lg:text-6xl font-black">{tile.title}</h1>
          <p className="mt-3 font-semibold text-primary">Creator: {tile.creator}</p>
          <p className="mt-5 text-lg opacity-80">{tile.description}</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="stat bg-white rounded-2xl shadow"><div className="stat-title">Price</div><div className="stat-value text-primary text-2xl">{tile.currency} {tile.price}</div></div>
            <div className="stat bg-white rounded-2xl shadow"><div className="stat-title">Dimensions</div><div className="stat-value text-primary text-2xl">{tile.dimensions}</div></div>
            <div className="stat bg-white rounded-2xl shadow"><div className="stat-title">Material</div><div className="stat-value text-primary text-2xl">{tile.material}</div></div>
            <div className="stat bg-white rounded-2xl shadow"><div className="stat-title">Stock</div><div className="stat-value text-primary text-2xl">{tile.inStock ? 'Available' : 'Sold Out'}</div></div>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {tile.tags.map((tag) => <span key={tag} className="badge badge-primary badge-outline">{tag}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
