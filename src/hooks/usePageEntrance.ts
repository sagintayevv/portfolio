import gsap from "gsap";
import { useEffect, useRef } from "react";

export function usePageEntrance(stagger = 0.12) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const targets = element.querySelectorAll<HTMLElement>(".will-animate");
    if (!targets.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    gsap.set(targets, { opacity: 0, y: 22 });

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger,
        clearProps: "transform",
      });
    }, element);

    return () => ctx.revert();
  }, [stagger]);

  return containerRef;
}
