import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, Settings, Cpu, Eye, Code, Cloud, Box, Radio } from "lucide-react";
import { TECH_STACK } from "@/lib/portfolio-data";
import SectionHeading from "./SectionHeading";

const iconMap = { Bot, Settings, Cpu, Eye, Code, Cloud, Box, Radio };

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="technical_stack" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Technical Stack" heading="Tools and frameworks." />
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {TECH_STACK.map((cat, i) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card p-5 rounded-xl group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} className="text-primary" />
                  <span className="text-sm font-heading font-bold">{cat.category}</span>
                </div>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
