# TilesGallery — Tiles Gallery Website

## Purpose
TilesGallery is a modern single page application style website for showcasing a tile gallery. Users can browse all tiles publicly, search tiles by title, login/register, view private tile details, and update their profile information.

## Live URL
https://tiles-gallery-complete.vercel.app

## Key Features
- Next.js App Router project
- Responsive layout for mobile, tablet, and desktop
- Custom navbar with Home, All Tiles, My Profile, Login, Logout
- Custom footer with social links and Contact Us section
- Home page banner with “Discover Your Perfect Aesthetic” and Browse Now button
- Marquee text for new arrivals and weekly feature
- Featured Tiles section showing top 4 tiles
- All Tiles page with search bar and tile cards
- Private Tile Details route /tile/[id]
- BetterAuth authentication with MongoDB adapter
- Email/password login and registration
- Google social login support
- My Profile private route
- Update Information route for name and image URL
- Loader on data fetching
- Not-found page
- Animate.css package used for animation
- Environment variables secured through .env.local

## NPM Packages Used
- next
- react
- react-dom
- better-auth
- @better-auth/mongo-adapter
- mongodb
- daisyui
- tailwindcss
- react-hot-toast
- animate.css
- @heroicons/react