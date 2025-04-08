
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ParticleBackground from "./hero/ParticleBackground";
import ProfileImage from "./hero/ProfileImage";
import HeroContent from "./hero/HeroContent";
import CallToAction from "./hero/CallToAction";

const HeroSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };
  
  return (
    <section className="section min-h-screen flex flex-col justify-center items-center text-center pt-16 pb-24 overflow-hidden relative">
      {/* Particles Background */}
      <ParticleBackground />

      {/* Content Section with Image and Text */}
      <div className="flex flex-col md:flex-row items-center justify-between section-inner max-w-6xl z-10 gap-8">
        {/* Image Section */}
        <motion.div 
          className="md:w-2/5 w-full mb-8 md:mb-0"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <ProfileImage imageSrc="/placeholder.svg" alt="Profile" />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="md:w-3/5 w-full text-left"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <HeroContent 
            name="Raghul R"
            title="AI & Data Engineering Professional"
            description="With a strong foundation in data pipelines, model development, and machine learning operations, I love solving real-world problems with innovative technologies."
          />
          
          <CallToAction item={item} />
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="h-6 w-6 text-primary animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
