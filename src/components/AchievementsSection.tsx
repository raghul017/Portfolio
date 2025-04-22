
import React, { useEffect, useRef, useState } from "react";
import { Award, Briefcase, Trophy, GraduationCap, Star, Medal, Zap, PenTool, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Achievement {
  id: number;
  title: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  date?: string;
  color?: string;
  image?: string;
}

// Separate achievements and certifications
const achievements: Achievement[] = [
  {
    id: 1,
    title: "Winner – IIT Patna Tech Fest",
    institution: "IIT Patna",
    description: "Secured first place for presenting an innovative solution during a national-level technology competition.",
    icon: <Trophy className="h-8 w-8 text-cream" />,
    date: "March 2023",
    color: "bg-gradient-to-r from-amber-400 to-amber-600",
    image: "/images/achievements/tech-fest.jpg"
  },
  {
    id: 2,
    title: "Winner – Smart India Hackathon (SIH) Round 1",
    institution: "Smart India Hackathon",
    description: "Qualified for the next round of SIH by designing a high-impact tech solution in response to a real-world problem statement.",
    icon: <Medal className="h-8 w-8 text-cream" />,
    date: "October 2023",
    color: "bg-gradient-to-r from-blue-500 to-indigo-600",
    image: "/images/achievements/hackathon.jpg"
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    institution: "Futurense Technologies",
    description: "Successfully completed internship at Futurense Technologies, contributing to the 'This is US Pathway' program for data professionals.",
    icon: <Briefcase className="h-8 w-8 text-cream" />,
    date: "June - August 2024",
    color: "bg-gradient-to-r from-teal-500 to-teal-600",
    image: "/images/achievements/internship.jpg"
  },
];

const certifications: Achievement[] = [
  {
    id: 4,
    title: "Full Stack Web Development",
    institution: "Harkirat Singh",
    description: "Completed comprehensive full stack web development certification program covering frontend, backend, databases, and deployment.",
    icon: <PenTool className="h-8 w-8 text-cream" />,
    link: "https://app.100xdevs.com/certificate/verify/8O3N5V9C",
    date: "January 2024",
    color: "bg-gradient-to-r from-purple-600 to-purple-800",
    image: "/images/certifications/web-dev.jpg"
  },
  {
    id: 5,
    title: "The Complete Python Developer",
    institution: "Udemy",
    description: "Mastered Python development through a comprehensive certification program covering data structures, algorithms, and practical applications.",
    icon: <Zap className="h-8 w-8 text-cream" />,
    link: "https://ude.my/UC-55d7a7db-106f-48be-9927-70eb85e06e84",
    date: "August 2023",
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
    image: "/images/certifications/python-dev.jpg"
  }
];

// Achievement card component with improved design
const AchievementCard: React.FC<{ item: Achievement; isAchievement?: boolean; className?: string; index: number }> = ({ 
  item, 
  isAchievement = true,
  className,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`relative overflow-hidden rounded-lg ${className || ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div 
        className={`absolute inset-0 ${item.color || "bg-gradient-to-r from-gray-700 to-gray-900"}`}
      ></div>
      
      {/* Background image with overlay */}
      {item.image && (
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 p-6 text-white">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
            {item.icon}
          </div>
          {item.date && (
            <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full">
              {item.date}
            </span>
          )}
        </div>
        
        <div>
          <motion.h3 
            className="text-xl font-bold mb-2 flex items-center gap-2"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isAchievement && <Sparkles className="w-5 h-5 text-yellow-300" />}
            {item.title}
          </motion.h3>
          
          <p className="text-sm font-medium text-white/80 mb-3">
            {item.institution}
          </p>
          
          <p className="text-white/70 text-sm mb-4">
            {item.description}
          </p>
          
          {item.link && (
            <motion.a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 mt-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-sm transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Certificate
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const AchievementsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="achievements" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-cream"
    >
      {/* Grid background */}
      <div className="grid-bg"></div>
      
      {/* Section number */}
      <div className="section-number bottom-10 left-10">04</div>
      
      {/* Line decorations */}
      <div className="design-line horizontal-line absolute top-[15%] right-10"></div>
      <div className="design-line vertical-line absolute bottom-10 right-[15%]"></div>
      
      {/* Moving background elements */}
      <div className="moving-element square-element text-black absolute top-[20%] left-[20%]"></div>
      <div className="moving-element circle-element text-black absolute bottom-[25%] right-[10%]"></div>
      <div className="moving-element line-element text-black absolute top-[50%] left-[10%]"></div>
      <div className="moving-element dot-element text-black absolute top-[35%] right-[25%]"></div>
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-4 mb-12"
        >
          <div className="w-16 h-16 bg-matt-black rounded-full flex items-center justify-center flex-shrink-0">
            <Award className="w-8 h-8 text-cream" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-matt-black inline-flex items-center">
              Achievements & Certifications
              <div className="h-[3px] w-24 bg-matt-black/30 ml-6"></div>
            </h2>
          </div>
        </motion.div>
        
        {/* Achievements Section */}
        <div className="mb-20">
          <motion.div 
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-matt-black text-cream mr-4 text-lg font-bold">01</div>
            <h3 className="text-2xl font-bold mr-6 text-matt-black">Achievements</h3>
            <div className="section-divider h-[2px] bg-matt-black/20 flex-grow"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard 
                key={achievement.id} 
                item={achievement}
                className="h-full" 
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Certifications Section */}
        <div>
          <motion.div 
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-matt-black text-cream mr-4 text-lg font-bold">02</div>
            <h3 className="text-2xl font-bold mr-6 text-matt-black">Certifications</h3>
            <div className="section-divider h-[2px] bg-matt-black/20 flex-grow"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((certification, index) => (
              <AchievementCard 
                key={certification.id} 
                item={certification} 
                isAchievement={false}
                className="h-full"
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Animated decorative element */}
        <div className="absolute bottom-10 right-10 opacity-10 w-64 h-64 pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-full h-full"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#000000" d="M39.9,-65.7C52.6,-58.9,64.6,-50.4,71.9,-38.5C79.3,-26.5,82,-11.1,80.1,3.4C78.2,17.9,71.6,31.3,62.1,41.6C52.6,51.9,40.1,59,26.8,63.9C13.5,68.7,-0.7,71.3,-13.6,68.3C-26.5,65.3,-38.2,56.7,-48.5,46.3C-58.7,35.9,-67.5,23.6,-72.2,9.1C-76.9,-5.4,-77.4,-22.1,-70.4,-34.6C-63.5,-47.1,-49.1,-55.5,-35.7,-61.9C-22.3,-68.4,-9.9,-72.8,2.2,-76.2C14.3,-79.7,27.2,-72.4,39.9,-65.7Z" transform="translate(100 100)" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
