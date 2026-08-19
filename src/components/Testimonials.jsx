import { Star } from 'lucide-react';
import { useRevealGroup } from '../animations/scrollAnimations.js';
import SectionEyebrow from './SectionEyebrow.jsx';

const TESTIMONIALS = [
  {
    name: 'Amara Okafor',
    role: 'CEO, Lindel Group',
    quote: 'Meridian Voss guided our expansion into three new markets without a single regulatory misstep. Their regional teams felt like an extension of our own.',
    rating: 5,
    initials: 'AO',
  },
  {
    name: 'Daniel Reyes',
    role: 'Founder, Northgate Partners',
    quote: 'The clarity of their process was the difference. We always knew what was happening next and why it mattered to our timeline.',
    rating: 5,
    initials: 'DR',
  },
  {
    name: 'Priya Menon',
    role: 'COO, Vantree Holdings',
    quote: 'Relocating our leadership team across four countries could have been chaos. Their immigration team made it feel routine.',
    rating: 5,
    initials: 'PM',
  },
];

function Testimonials() {
  const scope = useRevealGroup('.reveal-item', { start: 'top 80%' });

  return (
    <section id="testimonials" ref={scope} className="relative bg-mist py-28 lg:py-36">
      <div className="container-page">
        <div className="max-w-2xl">
          <SectionEyebrow code="06" label="Testimonials" />
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-900 text-balance sm:text-4xl lg:text-[2.6rem]">
            Trusted by leadership teams making high-stakes moves.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="reveal-item flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-7 shadow-card"
            >
              <div className="flex gap-1 text-gold-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[14.5px] leading-relaxed text-navy-800/75">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-navy-900/8 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 font-display text-xs font-semibold text-gold-300">
                  {t.initials}
                </span>
                <span>
                  <p className="font-display text-sm font-semibold text-navy-900">{t.name}</p>
                  <p className="text-[12.5px] text-navy-800/55">{t.role}</p>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
