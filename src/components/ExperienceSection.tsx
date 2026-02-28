import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";
import { EDUCATION, ACHIEVEMENTS } from "@/lib/portfolio-data";
import SectionHeading from "./SectionHeading";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Background" heading="Education and recognition." />
        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold">Education</h3>
            </div>
            <h4 className="font-heading font-bold text-lg">{EDUCATION.degree}</h4>
            <p className="text-muted-foreground text-sm mt-1">{EDUCATION.institution}</p>
            <p className="text-muted-foreground text-xs mt-1">Class of {EDUCATION.year}</p>
            <div className="mt-4 pt-4 border-t border-glass-border">
              <p className="text-xs text-muted-foreground">
                <span className="text-foreground/80 font-medium">Relevant coursework:</span>{" "}
                {EDUCATION.coursework}
              </p>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card p-8 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Trophy size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold">Achievements</h3>
            </div>
            <div className="space-y-5">
              {ACHIEVEMENTS.map((a) => (
                <div key={a.title} className="relative pl-4 border-l-2 border-primary/30">
                  <h4 className="font-heading font-bold text-sm">{a.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{a.description}</p>
                  <span className="text-[10px] text-primary mt-1 block">{a.year}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
