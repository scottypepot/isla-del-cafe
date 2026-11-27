# Isla Café — Website

Official website for **Isla Café** — "Your New Iced Coffee Standard."

Built from Figma designs, developed screen-by-screen with frontend and backend implemented in separate phases.

---

## Tech Stack

| Layer       | Technology                               |
| ----------- | ---------------------------------------- |
| Frontend    | React 19 + Vite                          |
| Routing     | React Router DOM v7 (client-side)        |
| Styling     | Tailwind CSS v4                          |
| Fonts       | Jost (body/nav) — Fraunces token reserved, not loaded |
| Backend     | TBD — to be implemented in a later phase |
| Integration | TBD — planned after frontend sign-off    |

---

## Getting Started

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

To create a production build:

```bash
npm run build
```

---

## Project Structure

src/
├── assets/
│ └── menu-items/ # Per-item drink/snack photos
├── components/
│ ├── data/ # menuData.js, locationsData.js — content lives here, not hardcoded in JSX
│ ├── layout/ # Navbar, Footer — shared across every page
│ ├── sections/ # Home page sections (Hero, Favorites, LocationsCTA, DeliveryPartners)
│ ├── menu/ # Menu page: hero, filter popup, grid, item cards
│ ├── location/ # Location page: hero, branch cards + map modal
│ ├── franchise/ # Franchise page: hero, inquiry form
│ ├── ui/ # Small shared icons (CloseIcon, CheckIcon)
│ └── pages/ # Route-level components (Home, Menu, Location, Franchise)
├── hooks/
│ └── useModalBehavior.js # Escape-to-close, scroll lock, focus in/out for every modal
├── App.jsx # Router, route-change loader, scroll handling
├── main.jsx # App entry point, BrowserRouter
└── index.css # Tailwind import + design tokens (@theme) + all custom animations

---

## Routes

| Path         | Page      | Notes                                                                     |
| ------------ | --------- | ------------------------------------------------------------------------- |
| `/`          | Home      | Hero, Favorites, Locations CTA, Delivery Partners, Footer                 |
| `/menu`      | Menu      | Filter popup (category + drink type), item grid with ingredients modal    |
| `/location`  | Location  | 9 branch cards, "Show Location" opens a Google Maps modal                 |
| `/franchise` | Franchise | Franchise inquiry form (see **Known Gaps** — not wired to real email yet) |

`About Us` in the navbar is currently a disabled placeholder (no page built yet). `Contact` is a hover/click dropdown linking to the Home page's Footer section, `/location`, and `/franchise`.

---

## Design System

Design tokens are defined in `src/index.css` under Tailwind's `@theme` directive (Tailwind v4 config style — no separate `tailwind.config.js`).

**Colors**
| Token | Hex | Usage |
| -------------- | --------- | ----------------------------------------- |
| `isla-black` | `#0e0e0d` | Backgrounds, overlays, primary text |
| `isla-cream` | `#f7f4ee` | Page background |
| `isla-sand` | `#e7ddcc` | Secondary/accent surfaces, snack tiles |
| `isla-gold` | `#d9a441` | Accent color — branch names, active filters, focus rings _(eyeballed from Figma, not yet color-picked exact)_ |
| `menu-tile` | `#8b5a3d` | Background tile behind drink photos |

**Typography**
| Role | Font | Notes |
| -------- | -------- | -------------------------- |
| Display | Fraunces | Reserved (`--font-display`) — not loaded or used yet; add it back in `index.html` before using |
| Body/Nav | Jost | Navigation, body copy |

---

## Responsive Approach

Key visual elements (logo, hero heading, CTA button, page hero titles) use **fluid sizing via CSS `clamp()`** rather than fixed Tailwind breakpoints, so they scale continuously across screen sizes instead of jumping at fixed widths (mobile → tablet → desktop).

Example pattern used throughout:

```css
font-size: clamp(MIN, PREFERRED_VW, MAX);
```

When adjusting sizing, always confirm `MIN < MAX` — `clamp()` will lock to the minimum value and stop scaling if this order is reversed.

---

## Assets

Images are imported directly (not referenced via string path), since files live in `src/assets/` rather than `public/`:

