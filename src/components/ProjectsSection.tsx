
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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="project-card overflow-hidden flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-primary/5 rounded-lg mb-3">
                    {project.icon}
                  </div>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary"
                      aria-label="GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {project.demoUrl && (
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full gap-2"
                    asChild
                  >
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
