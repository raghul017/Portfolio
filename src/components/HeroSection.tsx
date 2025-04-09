
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Circle, Square, Triangle, X } from "lucide-react";
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

  const floatingElements = [
    { component: Circle, top: "10%", left: "5%", size: "h-8 w-8", opacity: 0.2, delay: 0 },
    { component: Square, top: "15%", right: "8%", size: "h-6 w-6", opacity: 0.15, delay: 1 },
    { component: Triangle, bottom: "20%", left: "15%", size: "h-10 w-10", opacity: 0.2, delay: 2 },
    { component: X, bottom: "30%", right: "12%", size: "h-4 w-4", opacity: 0.25, delay: 3 },
    { component: Circle, top: "40%", left: "15%", size: "h-3 w-3", opacity: 0.1, delay: 4 }
  ];
  
  return (
    <section className="section min-h-screen flex flex-col justify-center items-center text-center pt-16 pb-24 overflow-hidden relative">
      {/* Floating Background Elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className="floating-element absolute"
          style={{
            top: el.top || "auto",
            left: el.left || "auto", 
            right: el.right || "auto",
            bottom: el.bottom || "auto",
            opacity: el.opacity
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: el.opacity }}
          transition={{ delay: el.delay }}
        >
          {React.createElement(el.component, { className: `${el.size} text-primary` })}
        </motion.div>
      ))}

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-secondary to-transparent opacity-30"></div>

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
            name="Raghul A. R."
            title="Data Analyst"
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
        <ChevronDown className="h-6 w-6 text-primary animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
