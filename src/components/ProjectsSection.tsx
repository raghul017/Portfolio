
import React, { useEffect, useRef, useState } from "react";
import { 
  ArrowUpRight, 
  Github,
  Eye, 
  MessageSquare,
  CheckSquare,
  Briefcase,
  Circle,
  Triangle,
  Square,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);



const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));

  const categories = ["all", ...Array.from(new Set(projects.flatMap(p => p.technologies)))].slice(0, 6);
  
  // Get featured projects (max 2)
  const featuredProjects = projects.filter(p => p.featured).slice(0, 2);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background animations
      gsap.utils.toArray<HTMLElement>('.project-bg-shape').forEach((shape, index) => {
        gsap.to(shape, {
          y: () => (index % 2 === 0 ? -60 : 60),
          x: () => (index % 3 === 0 ? -40 : 40),
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
  }, [activeFilter]); // Re-run animations when filter changes

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-cream relative overflow-hidden"
    >
      {/* Section number */}
      <div className="section-number bottom-10 left-10">03</div>
      
      {/* Background elements */}
      <div className="project-bg-shape absolute top-20 left-10 w-48 h-48 border-matt-black/10 rounded-full opacity-20"></div>
      <div className="project-bg-shape absolute bottom-40 right-20 w-72 h-72 border-matt-black/10 opacity-20"></div>
      <div className="project-bg-shape absolute top-40 right-1/4 w-32 h-32 opacity-10"></div>
      
      {/* Line decorations */}
      <div className="design-line horizontal-line absolute top-[10%] right-10"></div>
      <div className="design-line vertical-line absolute bottom-[20%] left-[20%]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-3 mb-16">
          <h2 className="projects-title text-4xl font-bold text-matt-black">Projects</h2>
          <div className="h-[2px] w-12 bg-matt-black"></div>
          <p className="text-matt-black/70 max-w-2xl">
            A collection of projects showcasing my skills in data analysis, machine learning, and web development.
          </p>
        </div>
        
        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-matt-black inline-flex items-center">
              <span className="mr-2">Featured Work</span>
              <div className="h-[1px] w-12 bg-matt-black/50"></div>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  className="featured-project-card relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[16/9] overflow-hidden bg-matt-black/5">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-matt-black/80 via-matt-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white w-full">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white/10 hover:bg-white/20 p-2 rounded"
                          >
                            <Github className="h-5 w-5 text-white" />
                          </a>
                        )}
                        
                        {project.demoUrl && (
                          <a 
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white/10 hover:bg-white/20 p-2 rounded"
                          >
                            <ExternalLink className="h-5 w-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Projects Filter */}
        <div className="flex flex-wrap gap-3 mb-8 items-center">
          <span className="text-matt-black/70 text-sm mr-2">Filter by:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                activeFilter === category 
                  ? 'bg-matt-black text-cream' 
                  : 'bg-white/80 text-matt-black hover:bg-matt-black/10'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* All Projects Grid */}
        <motion.div 
          ref={projectsRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card bg-cream border border-matt-black/10 overflow-hidden group shadow-md transition-all duration-300"
              variants={item}
            >
              <div className="h-48 overflow-hidden relative">
                {project.featured && (
                  <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-matt-black text-cream shadow-lg animate-pulse">
                    Featured
                  </span>
                )}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700 rounded-xl"
                  style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.20)' }}
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold mb-2 text-matt-black">
                    {project.title}
                  </h3>
                  <div className="bg-cream p-2 rounded-full border border-matt-black/10">
                    {project.icon}
                  </div>
                </div>
                
                <p className="text-matt-black/70 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold bg-cream border border-matt-black/20 text-matt-black hover:bg-matt-black hover:text-cream transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3 mt-4">
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
                  
                  {project.demoUrl && (
                    <Button 
                      variant="outline" 
                      className="gap-2 hover:bg-matt-black hover:text-cream group border-matt-black/20 ml-auto"
                      asChild
                    >
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        <span>View Project</span>
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
