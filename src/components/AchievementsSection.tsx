
import React from "react";
import { Award, Briefcase, Trophy } from "lucide-react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface Achievement {
  id: number;
  title: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Winner – IIT Patna Tech Fest",
    institution: "IIT Patna",
    description: "Secured first place for presenting an innovative solution during a national-level technology competition.",
    icon: <Trophy className="h-8 w-8 text-data-blue" />,
  },
  {
    id: 2,
    title: "Winner – Smart India Hackathon (SIH) Round 1",
    institution: "Smart India Hackathon",
    description: "Qualified for the next round of SIH by designing a high-impact tech solution in response to a real-world problem statement.",
    icon: <Award className="h-8 w-8 text-data-purple" />,
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    institution: "Futurense Technologies",
    description: "Successfully completed internship at Futurense Technologies, contributing to the 'This is US Pathway' program for data professionals.",
    icon: <Briefcase className="h-8 w-8 text-data-teal" />,
  }
];

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">
          Achievements & Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className="border-border hover:border-primary/20 transition-colors duration-300"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">
                  {achievement.icon}
                </div>
                <CardTitle>{achievement.title}</CardTitle>
                <CardDescription>{achievement.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
