import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, ArrowRight } from "lucide-react";
import { PERSONAL } from "@/lib/portfolio-data";

const ContactCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact_cta" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 rounded-2xl text-center relative overflow-hidden"
        >
          {/* Glow behind */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, hsla(192,100%,50%,0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
              animation: "pulse-glow 4s ease-in-out infinite",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-[-0.02em] mb-4">
              Available for robotics and IoT projects.
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10">
              Hardware prototyping, automation systems, and embedded AI deployment. Remote or on-site.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="glass-button px-6 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2 hover:shadow-[0_0_30px_hsl(192_100%_50%/0.4)] transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={16} />
              </a>
              <a
                href={PERSONAL.cvLink}
                className="glass-button px-6 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
