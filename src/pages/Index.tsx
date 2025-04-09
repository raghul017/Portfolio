
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
    // Force dark mode
    document.documentElement.classList.add('dark');
    
    toast({
      title: "Welcome to my portfolio!",
      description: "Feel free to explore my projects and reach out.",
      duration: 5000,
    });
    
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          { opacity: 0.7, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "center center",
              toggleActions: "play none none reverse",
            },
          }
        );
        
        // Animate section headers
        const sectionTitle = section.querySelector('.section-title');
        if (sectionTitle) {
          gsap.fromTo(
            sectionTitle,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionTitle,
                start: "top 80%",
                toggleActions: "play none none reverse",
              }
            }
          );
        }
      });
      
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
      
      // Animate staggered items (skills, projects, etc.)
      const staggerContainers = document.querySelectorAll('.stagger-container');
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll('.stagger-item');
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, mainRef);
    
    return () => ctx.revert();
  }, [toast]);

  return (
    <div className="min-h-screen bg-background" ref={mainRef}>
      <Header />
      <main className="relative">
        {/* Modern, minimalist background elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_70%)]"></div>
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
  );
};

export default Index;