```jsx
import logo from "../../assets/islalogo.png";
```

Menu item photos live in `src/assets/menu-items/` and are imported per-item in `src/components/data/menuData.js`.

**Note:** the current logo file (`islalogo.png`) contains built-in transparent padding around the artwork. Until it's re-exported cropped to the visible edges, a CSS scale/crop workaround is applied at usage sites — see `Navbar.jsx` and `Hero.jsx` for the pattern.

**Note:** `menu-items/Spanish-latte.jpg` has a capital "S" while every other file in that folder is lowercase. Works fine on Windows/macOS locally, but will 404 on a case-sensitive Linux build server unless renamed to match before deploying.

---

## Interaction Patterns

A few things worth knowing before touching related code:

- **Route-change loader** (`App.jsx`) — a branded palm-tree loader shows on every real navigation (not on hash-only or first-load), then fades into the new page. Skips entirely for users with `prefers-reduced-motion` set.
- **Hash scrolling** — links like `/#favorites` or `/#contact` scroll to a matching `id` on the Home page, whether you're already there (smooth scroll) or navigating from another page (instant, hidden behind the loader).
- **Modal popup pattern** — reused for the Menu filter, each Menu item's ingredients, and each Location branch's map: dark/light themed panel, closes on outside click, Escape, or the X button, locks background scroll while open. The shared behavior lives in `hooks/useModalBehavior.js` — new popups should call it and follow the same shape for consistency.
- **Favorites → Menu deep links** — clicking an espresso/matcha/milk card on the Home page navigates to `/menu?tag=espresso` (etc.), which pre-filters the Menu page to that drink type.
- **Location maps** — uses Google's keyless embed URL (`google.com/maps?q=...&output=embed`), geocoded from the address string in `locationsData.js`. No API key required for this, but it also means no custom pins/styling — a real Maps API key would be needed for that later.

---

## Known Gaps / Things to Verify

- **Franchise form** (`FranchiseForm.jsx`) has full client-side validation (email format, disposable-domain blocklist, honeypot bot trap) but submission is currently simulated — there's a `TODO` marking exactly where to wire in real email delivery (EmailJS or a backend endpoint) once that phase starts.
- **Menu images** — `cafe-latte`, `brownies`, `cookies`, and `muffin` still show placeholder boxes; no photo files exist for them yet in `menu-items/`.
- **Location branch data** (`locationsData.js`) — addresses, store hours, and social handles were transcribed from the Figma flyer images. Not verified against real business data yet.
- **Menu item ingredients** — first-pass guesses based on item names, not confirmed recipes. Needs review before launch, especially for allergen accuracy.
- **About Us** — no page or content built yet; nav link is intentionally disabled rather than pointing anywhere.
- **`isla-gold`** hex value is an eyeballed estimate from the Figma screenshots, not color-picked exactly.

---

## Pages / Sections Completed

- [x] Navbar (logo, nav links, Contact dropdown, mobile menu)
- [x] Hero section (Home)
- [x] Favorites (Home)
- [x] Locations CTA (Home)
- [x] Delivery Partners (Home)
- [x] Footer
- [x] Menu page (filtering, tag deep-links, ingredients modal)
- [x] Location page (branch cards, map modal)
- [x] Franchise inquiry page (form + validation, UI only)
- [ ] About page
- [ ] Backend
- [ ] Frontend ↔ backend integration (franchise email delivery, real data sources)

---

## Roadmap

1. Verify/replace placeholder data flagged above (location hours, menu ingredients, missing images)
2. Build About page
3. Implement backend
4. Wire up frontend ↔ backend integration, starting with Franchise form email delivery

---

## Our Story page (`/our-story`)

Opened by the **OUR STORY** button on the homepage hero and the **About Us** nav link.

- All copy and photo slots live in `src/components/data/storyData.js`. Everything there is **placeholder**; replace it with the owner's real story.
- While `SHOW_PLACEHOLDER_NOTES` is `true`, dashed "Placeholder – Owner to provide" notes appear on the page. Set it to `false` before going live.
- Sections are in `src/components/story/`; the page itself is `src/components/pages/OurStory.jsx`.
