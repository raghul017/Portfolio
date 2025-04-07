
import React from "react";
import { Award, Briefcase, Sparkles } from "lucide-react";
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
    title: "Futurense Fellowship",
    institution: "Futurense",
    description: "Specialized program in Data Engineering, focusing on building scalable data pipelines and analytics solutions.",
    icon: <Award className="h-8 w-8 text-data-blue" />,
  },
  {
    id: 2,
    title: "AI & ML Specialization",
    institution: "Learning Institution",
    description: "Comprehensive training in artificial intelligence and machine learning techniques for real-world applications.",
    icon: <Briefcase className="h-8 w-8 text-data-purple" />,
  },
  {
    id: 3,
    title: "Public Speaking Champion",
    institution: "College Fest",
    description: "Recognized for exceptional communication skills and the ability to present complex technical concepts effectively.",
    icon: <Sparkles className="h-8 w-8 text-data-teal" />,
  }
];

const AchievementsSection: React.FC = () => {
  return (
    <section className="py-20">
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
