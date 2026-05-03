import './globals.css';
import 'animate.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'TilesGallery | Modern Tile Showcase',
  description: 'A responsive tile gallery website built with Next.js, BetterAuth, MongoDB, DaisyUI and Animate.css.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="tilesTheme">
      <body>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
