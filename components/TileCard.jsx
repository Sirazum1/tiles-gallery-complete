import Image from 'next/image';
import Link from 'next/link';

export default function TileCard({ tile }) {
  return (
    <div className="tile-card card bg-base-100 shadow-xl border border-teal-100 overflow-hidden">
      <figure className="h-56 relative"><Image src={tile.image} alt={tile.title} fill className="object-cover" /></figure>
      <div className="card-body">
        <div className="flex items-center justify-between gap-2">
          <h2 className="card-title text-lg">{tile.title}</h2>
          <div className="badge badge-primary badge-outline">{tile.category}</div>
        </div>
        <p className="text-sm opacity-75 line-clamp-2">{tile.description}</p>
        <p className="font-bold text-primary">{tile.currency} {tile.price}</p>
        <div className="card-actions justify-end">
          <Link href={`/tile/${tile.id}`} className="btn btn-primary btn-sm text-white">View Details</Link>
        </div>
      </div>
    </div>
  );
}
