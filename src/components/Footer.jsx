import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';
import countries from '../data/countries.js';

const SOCIAL_PATHS = [
  // LinkedIn
  'M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z',
  // X / Twitter
  'M4 4l7.2 9.4L4.4 20h2.3l6-6.7 4.6 6.7H21l-7.6-9.9L20.1 4h-2.3l-5.6 6.2L7.6 4H4Zm2.9 1.6h1.9l9.2 12.8h-1.9L6.9 5.6Z',
  // Instagram
  'M12 2.2c2.7 0 3 0 4.1.06 1.1.05 1.85.23 2.5.48.7.27 1.28.63 1.86 1.2.57.58.93 1.16 1.2 1.86.25.65.43 1.4.48 2.5.06 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1.1-.23 1.85-.48 2.5a5 5 0 0 1-1.2 1.86 5 5 0 0 1-1.86 1.2c-.65.25-1.4.43-2.5.48-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1.1-.05-1.85-.23-2.5-.48a5 5 0 0 1-1.86-1.2 5 5 0 0 1-1.2-1.86c-.25-.65-.43-1.4-.48-2.5C2.2 15 2.2 14.7 2.2 12s0-3 .06-4.1c.05-1.1.23-1.85.48-2.5.27-.7.63-1.28 1.2-1.86.58-.57 1.16-.93 1.86-1.2.65-.25 1.4-.43 2.5-.48C9 2.2 9.3 2.2 12 2.2Zm0 1.8c-2.66 0-2.97 0-4.02.06-.9.04-1.4.19-1.72.32-.43.17-.74.37-1.07.7-.32.32-.52.63-.7 1.06-.13.32-.28.82-.32 1.72C4.1 9.03 4.1 9.34 4.1 12s0 2.97.06 4.02c.04.9.19 1.4.32 1.72.17.43.37.74.7 1.07.32.32.63.52 1.06.7.32.13.82.28 1.72.32C9.03 19.9 9.34 19.9 12 19.9s2.97 0 4.02-.06c.9-.04 1.4-.19 1.72-.32.43-.17.74-.37 1.07-.7.32-.32.52-.63.7-1.06.13-.32.28-.82.32-1.72.06-1.05.06-1.36.06-4.02s0-2.97-.06-4.02c-.04-.9-.19-1.4-.32-1.72a2.9 2.9 0 0 0-.7-1.07 2.9 2.9 0 0 0-1.06-.7c-.32-.13-.82-.28-1.72-.32C14.97 4 14.66 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm4.8-2a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16Z',
];

function SocialIcon({ d }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Countries', to: '/countries' },
  { label: 'Contact', to: '/contact' },
];

const SERVICES = [
  'Business Consulting',
  'International Consulting',
  'Immigration & Visa',
  'Education Consulting',
  'Corporate Advisory',
];

function Footer() {
  const featuredCountries = countries.slice(0, 5);

  return (
    <footer className="relative bg-navy-950 pt-20">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 via-navy-900 to-navy-950 text-gold-300">
                <Plane className="h-4 w-4 -rotate-45" />
              </span>
              <span className="font-display text-[15px] font-semibold text-white">Meridian Voss</span>
            </div>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/50">
              Strategic consulting, international opportunities and smarter
              solutions for businesses on the move.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_PATHS.map((d, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-gold-400/50 hover:text-gold-300"
                >
                  <SocialIcon d={d} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <p className="font-mono text-[11px] uppercase tracking-wide-xl text-white/40">Navigation</p>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-[14px] text-white/60 transition-colors hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-wide-xl text-white/40">Services</p>
            <ul className="mt-5 flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s} className="text-[14px] text-white/60">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-wide-xl text-white/40">Countries</p>
            <ul className="mt-5 flex flex-col gap-3">
              {featuredCountries.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/countries/${c.slug}`}
                    className="flex items-center gap-2 text-[14px] text-white/60 transition-colors hover:text-white"
                  >
                    <span>{c.flag}</span>
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/countries" className="text-[14px] font-semibold text-gold-300 hover:text-gold-200">
                  View all →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-7 text-[12.5px] text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Meridian Voss Advisory Group. All rights reserved.</p>
          <p className="font-mono uppercase tracking-wide-xl">Advisory · Est. 2005</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
