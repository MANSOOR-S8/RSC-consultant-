import { Briefcase, Globe2, Plane, GraduationCap, Building2, Target } from 'lucide-react';
import { useRevealGroup } from '../animations/scrollAnimations.js';
import SectionEyebrow from './SectionEyebrow.jsx';
import ServiceCard from './ServiceCard.jsx';

const SERVICES = [
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description: 'Operational and commercial strategy for founders and leadership teams navigating growth or change.',
  },
  {
    icon: Globe2,
    title: 'International Consulting',
    description: 'Market-entry research, partner sourcing and regulatory navigation across 30+ jurisdictions.',
  },
  {
    icon: Plane,
    title: 'Immigration & Visa Consulting',
    description: 'End-to-end relocation strategy for founders, investors and key talent moving across borders.',
  },
  {
    icon: GraduationCap,
    title: 'Education Consulting',
    description: 'Guidance for institutions and individuals pursuing international academic pathways.',
  },
  {
    icon: Building2,
    title: 'Corporate Advisory',
    description: 'Governance, structuring and risk advisory for scaling organisations and boards.',
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Long-range roadmaps that connect today’s decisions to a five-year destination.',
  },
];

function Services() {
  const scope = useRevealGroup('.reveal-item', { start: 'top 80%' });

  return (
    <section id="services" ref={scope} className="relative bg-mist py-28 lg:py-36">
      <div className="container-page">
        <div className="max-w-2xl">
          <SectionEyebrow code="02" label="Services" />
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-900 text-balance sm:text-4xl lg:text-[2.6rem]">
            Advisory built around where your business is headed next.
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-navy-800/70">
            Six practice areas, one coordinated team. Engage a single service or
            combine several as your organisation moves through its next chapter.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
