import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapSetup.js';

function ServiceCard({ icon: Icon, title, description, to = '/services' }) {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  useGSAP(
    () => {
      const el = cardRef.current;
      const onEnter = () =>
        gsap.to(iconRef.current, { rotate: -8, scale: 1.08, duration: 0.35, ease: 'power2.out' });
      const onLeave = () =>
        gsap.to(iconRef.current, { rotate: 0, scale: 1, duration: 0.35, ease: 'power2.out' });
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
      return () => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      };
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className="reveal-item group relative flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-soft"
    >
      <div
        ref={iconRef}
        className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-300"
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display text-lg font-semibold text-navy-900">{title}</h3>
      <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-navy-800/65">{description}</p>
      <Link
        to={to}
        className="mt-6 inline-flex items-center gap-1.5 font-body text-[13.5px] font-semibold text-navy-900 transition-colors group-hover:text-gold-500"
      >
        Learn More
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  );
}

export default ServiceCard;
