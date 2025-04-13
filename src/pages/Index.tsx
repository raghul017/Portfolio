
import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import gsap from "gsap";
import { initializeAnimations } from "@/utils/animations";

// Import refactored styles
import "@/styles/base.css";
import "@/styles/animations.css";
import "@/styles/components.css";

const Index: React.FC = () => {
  const { toast } = useToast();
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
    
    toast({
      title: "Welcome to my portfolio!",
      description: "Feel free to explore my projects and reach out.",
      duration: 5000,
    });
    
    // Initialize animations
    const ctx = gsap.context(() => {
      initializeAnimations();

      // Enhanced parallax for background elements
      const parallaxElements = document.querySelectorAll('.bg-element');
      parallaxElements.forEach((el) => {
        gsap.to(el, {
          y: (i) => (i % 2 === 0 ? -150 : 150),
          x: (i) => (i % 2 === 0 ? -50 : 50),
          rotation: (i) => (i % 2 === 0 ? 15 : -15),
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        });
      });
    }, mainRef);
    
    return () => ctx.revert();
  }, [toast]);

  return (
    <div className="min-h-screen bg-background" ref={mainRef}>
      <Header />
      <main className="relative">
        {/* Large floating background elements */}
        <div className="fixed inset-0 -z-10">
          <div className="bg-element absolute top-0 left-10 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
          <div className="bg-element absolute bottom-0 right-10 w-[800px] h-[800px] border border-white/5 rounded-sm"></div>
          <div className="bg-element absolute top-1/3 left-1/4 w-[400px] h-[400px] border border-white/5 rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"></div>
          <div className="bg-element absolute top-2/3 right-1/3 w-[300px] h-[300px] border border-white/5 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02),transparent_70%)]"></div>
        </div>

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
