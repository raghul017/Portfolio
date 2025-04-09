
import React, { useEffect, useRef } from "react";
import { 
  ArrowUpRight, 
  Github,
  Eye, 
  MessageSquare,
  CheckSquare,
  Briefcase,
  Circle,
  Triangle,
  Square
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
    icon: <Eye className="h-10 w-10 text-matt-black" />,
    technologies: ["Python", "YOLO", "OpenCV"],
    githubUrl: "https://github.com/raghul017"
  },
  {
    id: 2,
    title: "Sentiment Analysis on Social Media Posts",
    description: "Built an NLP model to classify sentiments in social media posts as positive, negative, or neutral. Employed text preprocessing, tokenization, and classification using Scikit-learn, Pandas, and NLTK.",
    icon: <MessageSquare className="h-10 w-10 text-matt-black" />,
    technologies: ["Python", "Scikit-learn", "NLTK", "NLP"]
  },
  {
    id: 3,
    title: "TaskFlow – Task Management App",
    description: "Created a full-stack web application to manage tasks with deadlines, tags, and status updates. Implemented user authentication, task sorting, and filtering functionalities.",
    icon: <CheckSquare className="h-10 w-10 text-matt-black" />,
    technologies: ["React", "Node.js", "Express.js", "MongoDB"]
  },
  {
    id: 4,
    title: "Futurense 'This is US Pathway' Project",
    description: "Contributed to performance analytics and reporting for a US placement-focused upskilling initiative. Supported evaluation of student progress and training impact using data visualization tools.",
    icon: <Briefcase className="h-10 w-10 text-matt-black" />,
    technologies: ["Python", "Excel", "Power BI"]
  }
];

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background animations
      gsap.utils.toArray('.project-bg-shape').forEach((shape: any, index) => {
        gsap.to(shape, {
          y: () => (index % 2 === 0 ? -90 : 90),
          x: () => (index % 3 === 0 ? -60 : 60),
          rotation: index % 2 === 0 ? 180 : -180,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });
      
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
      className="section bg-cream relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="project-bg-shape absolute top-20 left-10 w-48 h-48 border border-matt-black/10 rounded-full opacity-20"></div>
      <div className="project-bg-shape absolute bottom-40 right-20 w-72 h-72 border border-matt-black/10 opacity-20">
        <Triangle className="w-full h-full text-matt-black/5" />
      </div>
      <div className="project-bg-shape absolute top-40 right-1/4 w-32 h-32 opacity-10">
        <Square className="w-full h-full text-matt-black/10" strokeWidth={1} />
      </div>
      
      <div className="section-inner relative z-10">
        <div className="space-y-3 mb-16">
          <h2 className="projects-title text-4xl font-bold text-matt-black">Projects</h2>
          <div className="h-[2px] w-12 bg-matt-black"></div>
          <p className="text-matt-black/70 max-w-2xl">
            A collection of projects showcasing my skills in data analysis, machine learning, and web development.
          </p>
        </div>
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="project-card bg-white border border-matt-black/10 rounded-none p-6 text-matt-black hover:shadow-md">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-cream border border-matt-black/20 mb-3">
                    {project.icon}
                  </div>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-matt-black/60 hover:text-matt-black transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-matt-black">{project.title}</h3>
                <p className="text-matt-black/70 mb-6 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-cream hover:bg-matt-black hover:text-cream border-matt-black/20 text-matt-black">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {project.demoUrl && (
                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      className="gap-2 hover:bg-matt-black hover:text-cream group border-matt-black/20"
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
