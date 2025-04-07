
import React from "react";
import { 
  ArrowUpRight, 
  Github,
  Eye, 
  Cpu,
  MessageSquare,
  CheckSquare,
  BarChart
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
    title: "YOLO Object Detection Model",
    description: "Developed an advanced object detection system using the YOLO algorithm with OpenCV to process and annotate real-time video frames. Achieved high detection accuracy for multiple objects simultaneously.",
    icon: <Eye className="h-10 w-10 text-data-blue" />,
    technologies: ["Python", "YOLO", "OpenCV"],
    githubUrl: "https://github.com/raghul06"
  },
  {
    id: 2,
    title: "Sentiment Analysis of Social Media Posts",
    description: "Built an LSTM-based model to analyze sentiment polarity in social media text data. Preprocessed noisy textual data using NLP techniques and trained the model to identify positive, negative, and neutral sentiments.",
    icon: <MessageSquare className="h-10 w-10 text-data-purple" />,
    technologies: ["Python", "TensorFlow", "LSTM", "NLP"]
  },
  {
    id: 3,
    title: "Task Flow Application",
    description: "Developed a lightweight task management tool that allows users to add, update, and delete daily tasks. Created a user-friendly interface for seamless productivity and efficient task data storage.",
    icon: <CheckSquare className="h-10 w-10 text-data-teal" />,
    technologies: ["Python", "Streamlit", "SQLite"]
  },
  {
    id: 4,
    title: "Futurense-USP Analytics",
    description: "Conducted deep data analysis on Futurense USPs, leveraging data visualization tools to present insights. Created dashboards for strategic decision-making and analyzed trends for business strategies.",
    icon: <BarChart className="h-10 w-10 text-data-emerald" />,
    technologies: ["Python", "Excel", "Power BI"]
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <motion.section 
      id="projects" 
      className="py-24 bg-accent/10 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(60%_20%_at_50%_80%,rgba(59,130,246,0.1),rgba(0,0,0,0))]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-16"
        >
          <h2 className="text-3xl font-bold">Notable Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A collection of projects showcasing my skills in data engineering, machine learning and analytics.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="project-card overflow-hidden flex flex-col h-full border-border/40 bg-secondary/20">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <motion.div 
                      className="p-4 bg-primary/5 rounded-xl mb-3"
                      whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
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
                        <Badge variant="outline" className="bg-secondary/30 hover:bg-primary/20">
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
    </motion.section>
  );
};

export default ProjectsSection;
