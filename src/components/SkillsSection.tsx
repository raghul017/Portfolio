
import React, { useRef, useEffect, useState, useMemo } from "react";
import { 
  Code, 
  Database, 
  Brain, 
  Terminal, 
  LineChart,
  Globe,
  BarChart3,
  Sparkles,
  ScrollText,
  LucideIcon,
  Layers,
  Command,
  Cpu,
  Server,
  Diamond,
  GraduationCap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Define skill category with type information for icon
interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: { name: string; level?: number }[];
  description?: string;
  color: string;
}

// Define variants for animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const skillCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4 }
  },
  hover: { 
    scale: 1.03,
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 }
  }
};

// Custom skill card component for a beautiful design
const SkillCard: React.FC<{ 
  category: SkillCategory; 
  index: number;
}> = ({ category, index }) => {
  const Icon = category.icon;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      variants={skillCardVariants}
      whileHover="hover"
      initial="hidden"
      animate="visible"
      className={`relative overflow-hidden rounded-xl shadow-lg backdrop-blur-sm bg-white/10 border border-white/20`}
      style={{ 
        backgroundColor: "hsl(var(--matt-black) / 0.8)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 -mt-8 -mr-8">
        <motion.div 
          animate={{ 
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? [1, 1.1, 1] : 1
          }}
          transition={{ 
            rotate: { duration: 20, ease: "linear" },
            scale: { duration: 1, ease: "easeInOut" }
          }}
        >
          <Icon size={128} />
        </motion.div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div 
            className={`p-3 rounded-xl shadow-inner flex items-center justify-center`}
            style={{ backgroundColor: `${category.color}30`, color: category.color }}
          >
            <Icon size={22} strokeWidth={2.5} />
          </div>
          <h3 className="text-xl font-bold text-white">{category.title}</h3>
        </div>
        
        {category.description && (
          <p className="text-white/70 text-sm mb-4">{category.description}</p>
        )}
        
        <div className="flex flex-wrap gap-3 mt-6">
  {category.skills.map((skill, idx) => (
    <motion.div
      key={idx}
      whileHover={{ scale: 1.08, boxShadow: `0 0 12px 2px ${category.color}70` }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="px-4 py-2 rounded-full font-semibold text-sm border border-matt-black/10 bg-cream text-matt-black cursor-pointer transition-all"
      style={{}}
    >

      {skill.name}
    </motion.div>
  ))}
</div>
      </div>
    </motion.div>
  );
};

// Define the skill categories with beautiful color schemes
const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    icon: Code,
    color: "#3b82f6", // bright blue
    description: "Primary programming languages for data analysis and web development",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    id: "data-science",
    title: "Data Science",
    icon: Brain,
    color: "#8b5cf6", // purple
    description: "Libraries and frameworks for data analysis and machine learning",
    skills: [
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 90 },
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "NLTK", level: 78 }
    ]
  },
  {
    id: "web-tech",
    title: "Web Technologies",
    icon: Layers,
    color: "#10b981", // teal
    description: "Full-stack web development technologies and frameworks",
    skills: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 78 },
      { name: "HTML/CSS", level: 88 }
    ]
  },
  {
    id: "tools",
    title: "Dev Tools",
    icon: Command,
    color: "#f59e0b", // amber
    description: "Development tools and environment setup",
    skills: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Jupyter Notebook", level: 95 },
      { name: "Docker", level: 70 },
      { name: "Postman", level: 80 }
    ]
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    icon: Database,
    color: "#ec4899", // pink
    description: "Database and data pipeline technologies",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 78 },
      { name: "ETL Pipelines", level: 75 },
      { name: "Data Warehousing", level: 70 }
    ]
  },
  {
    id: "data-viz",
    title: "Data Visualization",
    icon: BarChart3,
    color: "#06b6d4", // cyan
    description: "Tools and libraries for data visualization and dashboards",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Matplotlib", level: 90 },
      { name: "Seaborn", level: 85 },
      { name: "Tableau", level: 75 },
      { name: "D3.js", level: 70 }
    ]
  },
  {
    id: "ml-ai",
    title: "AI & ML",
    icon: Cpu,
    color: "#f43f5e", // rose
    description: "Machine learning and AI techniques and applications",
    skills: [
      { name: "Supervised Learning", level: 85 },
      { name: "Unsupervised Learning", level: 80 },
      { name: "Deep Learning", level: 75 },
      { name: "NLP", level: 78 },
      { name: "Computer Vision", level: 73 }
    ]
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    icon: GraduationCap,
    color: "#0ea5e9", // sky blue
    description: "Professional and interpersonal skills",
    skills: [
      { name: "Problem Solving", level: 92 },
      { name: "Communication", level: 90 },
      { name: "Teamwork", level: 88 },
      { name: "Time Management", level: 85 },
      { name: "Adaptability", level: 90 }
    ]
  }
];

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section
      id="skills" 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-matt-black to-matt-black/90 text-cream relative overflow-hidden"
    >
      {/* Cosmic particles background effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: Math.random() * 0.5 + 0.1 
            }}
            animate={{ 
              opacity: [null, 0.8, 0.1],
              scale: [null, 1.5, 1]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>
      
      {/* Section number */}
      <div className="section-number top-10 right-10">03</div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text inline-block mb-3">
            <h2 className="text-5xl font-bold">Skills & Expertise</h2>
          </div>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities and proficiency levels in various domains.
          </p>
        </motion.div>

        {/* Skill Categories Filter */}
        <motion.div 
          className="flex justify-center mb-12 flex-wrap gap-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            variants={itemVariants}
            onClick={() => setSelectedSkill(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!selectedSkill ? 'bg-white text-matt-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            All Skills
          </motion.button>
          
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => setSelectedSkill(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedSkill === category.id ? 'text-matt-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
              style={{ 
                backgroundColor: selectedSkill === category.id ? category.color : ''
              }}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {(selectedSkill ? 
            skillCategories.filter(cat => cat.id === selectedSkill) : 
            skillCategories
          ).map((category, index) => (
            <SkillCard 
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </motion.div>

        {/* Visual flourish */}
        <div className="relative h-32 mt-20 overflow-hidden">
          <motion.div 
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
            animate={{ 
              y: [0, 30, 0],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="text-center text-white/30 text-sm font-mono mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Continuously learning and expanding my skills
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
