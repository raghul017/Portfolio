
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calculator, ChartBar, Code, FileCode, GraduationCap, Circle, Triangle, Square } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background shapes
      gsap.utils.toArray('.about-bg-shape').forEach((shape: any, index) => {
        gsap.to(shape, {
          y: () => (index % 2 === 0 ? -80 : 80),
          x: () => (index % 3 === 0 ? -50 : 50),
          rotation: index % 2 === 0 ? 120 : -120,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });

      // Content animations
      gsap.fromTo(
        '.about-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-cream relative overflow-hidden">
      {/* Background elements */}
      <div className="about-bg-shape absolute top-20 left-10 w-32 h-32 border border-matt-black/10 rounded-full opacity-20"></div>
      <div className="about-bg-shape absolute bottom-40 right-20 w-48 h-48 border border-matt-black/10 opacity-20">
        <Triangle className="w-full h-full text-matt-black/5" />
      </div>
      <div className="about-bg-shape absolute top-40 right-1/4 w-24 h-24 opacity-10">
        <Square className="w-full h-full text-matt-black/10" strokeWidth={1} />
      </div>
      
      <div className="container about-content">
        <h2 className="text-3xl font-bold mb-8 text-matt-black">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-matt-black">
              Data Analyst with a Passion for AI & Data Engineering
            </h3>
            
            <p className="text-matt-black/70">
              I'm currently pursuing my B.Tech. in Computer Science and Engineering with a specialization in AI & Data Engineering 
              at Lovely Professional University, expected to graduate in May 2026. My academic journey has equipped me with 
              skills in data analysis, machine learning, and software development.
            </p>
            
            <p className="text-matt-black/70">
              With hands-on experience as a Data Analyst Intern at Futurense Technologies, I've worked on real-world data 
              projects, building dashboards and pipelines to track student performance and training outcomes. I'm passionate 
              about applying AI and data engineering concepts to solve real-world problems.
            </p>
            
            <div className="pt-4">
              <h4 className="text-sm font-medium uppercase text-matt-black/60 mb-3">
                Current Focus Areas
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-data-blue/20 shadow-sm bg-cream/70 hover:bg-white transition-colors duration-300">
                  <CardContent className="flex items-center gap-3 p-4">
                    <ChartBar className="h-5 w-5 text-data-blue" />
                    <span className="text-sm text-matt-black">Data Analytics</span>
                  </CardContent>
                </Card>
                
                <Card className="border-data-purple/20 shadow-sm bg-cream/70 hover:bg-white transition-colors duration-300">
                  <CardContent className="flex items-center gap-3 p-4">
                    <Calculator className="h-5 w-5 text-data-purple" />
                    <span className="text-sm text-matt-black">Machine Learning</span>
                  </CardContent>
                </Card>
                
                <Card className="border-data-teal/20 shadow-sm bg-cream/70 hover:bg-white transition-colors duration-300">
                  <CardContent className="flex items-center gap-3 p-4">
                    <FileCode className="h-5 w-5 text-data-teal" />
                    <span className="text-sm text-matt-black">Natural Language Processing</span>
                  </CardContent>
                </Card>
                
                <Card className="border-data-emerald/20 shadow-sm bg-cream/70 hover:bg-white transition-colors duration-300">
                  <CardContent className="flex items-center gap-3 p-4">
                    <Code className="h-5 w-5 text-data-emerald" />
                    <span className="text-sm text-matt-black">Full Stack Development</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg shadow-sm p-6 border bg-white text-matt-black">
            <h3 className="text-xl font-medium mb-4">
              Education & Details
            </h3>
            
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-matt-black/10 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-matt-black" />
                </div>
                <h4 className="text-lg font-medium">B.Tech. in Computer Science and Engineering</h4>
              </div>
              <p className="text-matt-black/70 ml-12">AI & Data Engineering Specialization</p>
              <p className="text-matt-black/70 ml-12">Lovely Professional University | 2022 - 2026 (Expected)</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-matt-black/10 p-2 rounded-full">
                  <Briefcase className="h-5 w-5 text-matt-black" />
                </div>
                <h4 className="text-lg font-medium">Data Analyst Intern</h4>
              </div>
              <p className="text-matt-black/70 ml-12">Futurense Technologies, Bangalore</p>
              <p className="text-matt-black/70 ml-12">June 2024 - August 2024</p>
            </div>
            
            <div className="section-divider" />
            
            <h3 className="text-xl font-medium mb-4">
              Contact Information
            </h3>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="font-medium w-20">Email:</span>
                <a 
                  href="mailto:arraghul06@gmail.com" 
                  className="text-matt-black hover:underline"
                >
                  arraghul06@gmail.com
                </a>
              </li>
              
              <li className="flex items-center gap-2">
                <span className="font-medium w-20">Phone:</span>
                <a 
                  href="tel:+916379331551" 
                  className="text-matt-black/80"
                >
                  +91-6379331551
                </a>
              </li>
              
              <li className="flex items-center gap-2">
                <span className="font-medium w-20">Location:</span>
                <span className="text-matt-black/80">Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
