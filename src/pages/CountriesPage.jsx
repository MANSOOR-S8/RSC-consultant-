import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import CTA from '../components/CTA.jsx';
import { useRevealGroup } from '../animations/scrollAnimations.js';
import countries from '../data/countries.js';

function CountriesPage() {
  const scope = useRevealGroup('.reveal-item', { start: 'top 85%' });

  return (
    <>
      <PageHero
        crumb="Countries"
        eyebrow="Global Network"
        title="Our European advisory network."
        description="Local specialists, established relationships and on-the-ground presence in eight European markets — with more added every year."
      />

      <section ref={scope} className="relative bg-paper py-24 lg:py-32">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <Link
                key={country.slug}
                to={`/countries/${country.slug}`}
                id={country.slug}
                className="reveal-item group flex flex-col rounded-2xl border border-navy-900/8 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{country.flag}</span>
                  <span className="rounded-full bg-mist px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-navy-700/60">
                    {country.region}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{country.name}</h3>
                <p className="mt-1 text-[12.5px] font-medium uppercase tracking-wide text-gold-500">
                  {country.office} Office
                </p>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-navy-800/65">{country.blurb}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-body text-[13.5px] font-semibold text-navy-900 transition-colors group-hover:text-gold-500">
                  View Details
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export default CountriesPage;
