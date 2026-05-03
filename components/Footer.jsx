import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-3">TilesGallery</h2>
          <p className="text-stone-300">
            Premium tile inspiration for modern interiors, homes, offices, and creative spaces.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-stone-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-tiles">All Tiles</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <div className="space-y-2 text-stone-300">
            <p>Email: support@tilesgallery.com</p>
            <p>Phone: +880 1700-000000</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800 py-4 text-center text-sm text-stone-400">
        © 2026 TilesGallery. All rights reserved.
      </div>
    </footer>
  );
}