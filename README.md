# Meridian Voss — Consultant Website

A premium, fully responsive, multi-page consulting-firm website built with
React, React Router, Vite, Tailwind CSS and GSAP.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

Requires Node 18+.

## Pages & routing

Routing is handled by `react-router-dom` (`src/App.jsx`), with every route
rendered inside a shared `MainLayout` (Navbar + page content + Footer):

| Route                  | Page                                          |
| ----------------------- | ---------------------------------------------- |
| `/`                     | Home — hero + landing overview sections        |
| `/about`                 | About Us                                       |
| `/services`              | Services                                       |
| `/countries`              | Countries — grid of all advisory markets       |
| `/countries/:slug`        | Country detail (dynamic route)                 |
| `/contact`                | Contact Us                                     |
| any other path            | 404                                            |

`src/components/ScrollToTop.jsx` resets scroll to the top on every route
change (and honors `#hash` targets when present).

## Countries dropdown

`src/data/countries.js` holds the European country data (flag, region,
office, blurb, highlights, stat) used in three places:

- The Navbar's **Countries** dropdown (desktop hover panel / mobile
  accordion), each entry linking to its `/countries/:slug` page.
- `src/pages/CountriesPage.jsx` — the full grid listing.
- `src/pages/CountryDetailPage.jsx` — the dynamic detail page, driven by the
  `slug` URL param via `getCountryBySlug()`. An unknown slug redirects back
  to `/countries`.

The desktop dropdown panel uses a padding "bridge" between the trigger and
the panel so hover doesn't drop when moving the cursor down into it, plus a
CSS opacity/translate transition for a smooth open/close.

## Component structure

```
src/
├── components/    # Navbar, PageHero, Hero, section components, etc.
├── layouts/MainLayout.jsx   # Navbar + <Outlet /> + Footer, used by every route
├── data/countries.js         # European country data
├── animations/                 # gsapSetup, scrollAnimations
├── pages/                       # one file per route
├── App.jsx                       # BrowserRouter + Routes
├── main.jsx
└── index.css                      # Tailwind v4 theme tokens (@theme block)
```

## Design tokens

Colors, type and spacing are defined once in `src/index.css` under the
Tailwind v4 `@theme` block (`--color-navy-*`, `--color-gold-*`, `--font-display`
/ `--font-body` / `--font-mono`, etc.) — update them there to re-theme the
whole site.

## Notes

- Verified with zero horizontal overflow and zero console errors at 320,
  375, 390, 414, 768, 1024, 1280 and 1440px, across every route, including
  direct deep-link loads and client-side navigation.
- Content max-width is capped at 1440px via the `.container-page` utility.
