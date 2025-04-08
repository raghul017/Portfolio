
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calculator, ChartBar, Code, FileCode, GraduationCap } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">
              Data Analyst with a Passion for AI & Data Engineering
            </h3>
            
            <p className="text-muted-foreground">
              I'm currently pursuing my B.Tech. in Computer Science and Engineering with a specialization in AI & Data Engineering 
              at Lovely Professional University, expected to graduate in May 2026. My academic journey has equipped me with 
              skills in data analysis, machine learning, and software development.
            </p>
            
            <p className="text-muted-foreground">
              With hands-on experience as a Data Analyst Intern at Futurense Technologies, I've worked on real-world data 
              projects, building dashboards and pipelines to track student performance and training outcomes. I'm passionate 
              about applying AI and data engineering concepts to solve real-world problems.
            </p>
            
            <div className="pt-4">
              <h4 className="text-sm font-medium uppercase text-muted-foreground mb-3">
                Current Focus Areas
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-data-blue/20 shadow-sm">
                  <CardContent className="flex items-center gap-3 p-4">
                    <ChartBar className="h-5 w-5 text-data-blue" />
                    <span className="text-sm">Data Analytics</span>
                  </CardContent>
                </Card>
                
                <Card className="border-data-purple/20 shadow-sm">
                  <CardContent className="flex items-center gap-3 p-4">
                    <Calculator className="h-5 w-5 text-data-purple" />
                    <span className="text-sm">Machine Learning</span>
                  </CardContent>
                </Card>
                
                <Card className="border-data-teal/20 shadow-sm">
                  <CardContent className="flex items-center gap-3 p-4">
                    <FileCode className="h-5 w-5 text-data-teal" />
                    <span className="text-sm">Natural Language Processing</span>
                  </CardContent>
                </Card>
                
                <Card className="border-data-emerald/20 shadow-sm">
                  <CardContent className="flex items-center gap-3 p-4">
                    <Code className="h-5 w-5 text-data-emerald" />
                    <span className="text-sm">Full Stack Development</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm p-6 border">
            <h3 className="text-xl font-medium mb-4">
              Education & Details
            </h3>
            
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-lg font-medium">B.Tech. in Computer Science and Engineering</h4>
              </div>
              <p className="text-muted-foreground ml-12">AI & Data Engineering Specialization</p>
              <p className="text-muted-foreground ml-12">Lovely Professional University | 2022 - 2026 (Expected)</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-lg font-medium">Data Analyst Intern</h4>
              </div>
              <p className="text-muted-foreground ml-12">Futurense Technologies, Bangalore</p>
              <p className="text-muted-foreground ml-12">June 2024 - August 2024</p>
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
                  className="text-primary hover:underline"
                >
                  arraghul06@gmail.com
                </a>
              </li>
              
              <li className="flex items-center gap-2">
                <span className="font-medium w-20">Phone:</span>
                <a 
                  href="tel:+916379331551" 
                  className="text-foreground/80"
                >
                  +91-6379331551
                </a>
              </li>
              
              <li className="flex items-center gap-2">
                <span className="font-medium w-20">Location:</span>
                <span className="text-foreground/80">Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
