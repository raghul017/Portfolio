
import React from "react";
import { motion } from "framer-motion";

interface ProfileImageProps {
  imageSrc: string;
  alt: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imageSrc, alt }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div variants={item} className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
      {/* Border frame */}
      <div className="absolute inset-0 border border-border/40 transform translate-x-4 translate-y-4"></div>
      
      {/* Image container */}
      <div className="relative overflow-hidden w-full h-full border border-border/40">
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-60"></div>
      </div>
      
      {/* Animated accent */}
      <motion.div 
        className="absolute top-4 left-4 w-16 h-16 border-t border-l border-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      ></motion.div>
    </motion.div>
  );
};

export default ProfileImage;
