
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

const Index: React.FC = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Welcome to my portfolio!",
      description: "Feel free to explore my projects and reach out.",
      duration: 5000,
    });
  }, [toast]);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-background overflow-hidden">
        <Header />
        <motion.main 
          initial="hidden" 
          animate="visible" 
          className="relative"
        >
          {/* Background elements */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)]"></div>
            <div className="absolute top-1/2 left-3/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/2 w-[800px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
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
  );
};

export default Index;
