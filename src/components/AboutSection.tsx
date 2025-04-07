
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Cpu, Database, Code } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">
              Data Engineering & AI Enthusiast
            </h3>
            
            <p className="text-muted-foreground">
              I'm passionate about leveraging data and AI technologies to solve real-world problems. My journey 
              in the tech world has equipped me with skills in building data pipelines, developing machine learning 
              models, and implementing scalable analytics solutions.
            </p>
            
            <p className="text-muted-foreground">
              Currently focused on advancing my expertise in <span className="font-medium">Data Engineering</span>, 
              <span className="font-medium"> AI Model Deployments</span>, and <span className="font-medium">Scalable Analytics</span>.
            </p>
            
            <div className="pt-4">
              <h4 className="text-sm font-medium uppercase text-muted-foreground mb-3">
                Current Focus Areas
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-data-blue/20 bg-transparent">
                  <CardContent className="flex items-center gap-3 p-4">
                    <Database className="h-5 w-5 text-data-blue" />
                    <span className="text-sm">Data Engineering</span>
                  </CardContent>
                </Card>
                
                <Card className="border-data-purple/20 bg-transparent">
                  <CardContent className="flex items-center gap-3 p-4">
                    <Cpu className="h-5 w-5 text-data-purple" />
                    <span className="text-sm">AI Model Deployments</span>
                  </CardContent>
                </Card>
                
                <Card className="border-data-teal/20 bg-transparent">
                  <CardContent className="flex items-center gap-3 p-4">
                    <Code className="h-5 w-5 text-data-teal" />
                    <span className="text-sm">ML Operations</span>
                  </CardContent>
                </Card>
                
                <Card className="border-data-emerald/20 bg-transparent">
                  <CardContent className="flex items-center gap-3 p-4">
                    <Briefcase className="h-5 w-5 text-data-emerald" />
                    <span className="text-sm">Scalable Analytics</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border">
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
                <span className="font-medium w-20">LinkedIn:</span>
                <a 
                  href="https://linkedin.com/in/raghul-r-b373a3264" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  raghul-r-b373a3264
                </a>
              </li>
              
              <li className="flex items-center gap-2">
                <span className="font-medium w-20">GitHub:</span>
                <a 
                  href="https://github.com/raghul06" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  raghul06
                </a>
              </li>
            </ul>
            
            <div className="section-divider" />
            
            <h3 className="text-xl font-medium mb-4">
              Resume
            </h3>
            
            <div id="resume" className="flex items-center justify-between">
              <span>Download my complete resume</span>
              <a 
                href="#" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
