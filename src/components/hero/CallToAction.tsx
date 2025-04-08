
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

interface CallToActionProps {
  item: any; // Animation variant
}

const CallToAction: React.FC<CallToActionProps> = ({ item }) => {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row justify-start gap-5 mt-10"
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
          className="hover-glow px-8 py-6 text-base gap-2"
          asChild
        >
          <a href="#contact">
            <span>Contact Me</span>
          </a>
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          variant="ghost" 
          className="hover-glow px-8 py-6 text-base gap-2"
          asChild
        >
          <a href="#about">
            <Download className="h-4 w-4 mr-1" />
            <span>Resume</span>
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default CallToAction;
