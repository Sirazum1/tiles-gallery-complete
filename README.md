# TilesGallery — Tiles Gallery Website

## Purpose
TilesGallery is a modern single page application style website for showcasing a tile gallery. Users can browse all tiles publicly, search tiles by title, login/register, view private tile details, and update their profile information.

## Live URL
Add your deployed URL here after hosting on Vercel/Render/Netlify.

## Key Features
- Next.js App Router project
- Responsive layout for mobile, tablet, and desktop
- Custom navbar with Home, All Tiles, My Profile, Login, Logout
- Custom footer with social links and Contact Us section
- Home page banner with “Discover Your Perfect Aesthetic” and Browse Now button
- Marquee text for new arrivals and weekly feature
- Featured Tiles section showing top 4 tiles
- All Tiles page with search bar and tile cards
- Private Tile Details route `/tile/[id]`
- BetterAuth authentication with MongoDB adapter
- Email/password login and registration
- Google social login support
- My Profile private route
- Update Information route for name and image URL
- Loader on data fetching
- Not-found page
- Animate.css package used for animation
- Environment variables secured through `.env.local`

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

## Public Routes
- `/`
- `/all-tiles`
- `/login`
- `/register`

## Private Routes
- `/tile/[id]`
- `/my-profile`
- `/my-profile/edit`

## JSON Data Format Example
```json
{
  "id": "tile_001",
  "title": "Ceramic Blue Tile",
  "description": "Premium ceramic tile with blue glaze finish",
  "image": "/images/tiles/tile_001.jpg",
  "category": "ceramic",
  "price": 45.99,
  "currency": "USD",
  "dimensions": "60x60 cm",
  "material": "Ceramic",
  "inStock": true
}
```

## Local Setup
1. Copy `.env.example` to `.env.local`.
2. Add your MongoDB URI and BetterAuth values.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

## Environment Variables
```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/tiles-gallery?retryWrites=true&w=majority
BETTER_AUTH_SECRET=replace-with-a-long-random-secret-at-least-32-characters
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

For Google login, create credentials in Google Cloud Console and set the authorized redirect URI as:

```txt
http://localhost:3000/api/auth/callback/google
```

For deployment, replace localhost URLs with your live website URL.
