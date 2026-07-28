"use client";

import { useEffect } from "react";

export default function IntersectionObserverScript() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      // Capture all elements intersecting within this exact evaluation frame
      const intersectingEntries = entries.filter((entry) => entry.isIntersecting);

      // If multiple cards enter simultaneously, stagger their entrance delays by 100ms to ripple onto the screen
      intersectingEntries.forEach((entry, idx) => {
        const target = entry.target as HTMLElement;
        
        const delayMs = idx * 100;
        target.style.transitionDelay = `${delayMs}ms`;

        // Trigger smooth spring physics cascade animation via active selector
        requestAnimationFrame(() => {
          target.classList.add("in-view");
        });

        // Reset transition-delay post-animation so subsequent mouse hovers interact instantly at 0ms
        setTimeout(() => {
          target.style.transitionDelay = "0ms";
        }, delayMs + 950);

        // Unobserve to maintain clean one-way entrance cascade
        observer.unobserve(target);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Bind observer to all bento service tiles (.svc-card) and process items (.step)
    const observeTargets = () => {
      const targets = document.querySelectorAll(".svc-card, .step");
      targets.forEach((el) => {
        if (!el.classList.contains("in-view")) {
          observer.observe(el);
        }
      });
    };

    observeTargets();
    // Safety re-check for asynchronous Next.js hydration cycles
    const timeoutId = setTimeout(observeTargets, 250);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return null;
}
