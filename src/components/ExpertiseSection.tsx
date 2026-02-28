import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Zap, Eye, Workflow, Boxes, Network } from "lucide-react";
import { EXPERTISE } from "@/lib/portfolio-data";
import SectionHeading from "./SectionHeading";

const iconMap = { Cpu, Zap, Eye, Workflow, Boxes, Network };

const ExpertiseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="expertise" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Core Expertise"
          heading="Engineering across the hardware-software stack."
          subheading="From circuit design to cloud integration. Robotics, automation, and intelligent systems."
        />
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 rounded-xl group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
