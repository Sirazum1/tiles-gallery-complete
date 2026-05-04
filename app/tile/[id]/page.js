import { tiles } from '@/data/tiles';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return tiles.map((tile) => ({
    id: tile.id,
  }));
}

export default async function TileDetailsPage({ params }) {
  const { id } = await params;

  const tile = tiles.find((item) => item.id === id);

  if (!tile) {
    notFound();
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <img
          src={tile.image}
          alt={tile.title}
          className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
        />

        <div>
          <p className="text-amber-700 font-bold uppercase tracking-widest mb-3">
            {tile.category}
          </p>

          <h1 className="text-4xl md:text-5xl font-black mb-5">
            {tile.title}
          </h1>

          <p className="text-lg text-stone-600 mb-6">
            {tile.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <Info title="Material" value={tile.material} />
            <Info title="Dimensions" value={tile.dimensions} />
            <Info title="Price" value={`${tile.currency} ${tile.price}`} />
            <Info title="Stock" value={tile.inStock ? 'Available' : 'Out of Stock'} />
          </div>

          <Link href="/all-tiles" className="btn btn-neutral">
            Back to All Tiles
          </Link>
        </div>
      </div>
    </section>
  );
}

function Info({ title, value }) {
  return (
    <div className="bg-stone-100 rounded-2xl p-4">
      <p className="text-sm text-stone-500">{title}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}