import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ProcessSection from "@/components/ProcessSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { FadeUp, FadeLeft, FadeRight, ZoomIn, Animate } from "@/components";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>

        {/* Hero — zooms in on load */}
        <ZoomIn duration={900} once>
          <HeroSection />
        </ZoomIn>

        {/* Marquee — fades up */}
        <FadeUp delay={100}>
          <MarqueeSection />
        </FadeUp>

        {/* Expertise — slides in from left */}
        <FadeLeft>
          <ExpertiseSection />
        </FadeLeft>

        {/* Projects — slides in from right */}
        <FadeRight>
          <ProjectsSection />
        </FadeRight>

        {/* Tech Stack — staggered children */}
        <Animate variant="fade-up" stagger staggerDelay={100}>
          <TechStackSection />
        </Animate>

        {/* Process — slides up */}
        <Animate variant="slide-up">
          <ProcessSection />
        </Animate>

        {/* Experience — fades in from left */}
        <FadeLeft delay={100}>
          <ExperienceSection />
        </FadeLeft>

        {/* Contact CTA — zoom in */}
        <ZoomIn>
          <ContactCTA />
        </ZoomIn>

      </main>

      <FadeUp>
        <Footer />
      </FadeUp>
    </div>
  );
};

export default Index;
