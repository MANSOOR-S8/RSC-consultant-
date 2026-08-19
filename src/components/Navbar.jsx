import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Plane, ChevronDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../animations/gsapSetup.js";
import countries from "../data/countries.js";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/countries", label: "Countries", dropdown: true },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);
  const drawerRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
    setCountriesOpen(false);
  }, [location.pathname]);

  useGSAP(() => {
    if (!drawerRef.current) return;
    if (open) {
      gsap.set(drawerRef.current, { display: "block" });
      gsap.fromTo(
        drawerRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.3, ease: "power2.out" },
      );
      gsap.fromTo(
        panelRef.current,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.45, ease: "power3.out" },
      );
      gsap.fromTo(
        ".mobile-link",
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.06,
          delay: 0.15,
        },
      );
    } else if (drawerRef.current.style.display !== "none") {
      gsap.to(panelRef.current, {
        xPercent: 100,
        duration: 0.35,
        ease: "power2.in",
      });
      gsap.to(drawerRef.current, {
        autoAlpha: 0,
        duration: 0.3,
        delay: 0.1,
        onComplete: () => gsap.set(drawerRef.current, { display: "none" }),
      });
    }
  }, [open]);

  const linkClasses = ({ isActive }) =>
    `relative whitespace-nowrap rounded-full px-3.5 py-2 font-body text-[13px] font-semibold transition-colors duration-300 xl:px-4 ${
      isActive
        ? "bg-gradient-to-r from-navy-800 to-navy-950 text-white shadow-md"
        : "text-navy-800/60 hover:text-navy-900"
    }`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 py-4 sm:py-5">
        <div className="container-page">
          <div
            className={`flex items-center justify-between gap-2 rounded-full border border-navy-900/8 bg-white/95 py-2 pl-2 pr-2 backdrop-blur-xl transition-shadow duration-500 sm:pl-3 ${
              scrolled
                ? "shadow-soft"
                : "shadow-[0_10px_30px_-16px_rgba(10,27,51,0.35)]"
            }`}>
            <Link
              to="/"
              className="flex flex-shrink-0 items-center gap-2.5 sm:gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 via-navy-900 to-navy-950 text-gold-300 shadow-inner sm:h-11 sm:w-11">
                <Plane className="h-4.5 w-4.5 -rotate-45" />
              </span>
              <span className="hidden flex-col leading-none sm:flex">
                <span className="font-display text-[15px] font-extrabold tracking-tight text-navy-950">
                  RSC <span className="text-gold-500">Consultant</span>
                </span>
                <span className="mt-1.5 font-mono text-[9px] uppercase tracking-wide-xl text-navy-700/50">
                  Global Advisory
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-0.5 rounded-full bg-mist p-1 lg:flex xl:gap-1">
              {LINKS.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.to}
                    className="group relative"
                    onMouseEnter={() => setCountriesOpen(true)}
                    onMouseLeave={() => setCountriesOpen(false)}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `relative flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 font-body text-[13px] font-semibold transition-colors duration-300 xl:px-4 ${
                          isActive || countriesOpen
                            ? "bg-gradient-to-r from-navy-800 to-navy-950 text-white shadow-md"
                            : "text-navy-800/60 hover:text-navy-900"
                        }`
                      }>
                      {link.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${countriesOpen ? "rotate-180" : ""}`}
                      />
                    </NavLink>

                    {/* pt-3 bridges the gap so hover doesn't drop between trigger and panel */}
                    <div
                      className={`absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3 transition-all duration-250 ease-out ${
                        countriesOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-2 opacity-0"
                      }`}>
                      <div className="overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-soft">
                        <div className="grid grid-cols-2 gap-1 p-3">
                          {countries.map((country) => (
                            <Link
                              key={country.slug}
                              to={`/countries/${country.slug}`}
                              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] font-medium text-navy-800 transition-colors duration-150 hover:bg-mist hover:text-navy-950">
                              <span className="text-base leading-none">
                                {country.flag}
                              </span>
                              {country.name}
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/countries"
                          className="flex items-center justify-between border-t border-navy-900/8 bg-mist/60 px-5 py-3 font-body text-[12.5px] font-semibold text-navy-900 transition-colors hover:text-gold-500">
                          View all countries
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={linkClasses}>
                    {link.label}
                  </NavLink>
                ),
              )}
            </nav>

            <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
              <Link
                to="/contact"
                className="group hidden items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 py-2 pl-5 pr-2 font-body text-[13px] font-semibold text-navy-950 shadow-md transition-shadow hover:shadow-lg sm:flex">
                Schedule Consultation
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-950/12 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-navy-900/10 text-navy-900 lg:hidden">
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        ref={drawerRef}
        className="fixed inset-0 z-50 hidden lg:hidden"
        style={{ visibility: "hidden", opacity: 0 }}>
        <button
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
        />
        <div
          ref={panelRef}
          className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col overflow-y-auto bg-navy-900 px-8 py-8 shadow-2xl">
          <div className="flex-1">
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-950 text-gold-300">
                  <Plane className="h-4 w-4 -rotate-45" />
                </span>
                <span className="font-display text-base font-semibold text-white">
                  Meridian Voss
                </span>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white">
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {LINKS.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.to}
                    className="mobile-link border-b border-white/10">
                    <button
                      onClick={() => setMobileCountriesOpen((v) => !v)}
                      className="flex w-full items-center justify-between py-4 font-display text-lg font-medium text-white/85">
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${mobileCountriesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        mobileCountriesOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}>
                      <div className="overflow-hidden">
                        <div className="grid grid-cols-2 gap-1 pb-4">
                          {countries.map((country) => (
                            <Link
                              key={country.slug}
                              to={`/countries/${country.slug}`}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white">
                              <span>{country.flag}</span>
                              {country.name}
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/countries"
                          onClick={() => setOpen(false)}
                          className="mb-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300">
                          View all countries
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `mobile-link border-b border-white/10 py-4 font-display text-lg font-medium ${
                        isActive ? "text-gold-300" : "text-white/85"
                      }`
                    }>
                    {link.label}
                  </NavLink>
                ),
              )}
            </nav>
          </div>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-5 py-3.5 text-center font-body text-sm font-semibold text-navy-950">
            Schedule Consultation
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
