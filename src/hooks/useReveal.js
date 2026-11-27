import { useEffect, useRef, useState } from "react";

// Returns [ref, isVisible]. isVisible flips to true (once) the first time the
// referenced element scrolls into view. Used by the Our Story page to fade
// sections in. If the browser has no IntersectionObserver, or the visitor has
// asked their OS to reduce motion, the element is simply shown right away.
export default function useReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
