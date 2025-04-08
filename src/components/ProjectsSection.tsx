
import React from "react";
import { 
  ArrowUpRight, 
  Github,
  Eye, 
  MessageSquare,
  CheckSquare,
  Briefcase
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "YOLO Object Detection",
    description: "Developed an object detection system using YOLOv5 to recognize and classify real-world objects in images and video streams. Leveraged OpenCV and Python for preprocessing and real-time deployment.",
    icon: <Eye className="h-10 w-10 text-primary" />,
    technologies: ["Python", "YOLO", "OpenCV"],
    githubUrl: "https://github.com/raghul06"
  },
  {
    id: 2,
    title: "Sentiment Analysis on Social Media Posts",
    description: "Built an NLP model to classify sentiments in social media posts as positive, negative, or neutral. Employed text preprocessing, tokenization, and classification using Scikit-learn, Pandas, and NLTK.",
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    technologies: ["Python", "Scikit-learn", "NLTK", "NLP"]
  },
  {
    id: 3,
    title: "TaskFlow – Task Management App",
    description: "Created a full-stack web application to manage tasks with deadlines, tags, and status updates. Implemented user authentication, task sorting, and filtering functionalities.",
    icon: <CheckSquare className="h-10 w-10 text-primary" />,
    technologies: ["React", "Node.js", "Express.js", "MongoDB"]
  },
  {
    id: 4,
    title: "Futurense 'This is US Pathway' Project",
    description: "Contributed to performance analytics and reporting for a US placement-focused upskilling initiative. Supported evaluation of student progress and training impact using data visualization tools.",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    technologies: ["Python", "Excel", "Power BI"]
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="section bg-secondary/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(60%_20%_at_50%_80%,rgba(59,130,246,0.1),rgba(0,0,0,0))]" />
      
      <div className="section-inner relative z-10">
        <div className="space-y-3 mb-16 reveal-on-scroll">
          <h2 className="text-4xl font-bold">Projects</h2>
          <div className="h-1 w-12 bg-primary rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl">
            A collection of projects showcasing my skills in data analysis, machine learning, and web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="project-card overflow-hidden flex flex-col h-full border-border/40 bg-secondary/10">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <motion.div 
                      className="p-4 bg-primary/5 rounded-xl mb-3"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.icon}
                    </motion.div>
                    {project.githubUrl && (
                      <motion.a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub repository"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Badge variant="outline" className="bg-secondary/30 hover:bg-primary/20 border-primary/20">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                {project.demoUrl && (
                  <CardFooter>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-full"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full gap-2 hover:bg-primary hover:text-primary-foreground group"
                        asChild
                      >
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noreferrer"
                        >
                          <span>View Project</span>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </motion.div>
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
