import { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapSetup.js';
import PageHero from '../components/PageHero.jsx';
import CTA from '../components/CTA.jsx';
import countries, { getCountryBySlug } from '../data/countries.js';

function CountryDetailPage() {
  const { slug } = useParams();
  const country = getCountryBySlug(slug);
  const scope = useRef(null);

  useGSAP(
    () => {
      if (!country) return;
      gsap.fromTo(
        '.country-reveal',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
      );
    },
    { scope, dependencies: [slug] }
  );

  if (!country) {
    return <Navigate to="/countries" replace />;
  }

  const others = countries.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        crumb={country.name}
        eyebrow={`${country.flag} ${country.region}`}
        title={`Advisory on the ground in ${country.name}.`}
        description={country.blurb}
      />

      <section ref={scope} className="relative bg-paper py-24 lg:py-32">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="country-reveal lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              What we help with in {country.name}
            </h2>
            <ul className="mt-7 flex flex-col gap-4">
              {country.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-gold-500" />
                  <span className="text-[15px] leading-relaxed text-navy-800/75">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Talk to our {country.name} team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="country-reveal lg:col-span-5">
            <div className="rounded-[1.75rem] border border-navy-900/8 bg-navy-950 p-8 text-white shadow-soft">
              <span className="text-4xl">{country.flag}</span>
              <p className="mt-4 font-display text-xl font-semibold">{country.name}</p>
              <p className="mt-1 text-sm text-white/55">{country.office} Office · {country.region}</p>

              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="font-mono text-[11px] uppercase tracking-wide-xl text-white/45">
                  {country.stat.label}
                </span>
                <span className="font-display text-lg font-bold text-gold-300">{country.stat.value}</span>
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-navy-900/8 bg-white p-6 shadow-card">
              <p className="font-mono text-[11px] uppercase tracking-wide-xl text-navy-700/50">
                Also in {country.region}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {others.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/countries/${c.slug}`}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[14px] font-medium text-navy-800 transition-colors hover:bg-mist"
                    >
                      <span className="flex items-center gap-2.5">
                        <span>{c.flag}</span>
                        {c.name}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-navy-800/40" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/countries"
                className="mt-3 inline-flex items-center gap-1.5 px-3 font-body text-[13px] font-semibold text-gold-500 hover:text-gold-600"
              >
                View all countries
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export default CountryDetailPage;
