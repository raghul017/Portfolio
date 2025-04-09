
import React, { useEffect, useRef } from "react";
import { 
  Code, 
  Database, 
  Brain, 
  Terminal, 
  Users,
  LineChart,
  Circle,
  Square,
  Triangle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6,
        delay: index * 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
        }
      }
    );
  }, [index]);

  return (
    <Card 
      ref={cardRef}
      className="border border-matt-black/20 bg-cream shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2 text-matt-black">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="skill-badge"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background shapes
      gsap.utils.toArray('.skills-bg-shape').forEach((shape: any, index) => {
        gsap.to(shape, {
          y: () => (index % 2 === 0 ? -70 : 70),
          x: () => (index % 3 === 0 ? -40 : 40),
          rotation: index % 2 === 0 ? 100 : -100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });

      // Animate section title
      gsap.fromTo(
        '.skills-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className="py-20 bg-gradient-to-b from-matt-black to-matt-black/90 text-cream relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="skills-bg-shape absolute top-20 right-10 w-40 h-40 border border-cream/10 rounded-full opacity-20"></div>
      <div className="skills-bg-shape absolute bottom-40 left-20 w-60 h-60 border border-cream/10 opacity-20">
        <Triangle className="w-full h-full text-cream/5" />
      </div>
      <div className="skills-bg-shape absolute top-40 left-1/4 w-32 h-32 opacity-10">
        <Square className="w-full h-full text-cream/10" strokeWidth={1} />
      </div>
      
      <div className="container">
        <h2 className="skills-title text-3xl font-bold mb-8 text-cream">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="Programming Languages" 
            icon={<Code className="h-5 w-5 text-data-blue" />}
            skills={["Python", "JavaScript", "SQL"]}
            index={0}
          />
          
          <SkillCategory 
            title="Libraries & Frameworks" 
            icon={<Brain className="h-5 w-5 text-data-indigo" />}
            skills={["Pandas", "NumPy", "Scikit-learn", "NLTK", "OpenCV", "Matplotlib", "Seaborn", "TensorFlow"]}
            index={1}
          />
          
          <SkillCategory 
            title="Web Technologies" 
            icon={<Code className="h-5 w-5 text-data-teal" />}
            skills={["React", "Node.js", "Express.js", "MongoDB", "HTML/CSS"]}
            index={2}
          />
          
          <SkillCategory 
            title="Tools & Platforms" 
            icon={<Terminal className="h-5 w-5 text-data-emerald" />}
            skills={["Git", "VS Code", "Jupyter Notebook", "Postman", "Excel"]}
            index={3}
          />
          
          <SkillCategory 
            title="Database & Data Handling" 
            icon={<Database className="h-5 w-5 text-data-purple" />}
            skills={["MySQL", "MongoDB", "REST APIs"]}
            index={4}
          />
          
          <SkillCategory 
            title="Data Analytics & Visualization" 
            icon={<LineChart className="h-5 w-5 text-data-blue" />}
            skills={["Power BI", "Matplotlib", "Seaborn"]}
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
