# isla cafe — Frontend

React + Vite + Tailwind CSS v4 project scaffold for the isla cafe site.

## Getting started

```bash
npm install
npm run dev
```

## What's built so far

- **Navbar** (`src/components/layout/Navbar.jsx`) — logo slot, Home / About Us / Menu links, Contact dropdown, mobile hamburger menu
- **Hero** (`src/components/sections/Hero.jsx`) — full-bleed background slot, centered logo mark slot, tagline, "OUR STORY" CTA button

## Image / asset placeholders

Elements that need real design assets are marked with `data-asset-slot` attributes so they're easy to find and swap:

- `data-asset-slot="nav-logo"` — small wordmark in the navbar
- `data-asset-slot="hero-background"` — full-bleed hero photo (currently a dark gradient placeholder)
- `data-asset-slot="hero-logo-mark"` — large palm-tree + isla logo mark centered in the hero

To drop in a real image, replace the placeholder `<div>` with an `<img>` tag or set a CSS `background-image`, e.g.:

```jsx
<div
  data-asset-slot="hero-background"
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/hero.jpg')" }}
/>
```

Place image files in `src/assets/images/` or `public/`.

## Stack notes

- Tailwind v4 (theme lives in `src/index.css` via `@theme`, no separate `tailwind.config.js`)
- Fonts: **Fraunces** (display/logo) + **Jost** (nav/body), loaded via Google Fonts in `index.html`
- Colors: `isla-black`, `isla-cream`, `isla-sand` (see `src/index.css`)

## Next up

Send over the next screen/section from Figma and we'll keep building. Backend + integration comes after the frontend is confirmed against each screen.
