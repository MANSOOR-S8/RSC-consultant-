import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapSetup.js';
import SectionEyebrow from './SectionEyebrow.jsx';

const STEPS = [
  { num: '01', title: 'Consultation', description: 'We map your objectives, constraints and timeline in an initial working session.' },
  { num: '02', title: 'Analysis', description: 'Our specialists assess the market, regulatory and operational landscape.' },
  { num: '03', title: 'Strategy', description: 'A tailored plan is built, pressure-tested against real-world scenarios.' },
  { num: '04', title: 'Execution', description: 'We implement alongside your team, adjusting as conditions change.' },
  { num: '05', title: 'Success', description: 'Outcomes are reviewed against the original goals, and the plan evolves.' },
];

function Process() {
  const scope = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top',
          ease: 'none',
          scrollTrigger: {
            trigger: scope.current,
            start: 'top 65%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        }
      );

      gsap.fromTo(
        '.process-step',
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: { trigger: scope.current, start: 'top 72%', once: true },
        }
      );
    },
    { scope }
  );

  return (
    <section id="process" ref={scope} className="relative bg-paper py-28 lg:py-36">
      <div className="container-page">
        <div className="max-w-2xl">
          <SectionEyebrow code="05" label="Our Process" />
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-900 text-balance sm:text-4xl lg:text-[2.6rem]">
            Five legs, one journey from question to outcome.
          </h2>
        </div>

        <div className="relative mt-16 max-w-2xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-navy-900/10 sm:left-[23px]" />
          <div
            ref={lineRef}
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gold-500 sm:left-[23px]"
          />

          <div className="flex flex-col gap-12">
            {STEPS.map((step) => (
              <div key={step.num} className="process-step relative flex gap-6 pl-0 sm:gap-8">
                <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-gold-500 bg-paper font-mono text-[13px] font-semibold text-navy-900 sm:h-12 sm:w-12">
                  {step.num}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-display text-lg font-semibold text-navy-900">{step.title}</h3>
                  <p className="mt-2 max-w-md text-[14.5px] leading-relaxed text-navy-800/65">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
