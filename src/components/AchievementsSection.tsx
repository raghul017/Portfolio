
import React from "react";
import { Award, Briefcase, Trophy, GraduationCap } from "lucide-react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    icon: <Trophy className="h-8 w-8 text-amber-500" />,
  },
  {
    id: 2,
    title: "Winner – Smart India Hackathon (SIH) Round 1",
    institution: "Smart India Hackathon",
    description: "Qualified for the next round of SIH by designing a high-impact tech solution in response to a real-world problem statement.",
    icon: <Award className="h-8 w-8 text-indigo-500" />,
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    institution: "Futurense Technologies",
    description: "Successfully completed internship at Futurense Technologies, contributing to the 'This is US Pathway' program for data professionals.",
    icon: <Briefcase className="h-8 w-8 text-teal-500" />,
  },
];

const certifications: Achievement[] = [
  {
    id: 4,
    title: "Full Stack Web Development",
    institution: "Harkirat Singh",
    description: "Completed comprehensive full stack web development certification program.",
    icon: <GraduationCap className="h-8 w-8 text-rose-500" />,
    link: "https://app.100xdevs.com/certificate/verify/8O3N5V9C"
  },
  {
    id: 5,
    title: "The Complete Python Developer",
    institution: "Udemy",
    description: "Mastered Python development through a comprehensive certification program.",
    icon: <GraduationCap className="h-8 w-8 text-emerald-500" />,
    link: "https://ude.my/UC-55d7a7db-106f-48be-9927-70eb85e06e84"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Achievement card component
const AchievementCard: React.FC<{ item: Achievement }> = ({ item }) => (
  <motion.div variants={itemVariants}>
    <Card className="border-border hover:border-primary/20 transition-colors duration-300 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0 opacity-50 rounded-xl"></div>
      <CardHeader className="pb-2 relative z-10">
        <div className="mb-4 p-3 bg-background/80 backdrop-blur-sm rounded-full w-fit relative">
          {item.icon}
        </div>
        <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          {item.title}
        </CardTitle>
        <CardDescription className="font-medium">{item.institution}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="text-muted-foreground">
          {item.description}
        </p>
        {item.link && (
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm transition-all duration-300"
          >
            View Certificate
          </a>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container reveal-on-scroll">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Achievements Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <h2 className="text-3xl font-bold">Achievements</h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
            
            <ScrollArea className="w-full pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                  <AchievementCard key={achievement.id} item={achievement} />
                ))}
              </div>
            </ScrollArea>
          </div>
          
          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <h2 className="text-3xl font-bold">Certifications</h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
            
            <ScrollArea className="w-full pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((certification) => (
                  <AchievementCard key={certification.id} item={certification} />
                ))}
              </div>
            </ScrollArea>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
