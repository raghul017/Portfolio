
import React from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border bg-gradient-to-b from-background to-secondary/40">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="reveal-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Raghul R</h3>
            <p className="text-muted-foreground max-w-md">
              AI & Data Engineering Professional focused on delivering impactful solutions through innovative technologies.
            </p>
          </div>
          
          <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <SocialIcon href="mailto:arraghul06@gmail.com" label="Email">
                <Mail className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com/in/raghul-r-b373a3264" label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://github.com/raghul06" label="GitHub">
                <Github className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="#resume" label="Resume">
                <FileText className="h-5 w-5" />
              </SocialIcon>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Email:</span> arraghul06@gmail.com
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Phone:</span> +91-6379331551
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Raghul R. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span className="text-border/60">•</span>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, label, children }) => (
  <motion.a 
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
    className="text-muted-foreground hover:text-primary bg-secondary p-3 rounded-full hover:bg-primary/10 transition-colors"
    aria-label={label}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.a>
);

export default Footer;
