
import React from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <footer className="py-12 border-t border-border/40 bg-gradient-to-b from-background to-secondary/20">
      <div className="container">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
        >
          <motion.div 
            className="mb-8 md:mb-0"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold">Raghul R</h3>
            <p className="text-muted-foreground text-sm mt-1">
              AI & Data Engineering Professional
            </p>
          </motion.div>
          
          <motion.div 
            className="flex gap-6"
            variants={itemVariants}
          >
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
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground"
          variants={itemVariants}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            © {new Date().getFullYear()} Raghul R. All rights reserved.
          </motion.p>
          
          <motion.div
            className="flex gap-6 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="text-border/60">•</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </motion.div>
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
    className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10 border border-transparent hover:border-primary/30"
    aria-label={label}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.a>
);

export default Footer;
