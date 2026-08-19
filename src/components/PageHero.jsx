import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow.jsx';

function PageHero({ eyebrow = 'Meridian Voss', title, description, crumb }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-36 sm:pb-24 sm:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="absolute right-[-6rem] top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>

      <div className="container-page relative z-10">
        <nav className="mb-6 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-white/40">
          <Link to="/" className="transition-colors hover:text-white/70">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/65">{crumb}</span>
        </nav>

        <SectionEyebrow code="MV" label={eyebrow} tone="dark" />

        <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.08] text-white text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/60">{description}</p>
        )}
      </div>
    </section>
  );
}

export default PageHero;
