const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-100"
        style={{
          background: "radial-gradient(circle, hsla(192,100%,50%,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "orb-drift-1 35s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(270,60%,50%,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "orb-drift-2 40s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[30%] w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(192,100%,50%,0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "orb-drift-3 30s ease-in-out infinite",
        }}
      />

      {/* Light Beams */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, transparent 0%, hsla(192,100%,50%,0.03) 40%, transparent 60%)",
          animation: "beam-sweep 20s ease-in-out infinite",
        }}
      />

      {/* Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, hsla(0,0%,0%,0.5) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
