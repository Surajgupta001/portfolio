import { useEffect, useRef } from "react";

/** Progressive enhancement: content stays readable without JavaScript or motion. */
export function usePortfolioMotion() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;

    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (preference.matches || entry.target.contains(document.activeElement)) return;
        const element = entry.target;
        const siblings = element.parentElement?.children;
        const index = siblings ? Array.from(siblings).indexOf(element) : 0;
        const animation = element.animate(
          [{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }],
          { duration: 650, delay: Math.min(index % 3, 2) * 75, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "backwards" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

    root.querySelectorAll("main > section:not(:first-child) h2, main > section article, #journey li, #about p, #contact form, #skills [role=tablist]").forEach((element) => observer.observe(element));
    const stop = () => {
      if (preference.matches) {
        observer.disconnect();
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      }
    };
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", stop);
    };
  }, []);

  return ref;
}