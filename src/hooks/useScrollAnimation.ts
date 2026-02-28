import { useEffect, useRef, useState } from "react";

type AnimationState = "hidden" | "visible" | "exit";

interface UseScrollAnimationOptions {
  threshold?: number;      // 0–1, how much of element must be visible (default 0.12)
  rootMargin?: string;     // IntersectionObserver rootMargin (default "-60px")
  exitOnLeave?: boolean;   // Animate out when element leaves viewport (default true)
  delay?: number;          // Delay in ms before animating in (default 0)
  once?: boolean;          // Only animate once, never exit (default false)
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const {
    threshold = 0.12,
    rootMargin = "0px 0px -60px 0px",
    exitOnLeave = true,
    delay = 0,
    once = false,
  } = options;

  const ref = useRef<T>(null);
  const [state, setState] = useState<AnimationState>("hidden");
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (once && hasAnimated.current) return;
          const timer = setTimeout(() => {
            setState("visible");
            hasAnimated.current = true;
          }, delay);
          return () => clearTimeout(timer);
        } else {
          if (!exitOnLeave || (once && hasAnimated.current)) return;
          if (hasAnimated.current) {
            setState("exit");
            // Reset to hidden after exit transition completes
            const reset = setTimeout(() => setState("hidden"), 500);
            return () => clearTimeout(reset);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, exitOnLeave, delay, once]);

  return { ref, state, isVisible: state === "visible" };
}
