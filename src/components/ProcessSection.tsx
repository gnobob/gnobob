import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/portfolio-data";
import SectionHeading from "./SectionHeading";

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="process" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Approach" heading="Prototype to production." />
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-6 rounded-xl relative overflow-hidden group"
            >
              <span className="absolute -top-4 -right-2 text-7xl font-heading font-bold text-foreground/[0.03] group-hover:text-primary/[0.08] transition-colors duration-500">
                {step.number}
              </span>
              <div className="relative z-10">
                <span className="text-xs text-primary font-mono">{step.number}</span>
                <h3 className="text-lg font-heading font-bold mt-2 mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
