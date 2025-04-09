
import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/context/ThemeContext";

const Index: React.FC = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Welcome to my portfolio!",
      description: "Feel free to explore my projects and reach out.",
      duration: 5000,
    });
    
    // Enhanced intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          
          // Add staggered animation to children with .stagger class
          const staggerElements = entry.target.querySelectorAll('.stagger');
          if (staggerElements.length) {
            staggerElements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, i * 120); // 120ms delay between each element
            });
          }
        }
      });
    }, { 
      threshold: 0.15, 
      rootMargin: '-50px 0px'
    });
    
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [toast]);

  return (
    <ThemeProvider>
      <AnimatePresence>
        <div className="min-h-screen bg-background overflow-x-hidden">
          <Header />
          <motion.main 
            initial="hidden" 
            animate="visible" 
            className="relative"
          >
            {/* Enhanced background elements for royal theme */}
            <div className="fixed inset-0 -z-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]"></div>
              <div className="absolute top-1/2 left-3/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/2 w-[800px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <AchievementsSection />
            <ContactSection />
          </motion.main>
          <Footer />
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Index;
