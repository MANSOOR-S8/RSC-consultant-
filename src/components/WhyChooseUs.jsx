import { Award, Users, Network, ShieldCheck, Heart } from 'lucide-react';
import { useRevealGroup } from '../animations/scrollAnimations.js';
import SectionEyebrow from './SectionEyebrow.jsx';

const REASONS = [
  { icon: Award, title: 'Experience', description: 'Two decades advising organisations through complex, cross-border decisions.' },
  { icon: Users, title: 'Professional Team', description: 'Sector specialists and regional experts working as one coordinated unit.' },
  { icon: Network, title: 'Global Network', description: 'Established relationships across 30+ countries, ready when you need them.' },
  { icon: ShieldCheck, title: 'Transparent Process', description: 'Clear timelines, clear pricing, and reporting you can act on immediately.' },
  { icon: Heart, title: 'Client-Focused Approach', description: 'Every engagement is shaped around your goals, not a standard package.' },
];

function WhyChooseUs() {
  const scope = useRevealGroup('.reveal-item', { start: 'top 80%' });

  return (
    <section id="why-us" ref={scope} className="relative bg-paper py-28 lg:py-36">
      <div className="container-page">
        <div className="max-w-2xl">
          <SectionEyebrow code="03" label="Why Choose Us" />
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-900 text-balance sm:text-4xl lg:text-[2.6rem]">
            What clients notice after the first engagement.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className={`reveal-item rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <r.icon className="h-6 w-6 text-gold-500" />
              <h3 className="mt-5 font-display text-[15px] font-semibold text-navy-900">{r.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-navy-800/65">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
