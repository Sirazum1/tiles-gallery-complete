'use client';
import { useEffect, useMemo, useState } from 'react';
import TileCard from '@/components/TileCard';

export default function AllTiles() {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tiles')
      .then((res) => res.json())
      .then((data) => setTiles(data))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => tiles.filter((tile) => tile.title.toLowerCase().includes(search.toLowerCase())), [tiles, search]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl lg:text-5xl font-black">All Tiles Gallery</h1>
        <p className="opacity-70 mt-2">Search by title and find your perfect design.</p>
      </div>
      <div className="max-w-2xl mx-auto mb-10">
        <input value={search} onChange={(e) => setSearch(e.target.value)} className="input input-bordered input-primary w-full input-lg bg-white" placeholder="Search tiles by title..." />
      </div>
      {loading ? <div className="text-center py-20"><span className="loading loading-spinner loading-lg text-primary" /></div> : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((tile) => <TileCard key={tile.id} tile={tile} />)}
        </div>
      )}
      {!loading && filtered.length === 0 && <p className="text-center text-error font-semibold">No tile found.</p>}
    </section>
  );
}
