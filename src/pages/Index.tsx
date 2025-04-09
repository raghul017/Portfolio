
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
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0.8, y: 50 },
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
      });

      // Enhanced parallax for background elements
      const parallaxElements = document.querySelectorAll('.bg-element');
      parallaxElements.forEach((el) => {
        gsap.to(el, {
          y: (i) => (i % 2 === 0 ? -100 : 100),
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            toggleActions: "play none none reverse"
          }
        });
      });
      
      // Floating shape animations
      const shapes = document.querySelectorAll('.bg-shape');
      shapes.forEach((shape, i) => {
        gsap.to(shape, {
          y: (i % 2 === 0) ? -100 : 100,
          x: (i % 3 === 0) ? -50 : 50,
          rotation: (i % 2 === 0) ? 90 : -90,
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        });
      });
      
      // Add scroll-triggered reveal animations for content blocks
      const revealBlocks = document.querySelectorAll('.reveal-on-scroll');
      revealBlocks.forEach((block, index) => {
        gsap.fromTo(
          block,
          { 
            opacity: 0, 
            y: 50 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              toggleActions: "play none none reverse"
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
        {/* Large floating background elements */}
        <div className="fixed inset-0 -z-10">
          <div className="bg-element-large top-0 left-10 border border-cream/5 rounded-full animate-float-slow"></div>
          <div className="bg-element-large bottom-0 right-10 border border-cream/5 rounded-sm animate-float-medium"></div>
          <div className="bg-element-medium top-1/3 left-1/4 w-[200px] h-[200px] border border-cream/5 animate-float"></div>
          <div className="bg-element-small top-2/3 right-1/3 w-[100px] h-[100px] bg-cream/5 animate-float-medium"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_70%)]"></div>
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
