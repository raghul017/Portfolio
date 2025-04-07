
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
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
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-16 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_25%_at_50%_50%,rgba(59,130,246,0.12),rgba(0,0,0,0))]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -z-10" />
      </div>
      
      <motion.div 
        className="container max-w-4xl z-10"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.h2 
          className="text-lg font-medium text-primary mb-2 flex items-center gap-2"
          variants={item}
        >
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary/80"></span>
          </span>
          Hey there, I'm
        </motion.h2>
        
        <motion.h1 
          className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter"
          variants={item}
        >
          <span className="highlight-gradient-text">Raghul R</span>
        </motion.h1>
        
        <motion.h3 
          className="text-xl md:text-2xl font-medium text-foreground/90 mb-8"
          variants={item}
        >
          Aspiring <span className="font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary/30">AI & Data Engineering Professional</span>
        </motion.h3>
        
        <motion.p 
          className="text-muted-foreground max-w-2xl mb-12 text-lg"
          variants={item}
        >
          With a strong foundation in data pipelines, model development, and machine learning operations, 
          I love solving real-world problems with innovative technologies.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-5"
          variants={item}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="gap-2 hover-glow group relative overflow-hidden px-8 py-6 text-base"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div 
                className="absolute inset-0 bg-primary/80 z-0" 
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="hover-glow px-8 py-6 text-base">Contact Me</Button>
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
