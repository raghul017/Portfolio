
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calculator, ChartBar, Code, FileCode, GraduationCap, Circle, Triangle, Square } from "lucide-react";

const AboutSection: React.FC = () => {
  // No animations needed

  return (
    <section id="about" className="py-20 bg-cream relative overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg"></div>
      
      {/* Section number */}
      <div className="section-number bottom-10 right-10">02</div>
      
      {/* Line decorations */}
      <div className="design-line vertical-line absolute top-10 right-[15%]"></div>
      <div className="design-line horizontal-line absolute bottom-[20%] left-10"></div>
      
      {/* Moving background elements */}
      <div className="moving-element circle-element text-black absolute top-[15%] left-[15%]"></div>
      <div className="moving-element square-element text-black absolute bottom-[20%] right-[10%]"></div>
      <div className="moving-element line-element text-black absolute top-[50%] right-[25%]"></div>
      <div className="moving-element dot-element text-black absolute top-[30%] left-[30%]"></div>
      
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
          
          <div className="rounded-lg shadow-md p-8 border-2 border-matt-black/10 bg-white text-matt-black">
            <h3 className="text-2xl font-bold mb-6 text-matt-black border-b-2 border-primary/20 pb-2">
              Education & Details
            </h3>
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-matt-black">B.Tech. in Computer Science and Engineering</h4>
              </div>
              <div className="ml-14 space-y-1">
                <p className="text-matt-black/80 text-lg">AI & Data Engineering Specialization</p>
                <p className="text-matt-black/70">Lovely Professional University | 2022 - 2026 (Expected)</p>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-matt-black">Data Analyst Intern</h4>
              </div>
              <div className="ml-14 space-y-1">
                <p className="text-matt-black/80 text-lg">Futurense Technologies, Bangalore</p>
                <p className="text-matt-black/70">June 2024 - August 2024</p>
              </div>
            </div>
            
            <div className="h-px bg-matt-black/10 my-8" />
            
            <h3 className="text-2xl font-bold mb-6 text-matt-black border-b-2 border-primary/20 pb-2">
              Contact Information
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <span className="font-semibold w-24 text-matt-black/80">Email:</span>
                <a 
                  href="mailto:arraghul06@gmail.com" 
                  className="text-black hover:text-primary/0 transition-colors duration-200"
                >
                  arraghul06@gmail.com
                </a>
              </li>
              
              <li className="flex items-center gap-3 group">
                <span className="font-semibold w-24 text-matt-black/80">Phone:</span>
                <a 
                  href="tel:+916379331551" 
                  className="text-black hover:text-primary/80 transition-colors duration-200"
                >
                  +91-6379331551
                </a>
              </li>
              
              <li className="flex items-center gap-3 group">
                <span className="font-semibold w-24 text-matt-black/80">Location:</span>
                <span className="text-matt-black">Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
