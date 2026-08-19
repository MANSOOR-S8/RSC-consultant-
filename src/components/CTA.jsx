import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRevealSingle } from '../animations/scrollAnimations.js';

function CTA() {
  const scope = useRevealSingle({ start: 'top 80%' });

  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <div ref={scope} className="container-page relative text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white text-balance sm:text-4xl lg:text-[2.75rem]">
          Ready to Take the Next Step?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[15.5px] leading-relaxed text-white/60">
          Let’s discuss how our consulting solutions can help you achieve your goals.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 font-body text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
