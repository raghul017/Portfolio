
import React from "react";
import { 
  Code, 
  Database, 
  Brain, 
  Terminal, 
  Users,
  LineChart 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <Card className="border border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="skill-badge">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="Programming Languages" 
            icon={<Code className="h-5 w-5 text-data-blue" />}
            skills={["Python", "JavaScript", "SQL"]}
          />
          
          <SkillCategory 
            title="Libraries & Frameworks" 
            icon={<Brain className="h-5 w-5 text-data-indigo" />}
            skills={["Pandas", "NumPy", "Scikit-learn", "NLTK", "OpenCV", "Matplotlib", "Seaborn", "TensorFlow"]}
          />
          
          <SkillCategory 
            title="Web Technologies" 
            icon={<Code className="h-5 w-5 text-data-teal" />}
            skills={["React", "Node.js", "Express.js", "MongoDB", "HTML/CSS"]}
          />
          
          <SkillCategory 
            title="Tools & Platforms" 
            icon={<Terminal className="h-5 w-5 text-data-emerald" />}
            skills={["Git", "VS Code", "Jupyter Notebook", "Postman", "Excel"]}
          />
          
          <SkillCategory 
            title="Database & Data Handling" 
            icon={<Database className="h-5 w-5 text-data-purple" />}
            skills={["MySQL", "MongoDB", "REST APIs"]}
          />
          
          <SkillCategory 
            title="Data Analytics & Visualization" 
            icon={<LineChart className="h-5 w-5 text-data-blue" />}
            skills={["Power BI", "Matplotlib", "Seaborn"]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
