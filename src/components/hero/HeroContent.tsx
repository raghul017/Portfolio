
import React from "react";
import { motion } from "framer-motion";

interface HeroContentProps {
  name: string;
  title: string;
  description: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ name, title, description }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <>
      <motion.h2 
        className="text-lg font-medium text-primary mb-2 flex items-center gap-2"
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
        <span className="highlight-gradient-text">{name}</span>
      </motion.h1>
      
      <motion.h3 
        className="text-xl md:text-2xl font-medium text-foreground/90 mb-8"
        variants={item}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg"
        variants={item}
      >
        {description}
      </motion.p>
    </>
  );
};

export default HeroContent;
