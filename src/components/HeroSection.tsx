
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import ProfileImage from "./hero/ProfileImage";
import HeroContent from "./hero/HeroContent";
import CallToAction from "./hero/CallToAction";

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center pt-16 pb-24 overflow-hidden relative bg-matt-black"
    >
      {/* Grid background */}
      <div className="grid-bg"></div>
      
      {/* Section number */}
      <div className="section-number top-10 left-10">01</div>
      
      {/* Horizontal line decorations */}
      <div className="design-line horizontal-line absolute top-[15%] left-10"></div>
      <div className="design-line horizontal-line absolute bottom-[15%] right-10"></div>
      
      {/* Moving background elements */}
      <div className="moving-element square-element text-white absolute top-[20%] left-[10%]"></div>
      <div className="moving-element circle-element text-white absolute bottom-[30%] right-[15%]"></div>
      <div className="moving-element line-element text-white absolute top-[60%] left-[20%]"></div>
      <div className="moving-element dot-element text-white absolute top-[40%] right-[30%]"></div>
      
      {/* Content Section with Image and Text */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl z-10 gap-12">
        {/* Image Section */}
        <motion.div 
          className="md:w-2/5 w-full mb-8 md:mb-0"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <ProfileImage imageSrc="images/myimages2.jpeg" alt="Raghul A R - Data Analyst" />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="md:w-3/5 w-full"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <HeroContent 
            name="RAGHUL A. R."
            title="DATA ANALYST"
            description="With a focus on AI and data engineering, I'm passionate about creating innovative 
            data solutions and turning complex information into actionable insights."
          />
          
          <CallToAction item={item} />
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="h-6 w-6 text-cream" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
