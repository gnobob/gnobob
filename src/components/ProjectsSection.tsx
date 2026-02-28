import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Factory, Gauge, Rocket, Award, FileText } from "lucide-react";
import { FEATURED_PROJECT, SECONDARY_PROJECTS } from "@/lib/portfolio-data";
import SectionHeading from "./SectionHeading";

const iconMap = { Factory, Gauge, Rocket };

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Selected Work"
          heading="Systems deployed and running."
          subheading="Competition winners, patented devices, and production deployments."
        />
        <div ref={ref} className="grid lg:grid-cols-2 gap-6">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl lg:row-span-3 flex flex-col justify-between group"
          >
            <div>
              <span className="text-xs text-primary uppercase tracking-widest">
                {FEATURED_PROJECT.category}
              </span>
              <h3 className="text-3xl font-heading font-bold mt-3 mb-2">
                {FEATURED_PROJECT.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-1">
                {FEATURED_PROJECT.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                {FEATURED_PROJECT.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {FEATURED_PROJECT.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              {FEATURED_PROJECT.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {badge.includes("Winner") ? <Award size={12} /> : <FileText size={12} />}
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Secondary */}
          {SECONDARY_PROJECTS.map((project, i) => {
            const Icon = iconMap[project.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card p-6 rounded-xl group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                      {t}
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

export default ProjectsSection;
