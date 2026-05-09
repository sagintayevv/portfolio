import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export function usePageEntrance(stagger = 0.12) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const targets = element.querySelectorAll<HTMLElement>('.will-animate');
    if (!targets.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(targets, { opacity: 1, y: 0, clearProps: 'all' });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power3.out',
          stagger,
          clearProps: 'transform',
        }
      );
    }, element);

    return () => ctx.revert();
  }, [stagger]);

  return containerRef;
}
