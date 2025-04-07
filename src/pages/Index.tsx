
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  const { toast } = useToast();

  React.useEffect(() => {
    toast({
      title: "Welcome to my portfolio!",
      description: "Feel free to explore my projects and reach out.",
      duration: 5000,
    });
  }, [toast]);

  // Animation variants for page sections
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <motion.main initial="hidden" animate="visible" variants={sectionVariants}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Index;
