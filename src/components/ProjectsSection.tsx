
import React, { useEffect, useRef } from "react";
import { 
  ArrowUpRight, 
  Github,
  Eye, 
  MessageSquare,
  CheckSquare,
  Briefcase
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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
    githubUrl: "https://github.com/raghul017"
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
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo('.projects-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
      
      // Project cards staggered animation
      gsap.fromTo(
        projectsRef.current?.querySelectorAll('.project-card'),
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section bg-secondary/20 relative overflow-hidden"
    >
      <div className="section-inner relative z-10">
        <div className="space-y-3 mb-16">
          <h2 className="projects-title text-4xl font-bold">Projects</h2>
          <div className="h-[2px] w-12 bg-primary"></div>
          <p className="text-muted-foreground max-w-2xl">
            A collection of projects showcasing my skills in data analysis, machine learning, and web development.
          </p>
        </div>
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-background/50 border border-border mb-3">
                    {project.icon}
                  </div>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-background/50 hover:bg-primary hover:text-primary-foreground border-border">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {project.demoUrl && (
                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      className="gap-2 hover:bg-primary hover:text-primary-foreground group border-border"
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
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
