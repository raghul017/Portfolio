
import React, { useEffect, useRef } from "react";
import { Award, Briefcase, Trophy, GraduationCap } from "lucide-react";

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
    icon: <Trophy className="h-8 w-8 text-black" />,
  },
  {
    id: 2,
    title: "Winner – Smart India Hackathon (SIH) Round 1",
    institution: "Smart India Hackathon",
    description: "Qualified for the next round of SIH by designing a high-impact tech solution in response to a real-world problem statement.",
    icon: <Award className="h-8 w-8 text-black" />,
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    institution: "Futurense Technologies",
    description: "Successfully completed internship at Futurense Technologies, contributing to the 'This is US Pathway' program for data professionals.",
    icon: <Briefcase className="h-8 w-8 text-black" />,
  },
];

const certifications: Achievement[] = [
  {
    id: 4,
    title: "Full Stack Web Development",
    institution: "Harkirat Singh",
    description: "Completed comprehensive full stack web development certification program.",
    icon: <GraduationCap className="h-8 w-8 text-black " />,
    link: "https://app.100xdevs.com/certificate/verify/8O3N5V9C"
  },
  {
    id: 5,
    title: "The Complete Python Developer",
    institution: "Udemy",
    description: "Mastered Python development through a comprehensive certification program.",
    icon: <GraduationCap className="h-8 w-8 text-black" />,
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
      <div className="p-4 border border-border/40 rounded-sm bg-white/5">
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
  const achievementsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const achievementCards = document.querySelectorAll('.achievement-card');
    const certificationCards = document.querySelectorAll('.certification-card');

    [...achievementCards, ...certificationCards].forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-32 relative overflow-hidden bg-cream">
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
        <h2 className="section-title text-4xl font-bold mb-20">Achievements & Certifications</h2>
        
        {/* Achievements Section */}
        <div className="mb-20">
          <div className="flex items-center mb-12">
            <span className="text-lg font-mono font-bold mr-4 text-primary">01</span>
            <h3 className="text-2xl font-bold mr-6 text-matt-black">Achievements</h3>
            <div className="section-divider h-[2px] bg-primary/20 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {achievements.map((achievement) => (
              <AchievementCard 
                key={achievement.id} 
                item={achievement}
                className="hover:shadow-lg transition-shadow duration-300" 
              />
            ))}
          </div>
        </div>
        
        {/* Certifications Section */}
        <div>
          <div className="flex items-center mb-12">
            <span className="text-lg font-mono font-bold mr-4 text-primary">02</span>
            <h3 className="text-2xl font-bold mr-6 text-matt-black">Certifications</h3>
            <div className="section-divider h-[2px] bg-primary/20 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((certification) => (
              <AchievementCard 
                key={certification.id} 
                item={certification} 
                isAchievement={false}
                className="hover:shadow-lg transition-shadow duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
