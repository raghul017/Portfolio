
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
    <motion.div variants={item} className="relative overflow-hidden rounded-2xl w-64 h-64 md:w-80 md:h-80 mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/70 to-indigo-600/70 rounded-2xl"></div>
      <img 
        src={imageSrc} 
        alt={alt} 
        className="w-full h-full object-cover mix-blend-overlay rounded-2xl" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
    </motion.div>
  );
};

export default ProfileImage;
