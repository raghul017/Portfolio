
import React from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/50 py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold">Raghul R</h3>
            <p className="text-muted-foreground text-sm">
              Data & AI Engineering Professional
            </p>
          </motion.div>
          
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
        </div>
        
        <motion.div 
          className="border-t border-border mt-6 pt-6 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>© {new Date().getFullYear()} Raghul R. All rights reserved.</p>
        </motion.div>
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
    className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
    aria-label={label}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.a>
);

export default Footer;
