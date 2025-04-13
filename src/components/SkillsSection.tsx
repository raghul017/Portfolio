
import React from "react";
import { 
  Code, 
  Database, 
  Brain, 
  Terminal, 
  Users,
  LineChart,
  Globe,
  Circle,
  Square,
  Triangle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills, index }) => {
  // No refs needed

  // No animations needed

  return (
    <Card
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
  // No refs needed

  // No animations needed

  return (
    <section
      id="skills" 
      className="py-32 bg-gradient-to-b from-matt-black to-matt-black/90 text-cream relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="grid-bg"></div>
      
      {/* Section number */}
      <div className="section-number top-10 right-10">03</div>
      
      {/* Line decorations */}
      <div className="design-line vertical-line absolute top-10 left-[15%]"></div>
      <div className="design-line horizontal-line absolute top-[20%] right-10"></div>
      
      {/* Moving background elements */}
      <div className="moving-element square-element text-white absolute top-[25%] right-[10%]"></div>
      <div className="moving-element circle-element text-white absolute bottom-[15%] left-[15%]"></div>
      <div className="moving-element line-element text-white absolute top-[40%] left-[25%]"></div>
      <div className="moving-element dot-element text-white absolute top-[60%] right-[20%]"></div>
      
      <div className="container">
        <h2 className="skills-title text-3xl font-bold mb-8 text-cream">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory 
            title="Programming Languages" 
            icon={<Code className="h-5 w-5 text-black" />}
            skills={["Python", "JavaScript", "SQL"]}
            index={0}
          />
          
          <SkillCategory 
            title="Libraries & Frameworks" 
            icon={<Brain className="h-5 w-5 text-black" />}
            skills={["Pandas", "NumPy", "Scikit-learn", "NLTK", "OpenCV", "Matplotlib", "Seaborn", "TensorFlow"]}
            index={1}
          />
          
          <SkillCategory 
            title="Web Technologies" 
            icon={<Code className="h-5 w-5 text-black" />}
            skills={["React", "Node.js", "Express.js", "MongoDB", "HTML/CSS"]}
            index={2}
          />
          
          <SkillCategory 
            title="Tools & Platforms" 
            icon={<Terminal className="h-5 w-5 text-black" />}
            skills={["Git", "VS Code", "Jupyter Notebook", "Postman", "Excel"]}
            index={3}
          />
          
          <SkillCategory 
            title="Database & Data Handling" 
            icon={<Database className="h-5 w-5 text-black" />}
            skills={["MySQL", "MongoDB", "REST APIs"]}
            index={4}
          />
          
          <SkillCategory 
            title="Data Analytics & Visualization" 
            icon={<LineChart className="h-5 w-5 text-black" />}
            skills={["Power BI", "Matplotlib", "Seaborn"]}
            index={5}
          />
          
          <SkillCategory 
            title="Languages" 
            icon={<Globe className="h-5 w-5 text-black" />}
            skills={["English (Fluent)", "Tamil (Native)", "Hindi (Intermediate)"]}
            index={6}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
