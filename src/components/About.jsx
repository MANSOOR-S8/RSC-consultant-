import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapSetup.js';
import SectionEyebrow from './SectionEyebrow.jsx';

const STATS = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Clients Served' },
  { value: 30, suffix: '+', label: 'Countries' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
];

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null);
  const numRef = useRef(null);

  useGSAP(
    () => {
      const counter = { val: 0 };
      gsap.to(counter, {
        val: value,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        onUpdate: () => {
          if (numRef.current) numRef.current.textContent = Math.round(counter.val).toString();
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="reveal-item border-l border-navy-900/10 pl-5">
      <p className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
        <span ref={numRef}>0</span>
        {suffix}
      </p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-wide-xl text-navy-700/55">{label}</p>
    </div>
  );
}

function About() {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.about-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: scope.current, start: 'top 78%', once: true },
        }
      );

      gsap.fromTo(
        '.about-visual',
        { opacity: 0, scale: 0.94 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: scope.current, start: 'top 75%', once: true },
        }
      );
    },
    { scope }
  );

  return (
    <section id="about" ref={scope} className="relative bg-paper py-28 lg:py-36">
      <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="about-reveal">
            <SectionEyebrow code="01" label="About Us" />
          </div>
          <h2 className="about-reveal mt-6 font-display text-3xl font-bold leading-tight text-navy-900 text-balance sm:text-4xl lg:text-[2.6rem]">
            Two decades of steady judgment, deployed across borders.
          </h2>
          <p className="about-reveal mt-6 max-w-lg text-[15.5px] leading-relaxed text-navy-800/70">
            Meridian Voss was founded on a simple premise: businesses expanding into
            new markets need advisors who have actually made the crossing themselves.
            We pair sector specialists with on-the-ground regional teams, so every
            recommendation is grounded in how a market really works — not just how
            it looks from a distance.
          </p>
          <p className="about-reveal mt-4 max-w-lg text-[15.5px] leading-relaxed text-navy-800/70">
            From market entry and immigration strategy to corporate advisory and
            long-range planning, our engagements are built to hold up long after the
            final report is delivered.
          </p>

          <div className="about-reveal mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-x-6">
            {STATS.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="about-visual relative lg:col-span-6">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-navy-900 shadow-soft lg:ml-auto">
            <div className="absolute inset-0 bg-noise opacity-30" />
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wide-xl text-white/50">
                <span>Est. 2005</span>
                <span>HQ · New York</span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-white">
                  Meridian Voss
                </p>
                <p className="mt-1 text-sm text-white/55">Advisory Group, est. 2005</p>
                <div className="mt-6 flex gap-2">
                  {['London', 'Dubai', 'Singapore', 'Nairobi'].map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-white/60"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
