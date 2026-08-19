import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from './gsapSetup.js';

/**
 * Fades + slides up all direct children matching `selector` inside the
 * returned ref, staggered, as the container enters the viewport.
 */
export function useRevealGroup(selector = '.reveal-item', options = {}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(selector, scope.current);
      if (!items.length) return;

      gsap.set(items, { opacity: 0, y: options.y ?? 32 });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: options.duration ?? 0.9,
        ease: options.ease ?? 'power3.out',
        stagger: options.stagger ?? 0.12,
        scrollTrigger: {
          trigger: scope.current,
          start: options.start ?? 'top 82%',
          once: true,
        },
      });
    },
    { scope }
  );

  return scope;
}

/** Simple fade-up for a single element/container. */
export function useRevealSingle(options = {}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (!scope.current) return;
      gsap.set(scope.current, { opacity: 0, y: options.y ?? 30 });
      gsap.to(scope.current, {
        opacity: 1,
        y: 0,
        duration: options.duration ?? 1,
        ease: options.ease ?? 'power3.out',
        scrollTrigger: {
          trigger: scope.current,
          start: options.start ?? 'top 85%',
          once: true,
        },
      });
    },
    { scope }
  );

  return scope;
}
