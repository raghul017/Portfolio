
import React, { useEffect, useRef } from "react";
import { Award, Briefcase, Trophy, GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface Achievement {
  id: number;
  title: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

// Separate achievements and certifications
const achievements: Achievement[] = [
  {
    id: 1,
    title: "Winner – IIT Patna Tech Fest",
    institution: "IIT Patna",
    description: "Secured first place for presenting an innovative solution during a national-level technology competition.",
    icon: <Trophy className="h-8 w-8 text-primary" />,
  },
  {
    id: 2,
    title: "Winner – Smart India Hackathon (SIH) Round 1",
    institution: "Smart India Hackathon",
    description: "Qualified for the next round of SIH by designing a high-impact tech solution in response to a real-world problem statement.",
    icon: <Award className="h-8 w-8 text-primary" />,
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    institution: "Futurense Technologies",
    description: "Successfully completed internship at Futurense Technologies, contributing to the 'This is US Pathway' program for data professionals.",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
  },
];

const certifications: Achievement[] = [
  {
    id: 4,
    title: "Full Stack Web Development",
    institution: "Harkirat Singh",
    description: "Completed comprehensive full stack web development certification program.",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    link: "https://app.100xdevs.com/certificate/verify/8O3N5V9C"
  },
  {
    id: 5,
    title: "The Complete Python Developer",
    institution: "Udemy",
    description: "Mastered Python development through a comprehensive certification program.",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    link: "https://ude.my/UC-55d7a7db-106f-48be-9927-70eb85e06e84"
  }
];

// Achievement card component with improved design
// Update the interface to include className as an optional prop
const AchievementCard: React.FC<{ item: Achievement; isAchievement?: boolean; className?: string }> = ({ 
  item, 
  isAchievement = true,
  className
}) => (
  <div className={`${isAchievement ? "achievement-card" : "certification-card"} ${className || ""}`}>
    <div className="flex items-start gap-6 relative z-10">
      <div className="p-4 border border-border/40 rounded-sm">
        {item.icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-1">
          {item.title}
        </h3>
        <p className="text-sm font-medium text-muted-foreground mb-3">{item.institution}</p>
        <p className="text-muted-foreground text-sm">
          {item.description}
        </p>
        {item.link && (
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 border border-border/40 hover:bg-primary/10 text-sm transition-all duration-300"
          >
            View Certificate
          </a>
        )}
      </div>
    </div>
  </div>
);

const AchievementsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo('.section-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
      
      // Section dividers animation
      gsap.fromTo('.section-divider', 
        { width: 0 },
        { 
          width: '100%', 
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
      
      // Achievements staggered animation
      gsap.fromTo(
        achievementsRef.current?.querySelectorAll('.achievement-card'),
        { opacity: 0, x: -30 },
        { 
          opacity: 1, 
          x: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: achievementsRef.current,
            start: "top 80%",
          }
        }
      );
      
      // Certifications staggered animation
      gsap.fromTo(
        certificationsRef.current?.querySelectorAll('.certification-card'),
        { opacity: 0, x: 30 },
        { 
          opacity: 1, 
          x: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: certificationsRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="achievements" className="py-32 relative overflow-hidden bg-cream">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="section-title text-4xl font-bold mb-20">Achievements & Certifications</h2>
        
        {/* Achievements Section */}
        <div className="mb-20">
          <div className="flex items-center mb-12">
            <span className="text-lg font-mono font-bold mr-4">01</span>
            <h3 className="text-2xl font-bold mr-6">Achievements</h3>
            <div className="section-divider h-[1px] bg-border flex-grow"></div>
          </div>
          
          <div ref={achievementsRef} className="grid grid-cols-1 gap-6 stagger-container">
            {achievements.map((achievement) => (
              <AchievementCard 
                key={achievement.id} 
                item={achievement}
                className="hover-lift hover-glow" 
              />
            ))}
          </div>
        </div>
        
        {/* Certifications Section */}
        <div>
          <div className="flex items-center mb-12">
            <span className="text-lg font-mono font-bold mr-4">02</span>
            <h3 className="text-2xl font-bold mr-6">Certifications</h3>
            <div className="section-divider h-[1px] bg-border flex-grow"></div>
          </div>
          
          <div ref={certificationsRef} className="grid grid-cols-1 gap-6 stagger-container">
            {certifications.map((certification) => (
              <AchievementCard 
                key={certification.id} 
                item={certification} 
                isAchievement={false}
                className="hover-lift hover-glow"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
