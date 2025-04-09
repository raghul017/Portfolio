
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
import { ThemeProvider } from "@/context/ThemeContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import refactored styles
import "@/styles/base.css";
import "@/styles/animations.css";
import "@/styles/components.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index: React.FC = () => {
  const { toast } = useToast();
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    toast({
      title: "Welcome to my portfolio!",
      description: "Feel free to explore my projects and reach out.",
      duration: 5000,
    });
    
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Initialize locomotive scroll if needed
      
      // Create scroll-triggered animations for all sections
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0.6 },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
      
      // Create custom cursor if needed
      
      // Parallax background elements
      const bgElements = document.querySelectorAll('.bg-element');
      bgElements.forEach((el) => {
        gsap.to(el, {
          y: () => window.innerHeight * 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
      
    }, mainRef);
    
    return () => ctx.revert();
  }, [toast]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background" ref={mainRef}>
        <Header />
        <main className="relative">
          {/* Modern, minimalist background elements */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.03),transparent_70%)]"></div>
            <div className="absolute top-1/2 left-3/4 w-[300px] h-[300px] border border-border rounded-sm blur-sm bg-element"></div>
            <div className="absolute bottom-0 right-1/2 w-[400px] h-[1px] bg-border bg-element"></div>
            <div className="absolute top-1/4 left-1/4 w-[100px] h-[1px] bg-border rotate-45 bg-element"></div>
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
    </ThemeProvider>
  );
};

export default Index;
