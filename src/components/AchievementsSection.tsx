
import React from "react";
import { Award, Briefcase, Trophy, GraduationCap } from "lucide-react";
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
  link?: string;
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
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    institution: "Harkirat Singh",
    description: "Completed comprehensive full stack web development certification program.",
    icon: <GraduationCap className="h-8 w-8 text-data-orange" />,
    link: "https://app.100xdevs.com/certificate/verify/8O3N5V9C"
  },
  {
    id: 5,
    title: "The Complete Python Developer",
    institution: "Udemy",
    description: "Mastered Python development through a comprehensive certification program.",
    icon: <GraduationCap className="h-8 w-8 text-data-green" />,
    link: "https://ude.my/UC-55d7a7db-106f-48be-9927-70eb85e06e84"
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
                {achievement.link && (
                  <a 
                    href={achievement.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline mt-2 inline-block"
                  >
                    View Certificate
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
