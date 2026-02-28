import { useEffect, useRef, useState } from "react";

// ─── Scroll Progress Bar ───────────────────────────────────────────────────────
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: `${progress}%`,
        background: "linear-gradient(90deg, #00D4FF, #0052FF, #00D4FF)",
        backgroundSize: "200% 100%",
        animation: "shimmer 2s linear infinite",
        zIndex: 99999,
        transition: "width 0.1s linear",
        boxShadow: "0 0 10px rgba(0,212,255,0.8), 0 0 4px rgba(0,212,255,0.4)",
        pointerEvents: "none",
      }}
    />
  );
}

// ─── Cursor Glow ──────────────────────────────────────────────────────────────
export function CursorGlow({
  color = "rgba(0, 212, 255, 0.07)",
  size = 320,
}: {
  color?: string;
  size?: number;
}) {
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const pos   = useRef({ x: -1000, y: -1000 });
  const raf   = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    document.addEventListener("mousemove", onMove);

    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.08;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.left = pos.current.x + "px";
        glowRef.current.style.top  = pos.current.y + "px";
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        width: size,
        height: size,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9998,
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  );
}

// ─── Section reveal with glow border ──────────────────────────────────────────
export function SectionGlow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setActive(e.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        transition: "box-shadow 0.8s ease",
        boxShadow: active
          ? "0 0 0 1px rgba(0,212,255,0.08), 0 8px 40px rgba(0,82,255,0.06)"
          : "none",
        borderRadius: "inherit",
      }}
    >
      {children}
    </div>
  );
}
