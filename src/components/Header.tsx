
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <motion.span 
              className="text-xl font-bold tracking-tight highlight-gradient-text"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Raghul A. R.
            </motion.span>
            <motion.span 
              className="hidden sm:inline-block text-sm font-light text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              | Data Analyst
            </motion.span>
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['about', 'skills', 'projects', 'achievements', 'contact'].map((item, index) => (
            <NavLink key={item} href={`#${item}`} delay={index * 0.1}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <HeaderIcon href="mailto:arraghul06@gmail.com" label="Email" delay={0.1}>
            <Mail className="h-4 w-4" />
          </HeaderIcon>
          <HeaderIcon href="https://linkedin.com/in/raghul-ar" label="LinkedIn" delay={0.2}>
            <Linkedin className="h-4 w-4" />
          </HeaderIcon>
          <HeaderIcon href="https://github.com/raghul06" label="GitHub" delay={0.3}>
            <Github className="h-4 w-4" />
          </HeaderIcon>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="outline" size="sm" className="gap-2 hover:bg-primary hover:text-primary-foreground">
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
  delay?: number;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, delay = 0 }) => (
  <motion.a 
    href={href} 
    className="nav-link"
    whileHover={{ scale: 1.1 }}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.a>
);

interface HeaderIconProps {
  href: string;
  label: string;
  children: React.ReactNode;
  delay?: number;
}

const HeaderIcon: React.FC<HeaderIconProps> = ({ href, label, children, delay = 0 }) => (
  <motion.a 
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
    aria-label={label}
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, type: "spring", stiffness: 400, damping: 10 }}
  >
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full hover:bg-primary/20 focus:bg-primary/20 transition-colors"
    >
      {children}
    </Button>
  </motion.a>
);

export default Header;
