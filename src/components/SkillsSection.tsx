
import React from "react";
import { 
  Code, 
  Database, 
  Brain, 
  Terminal, 
  Users 
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
            skills={["Python", "Java", "C", "SQL"]}
          />
          
          <SkillCategory 
            title="Data Engineering" 
            icon={<Database className="h-5 w-5 text-data-purple" />}
            skills={["SQL", "MySQL", "Apache Kafka", "Power BI", "Tableau"]}
          />
          
          <SkillCategory 
            title="AI/ML" 
            icon={<Brain className="h-5 w-5 text-data-indigo" />}
            skills={["TensorFlow", "Keras", "OpenCV", "LSTM", "YOLO"]}
          />
          
          <SkillCategory 
            title="Tools & Frameworks" 
            icon={<Terminal className="h-5 w-5 text-data-teal" />}
            skills={["Docker", "Git", "Microsoft Excel", "NLP"]}
          />
          
          <SkillCategory 
            title="Soft Skills" 
            icon={<Users className="h-5 w-5 text-data-emerald" />}
            skills={["Leadership", "Team Collaboration", "Public Speaking", "Presentation Skills"]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
