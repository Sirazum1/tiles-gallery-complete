import Link from 'next/link';
import TileCard from '@/components/TileCard';
import { tiles } from '@/data/tiles';

export default function HomePage() {
  const featuredTiles = tiles.slice(0, 4);

  return (
    <main>
      <section className="bg-gradient-to-br from-stone-100 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 mb-4">
              Modern Tile Showroom
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-stone-950 mb-6">
              Discover Your Perfect Aesthetic
            </h1>

            <p className="text-lg text-stone-600 max-w-xl mb-8">
              Explore premium ceramic, porcelain, marble, mosaic, and rustic tiles for modern homes and creative spaces.
            </p>

            <Link href="/all-tiles" className="btn btn-neutral btn-lg">
              Browse Now
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {featuredTiles.map((tile) => (
              <img
                key={tile.id}
                src={tile.image}
                alt={tile.title}
                className="h-44 md:h-56 w-full object-cover rounded-3xl shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-white py-4 overflow-hidden">
        <marquee className="font-semibold text-stone-800">
          New Arrivals: Ceramic Blue Tile | Weekly Feature: Modern Geometric Patterns | Join the Community | Luxury Marble Surface | Rustic Terracotta Collection
        </marquee>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p className="text-amber-700 font-semibold">Featured Collection</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-950">
            Featured Tiles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      </section>
    </main>
  );
}