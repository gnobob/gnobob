import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { HERO, PERSONAL } from "@/lib/portfolio-data";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Profile Photo - Mobile: above headline, Desktop: right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0 lg:order-2 lg:w-[40%] flex justify-center"
          >
            {/* [REPLACE: Add your professional photo here] */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border border-white/15 backdrop-blur-md bg-white/[0.03] shadow-[0_0_60px_rgba(0,212,255,0.3)] flex items-center justify-center overflow-hidden"
            >
              {/* Grid pattern placeholder */}
              <svg
                className="w-full h-full opacity-10"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1.5" fill="white" />
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#heroGrid)" />
              </svg>
              {/* Inner glow ring */}
              <div className="absolute inset-3 rounded-full border border-white/10" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Text Content - 60% on desktop */}
          <div className="lg:order-1 lg:w-[60%]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass-button px-4 py-2 rounded-full text-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">{HERO.badge}</span>
            </motion.div>

            {/* Headline */}
            <div className="mb-6">
              {HERO.headline.map((line, i) => (
                <motion.h1
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold tracking-[-0.02em] leading-[1.05]"
                >
                  {line}
                </motion.h1>
              ))}
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              {HERO.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a
                href="#projects"
                className="glass-button px-6 py-3 rounded-lg font-medium text-sm hover:shadow-[0_0_30px_hsl(192_100%_50%/0.4)] transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href={PERSONAL.cvLink}
                className="glass-button px-6 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2 border-glass-border-btn"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="glass-card p-6 rounded-2xl max-w-3xl mt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {HERO.stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-2xl font-heading font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
