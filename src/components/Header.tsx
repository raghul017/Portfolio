
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight highlight-gradient-text">
              Raghul R
            </span>
            <span className="hidden sm:inline-block text-sm font-light">
              | Data & AI Engineering
            </span>
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        
        <div className="flex items-center gap-2">
          <HeaderIcon href="mailto:arraghul06@gmail.com" label="Email">
            <Mail className="h-4 w-4" />
          </HeaderIcon>
          <HeaderIcon href="https://linkedin.com/in/raghul-r-b373a3264" label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </HeaderIcon>
          <HeaderIcon href="https://github.com/raghul06" label="GitHub">
            <Github className="h-4 w-4" />
          </HeaderIcon>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-block"
          >
            <Button variant="outline" size="sm" className="gap-1 hover:bg-primary hover:text-primary-foreground">
              <FileText className="h-4 w-4" />
              <span>Resume</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <motion.a 
    href={href} 
    className="nav-link"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.a>
);

interface HeaderIconProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const HeaderIcon: React.FC<HeaderIconProps> = ({ href, label, children }) => (
  <motion.a 
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
    aria-label={label}
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full hover:bg-primary/20"
    >
      {children}
    </Button>
  </motion.a>
);

export default Header;
