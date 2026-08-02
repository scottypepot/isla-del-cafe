# Isla Café — Website

Official website for **Isla Café** — "Your New Iced Coffee Standard."

Built from Figma designs, developed screen-by-screen with frontend and backend implemented in separate phases.

---

## Tech Stack

| Layer       | Technology                               |
| ----------- | ---------------------------------------- |
| Frontend    | React 18 + Vite                          |
| Styling     | Tailwind CSS v4                          |
| Fonts       | Fraunces (display), Jost (body/nav)      |
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
├── assets/ # Images, logos, and other static media
├── components/
│ ├── layout/ # Structural components (Navbar, Footer, etc.)
│ └── sections/ # Page sections (Hero, About, Menu, etc.)
├── App.jsx # Root component, assembles page sections
├── main.jsx # App entry point
└── index.css # Tailwind import + design tokens (@theme)

---

## Design System

Design tokens are defined in `src/index.css` under Tailwind's `@theme` directive (Tailwind v4 config style — no separate `tailwind.config.js`).

**Colors**
| Token | Hex | Usage |
|----------------|-----------|----------------------------|
| `isla-black` | `#0e0e0d` | Backgrounds, overlays |
| `isla-cream` | `#f7f4ee` | Page background |
| `isla-sand` | `#e7ddcc` | Secondary/accent surfaces |

**Typography**
| Role | Font | Notes |
|----------|------------|-------------------------------|
| Display | Fraunces | Logo, headings |
| Body/Nav | Jost | Navigation, body copy |

---

## Responsive Approach

Key visual elements (logo, hero heading, CTA button) use **fluid sizing via CSS `clamp()`** rather than fixed Tailwind breakpoints, so they scale continuously across screen sizes instead of jumping at fixed widths (mobile → tablet → desktop).

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

**Note:** the current logo file (`islalogo.png`) contains built-in transparent padding around the artwork. Until it's re-exported cropped to the visible edges, a CSS scale/crop workaround is applied at usage sites — see `Navbar.jsx` and `Hero.jsx` for the pattern.

---

## Pages / Sections Completed

- [x] Navbar (logo, nav links, Contact dropdown, mobile menu)
- [x] Hero section
- [ ] About
- [ ] Menu
- [ ] Contact
- [ ] Footer

---

## Roadmap

1. Complete remaining frontend sections per Figma
2. Confirm frontend against design, section by section
3. Implement backend
4. Wire up frontend ↔ backend integration
