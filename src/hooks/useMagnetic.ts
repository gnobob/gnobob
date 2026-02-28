import { useRef, useCallback } from "react";

/**
 * useMagnetic — makes a button/card magnetically follow the cursor on hover
 *
 * Usage:
 *   const { ref, onMouseMove, onMouseLeave } = useMagnetic({ strength: 0.3 })
 *   <button ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
 */
export function useMagnetic<T extends HTMLElement = HTMLButtonElement>({
  strength = 0.25,
  transition = "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
}: {
  strength?: number;
  transition?: string;
} = {}) {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      el.style.transition = transition;
    },
    [strength, transition]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
