
import React from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-8 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Raghul R</h3>
            <p className="text-muted-foreground text-sm">
              Data & AI Engineering Professional
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="mailto:arraghul06@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/raghul-r-b373a3264"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/raghul06"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#resume"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Resume"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Raghul R. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
