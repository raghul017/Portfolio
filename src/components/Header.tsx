
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              Raghul R
            </span>
            <span className="hidden sm:inline-block text-sm font-light">
              | Data & AI Engineering
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-2">
          <a href="mailto:arraghul06@gmail.com" aria-label="Email">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
            >
              <Mail className="h-4 w-4" />
            </Button>
          </a>
          <a 
            href="https://linkedin.com/in/raghul-r-b373a3264" 
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </a>
          <a 
            href="https://github.com/raghul06" 
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
            >
              <Github className="h-4 w-4" />
            </Button>
          </a>
          <a 
            href="#resume" 
            className="hidden sm:inline-block"
          >
            <Button variant="outline" size="sm" className="gap-1">
              <FileText className="h-4 w-4" />
              <span>Resume</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
