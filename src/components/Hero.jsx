import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../animations/gsapSetup.js";
import SectionEyebrow from "./SectionEyebrow.jsx";

function Hero() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
      )
        .fromTo(
          ".hero-line",
          { opacity: 0, y: 34 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 },
          "-=0.25",
        )
        .fromTo(
          ".hero-copy",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          "-=0.4",
        )
        .fromTo(
          ".hero-stat",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.35",
        );

      gsap.to(".hero-blob-1", {
        y: 24,
        x: -14,
        duration: 7,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".hero-blob-2", {
        y: -20,
        x: 16,
        duration: 8.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope },
  );

  return (
    <section
      id="hero"
      ref={scope}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-28 pb-20">
      {/* soft background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-blob-1 absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="hero-blob-2 absolute right-[-6rem] top-16 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>

      <div className="container-page relative z-10 w-full">
        <div className="max-w-3xl">
          {/* <div className="hero-eyebrow mb-7">
            <SectionEyebrow code="Est. 2005" label="Global Advisory" tone="dark" />
          </div> */}

          <h1 className="font-display text-[2.75rem] font-bold leading-[1.05] text-white text-balance sm:text-6xl lg:text-[4.2rem]">
            <span className="hero-line block">Global Consulting</span>
            <span className="hero-line block">&amp; Business Solutions</span>
          </h1>

          <p className="hero-copy mt-7 max-w-xl text-[17px] leading-relaxed text-white/65">
            Helping businesses move forward with strategic consulting,
            international market entry and smarter, evidence-led decisions —
            from first conversation to final execution.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/services"
              className="hero-cta group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 font-body text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400">
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="hero-cta inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-white/10">
              Contact Us
            </Link>
          </div>

          <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-7">
            <div className="hero-stat">
              <p className="font-display text-2xl font-bold text-white">30+</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide-xl text-white/45">
                Countries
              </p>
            </div>
            <div className="hero-stat">
              <p className="font-display text-2xl font-bold text-white">500+</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide-xl text-white/45">
                Clients
              </p>
            </div>
            <div className="hero-stat">
              <p className="font-display text-2xl font-bold text-white">95%</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide-xl text-white/45">
                Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70">
        <span className="font-mono text-[10px] uppercase tracking-wide-xl">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

export default Hero;
