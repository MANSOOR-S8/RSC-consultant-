import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRevealGroup } from '../animations/scrollAnimations.js';
import SectionEyebrow from './SectionEyebrow.jsx';

const CITIES = [
  { name: 'London', x: 22, y: 28 },
  { name: 'New York', x: 10, y: 34 },
  { name: 'Dubai', x: 58, y: 42 },
  { name: 'Singapore', x: 78, y: 58 },
  { name: 'Nairobi', x: 52, y: 62 },
  { name: 'Sydney', x: 88, y: 82 },
];

const ROUTES = [
  [0, 1],
  [0, 2],
  [2, 3],
  [2, 4],
  [3, 5],
];

function GlobalPresence() {
  const scope = useRevealGroup('.reveal-item', { start: 'top 80%' });

  return (
    <section id="global" ref={scope} className="relative overflow-hidden bg-navy-950 py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="container-page relative grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
        <div className="reveal-item lg:col-span-5">
          <SectionEyebrow code="04" label="Global Presence" tone="dark" />
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-[2.6rem]">
            Advisors on the ground, on every continent that matters to you.
          </h2>
          <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-white/60">
            Our network spans six regional hubs and partner firms in over thirty
            countries — giving every engagement local insight, not just
            head-office assumptions.
          </p>
          <div className="mt-9 flex flex-wrap gap-2.5">
            {CITIES.map((c) => (
              <span
                key={c.name}
                className="rounded-full border border-white/15 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-white/60"
              >
                {c.name}
              </span>
            ))}
          </div>

          <Link
            to="/countries"
            className="group mt-8 inline-flex items-center gap-2 font-body text-[13.5px] font-semibold text-gold-300 transition-colors hover:text-gold-200"
          >
            Explore our European countries
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="reveal-item relative lg:col-span-7">
          <div className="relative aspect-[16/11] w-full rounded-[1.75rem] border border-white/10 bg-navy-900/60 p-6">
            <svg viewBox="0 0 100 68" className="h-full w-full overflow-visible" aria-hidden="true">
              {/* dotted field */}
              {Array.from({ length: 12 }).map((_, row) =>
                Array.from({ length: 20 }).map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={col * 5.2 + 2}
                    cy={row * 5.8 + 2}
                    r="0.55"
                    fill="rgba(255,255,255,0.08)"
                  />
                ))
              )}

              {ROUTES.map(([a, b], i) => {
                const from = CITIES[a];
                const to = CITIES[b];
                const mx = (from.x + to.x) / 2;
                const my = Math.min(from.y, to.y) - 10;
                return (
                  <path
                    key={i}
                    d={`M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`}
                    fill="none"
                    stroke="#D6B87A"
                    strokeWidth="0.35"
                    strokeDasharray="1.6 1.4"
                    opacity="0.55"
                  />
                );
              })}

              {CITIES.map((c) => (
                <g key={c.name}>
                  <circle cx={c.x} cy={c.y} r="1.6" fill="#0A1B33" stroke="#D6B87A" strokeWidth="0.5" />
                  <circle cx={c.x} cy={c.y} r="0.6" fill="#D6B87A" />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalPresence;
