import Link from 'next/link';

export default function TileCard({ tile }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-200 hover:-translate-y-2 transition duration-300">
      <img
        src={tile.image}
        alt={tile.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-stone-950">{tile.title}</h3>
          <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
            {tile.category}
          </span>
        </div>

        <p className="text-stone-600 text-sm line-clamp-2 mb-4">
          {tile.description}
        </p>

        <p className="font-bold mb-4">
          {tile.currency} {tile.price}
        </p>

        <Link
          href={`/tile/${tile.id}`}
          className="btn btn-neutral w-full rounded-xl"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}