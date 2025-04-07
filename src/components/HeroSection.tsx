
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="section min-h-screen flex flex-col justify-center items-center text-center pt-16 pb-24 overflow-hidden">
      <motion.div 
        className="section-inner max-w-4xl z-10"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.h2 
          className="text-lg font-medium text-primary mb-2 flex items-center justify-center gap-2"
          variants={item}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary/80"></span>
          </span>
          Hello, I'm
        </motion.h2>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
          variants={item}
        >
          <span className="highlight-gradient-text">Raghul R</span>
        </motion.h1>
        
        <motion.h3 
          className="text-xl md:text-2xl font-medium text-foreground/90 mb-8"
          variants={item}
        >
          AI & Data Engineering Professional
        </motion.h3>
        
        <motion.p 
          className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg"
          variants={item}
        >
          With a strong foundation in data pipelines, model development, and machine learning operations, 
          I love solving real-world problems with innovative technologies.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-5"
          variants={item}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="gap-2 hover-glow group relative overflow-hidden px-8 py-6 text-base"
              asChild
            >
              <a href="#projects">
                <span className="relative z-10">My Projects</span>
                <motion.div 
                  className="absolute inset-0 bg-primary/90 z-0" 
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="relative"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-4 w-4 ml-1" />
                </motion.span>
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              className="hover-glow px-8 py-6 text-base"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      
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
