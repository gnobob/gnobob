import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  heading: string;
  subheading?: string;
}

const SectionHeading = ({ label, heading, subheading }: SectionHeadingProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-xs uppercase tracking-[0.2em] text-primary font-body mb-4 block"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-[-0.02em] max-w-2xl"
      >
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground mt-4 max-w-xl text-lg"
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
