import React, { CSSProperties } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// ─── Animation variant definitions ────────────────────────────────────────────
type Variant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "zoom-in"
  | "zoom-out"
  | "flip-x"
  | "flip-y"
  | "slide-up"
  | "reveal-left"
  | "reveal-right";

interface AnimateProps {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;           // ms
  duration?: number;        // ms (default 750)
  exitOnLeave?: boolean;    // animate out when scrolled away (default true)
  once?: boolean;           // never animate out (default false)
  threshold?: number;       // 0-1 visibility before trigger (default 0.12)
  className?: string;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
  stagger?: boolean;        // stagger direct children
  staggerDelay?: number;    // ms between each staggered child (default 100)
}

// Hidden styles per variant
const hiddenStyles: Record<Variant, CSSProperties> = {
  "fade-up":      { opacity: 0, transform: "translateY(48px)" },
  "fade-down":    { opacity: 0, transform: "translateY(-48px)" },
  "fade-left":    { opacity: 0, transform: "translateX(60px)" },
  "fade-right":   { opacity: 0, transform: "translateX(-60px)" },
  "fade-in":      { opacity: 0, transform: "scale(0.94)" },
  "zoom-in":      { opacity: 0, transform: "scale(0.80)" },
  "zoom-out":     { opacity: 0, transform: "scale(1.20)" },
  "flip-x":       { opacity: 0, transform: "perspective(700px) rotateX(20deg)" },
  "flip-y":       { opacity: 0, transform: "perspective(700px) rotateY(20deg)" },
  "slide-up":     { opacity: 0, transform: "translateY(80px) skewY(2deg)" },
  "reveal-left":  { opacity: 1, clipPath: "inset(0 100% 0 0)" },
  "reveal-right": { opacity: 1, clipPath: "inset(0 0 0 100%)" },
};

// Exit styles (slightly different direction on leave)
const exitStyles: Record<Variant, CSSProperties> = {
  "fade-up":      { opacity: 0, transform: "translateY(-24px)" },
  "fade-down":    { opacity: 0, transform: "translateY(24px)" },
  "fade-left":    { opacity: 0, transform: "translateX(30px)" },
  "fade-right":   { opacity: 0, transform: "translateX(-30px)" },
  "fade-in":      { opacity: 0, transform: "scale(1.04)" },
  "zoom-in":      { opacity: 0, transform: "scale(1.06)" },
  "zoom-out":     { opacity: 0, transform: "scale(0.94)" },
  "flip-x":       { opacity: 0, transform: "perspective(700px) rotateX(-10deg)" },
  "flip-y":       { opacity: 0, transform: "perspective(700px) rotateY(-10deg)" },
  "slide-up":     { opacity: 0, transform: "translateY(-40px) skewY(-1deg)" },
  "reveal-left":  { opacity: 1, clipPath: "inset(0 0 0 100%)" },
  "reveal-right": { opacity: 1, clipPath: "inset(0 100% 0 0)" },
};

const visibleStyles: CSSProperties = {
  opacity: 1,
  transform: "none",
  clipPath: "inset(0 0% 0 0)",
};

export function Animate({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 750,
  exitOnLeave = true,
  once = false,
  threshold = 0.12,
  className = "",
  style = {},
  as: Tag = "div",
  stagger = false,
  staggerDelay = 100,
}: AnimateProps) {
  const { ref, state } = useScrollAnimation({
    delay,
    exitOnLeave,
    once,
    threshold,
  });

  const isVisible = state === "visible";
  const isExit    = state === "exit";

  const currentStyle: CSSProperties = isVisible
    ? { ...visibleStyles }
    : isExit
    ? { ...exitStyles[variant] }
    : { ...hiddenStyles[variant] };

  const easing = isExit
    ? `opacity ${duration * 0.55}ms ease-in, transform ${duration * 0.55}ms ease-in, clip-path ${duration * 0.55}ms ease-in`
    : `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1), transform ${duration}ms cubic-bezier(0.22,1,0.36,1), clip-path ${duration}ms cubic-bezier(0.22,1,0.36,1)`;

  // If stagger mode — wrap children individually
  if (stagger && React.Children.count(children) > 0) {
    return (
      // @ts-ignore
      <Tag
        ref={ref}
        className={className}
        style={{ ...style }}
      >
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            style={{
              ...(isVisible
                ? visibleStyles
                : isExit
                ? { opacity: 0, transform: "translateY(20px)" }
                : { opacity: 0, transform: "translateY(32px)" }),
              transition: isVisible
                ? `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${i * staggerDelay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${i * staggerDelay}ms`
                : `opacity ${duration * 0.4}ms ease-in ${i * 30}ms, transform ${duration * 0.4}ms ease-in ${i * 30}ms`,
            }}
          >
            {child}
          </div>
        ))}
      </Tag>
    );
  }

  return (
    // @ts-ignore
    <Tag
      ref={ref}
      className={className}
      style={{
        willChange: "transform, opacity",
        ...currentStyle,
        transition: easing,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

// ─── Convenience wrappers ──────────────────────────────────────────────────────

export const FadeUp    = (p: Omit<AnimateProps, "variant">) => <Animate {...p} variant="fade-up" />;
export const FadeLeft  = (p: Omit<AnimateProps, "variant">) => <Animate {...p} variant="fade-left" />;
export const FadeRight = (p: Omit<AnimateProps, "variant">) => <Animate {...p} variant="fade-right" />;
export const ZoomIn    = (p: Omit<AnimateProps, "variant">) => <Animate {...p} variant="zoom-in" />;
export const FlipX     = (p: Omit<AnimateProps, "variant">) => <Animate {...p} variant="flip-x" />;
export const Reveal    = (p: Omit<AnimateProps, "variant">) => <Animate {...p} variant="reveal-left" />;
export const SlideUp   = (p: Omit<AnimateProps, "variant">) => <Animate {...p} variant="slide-up" />;
