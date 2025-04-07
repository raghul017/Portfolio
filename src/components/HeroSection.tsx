
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-16 pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,rgba(59,130,246,0.06),rgba(255,255,255,0))]" />
      
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-primary mb-2">
            👋 Hey there, I'm
          </h2>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="highlight-gradient-text">Raghul R</span>
          </h1>
          
          <h3 className="text-xl md:text-2xl font-medium text-foreground/80 mb-6">
            Aspiring <span className="font-semibold">AI & Data Engineering Professional</span> passionate about building data-driven solutions that drive impact.
          </h3>
          
          <p className="text-muted-foreground max-w-2xl mb-10">
            With a strong foundation in data pipelines, model development, and machine learning operations, 
            I love solving real-world problems with innovative technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="gap-2">
              <span>View My Work</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
