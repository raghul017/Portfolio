
import React, { useEffect, useRef } from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer sections
      gsap.fromTo(
        '.footer-section',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0,
          stagger: 0.2,
          duration: 0.5,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          }
        }
      );
      
      // Animate divider line
      gsap.fromTo(
        '.footer-divider',
        { width: 0 },
        { 
          width: '100%',
          duration: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          }
        }
      );
    }, footerRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <footer 
      ref={footerRef} 
      className="py-12 border-t border-cream/10 bg-matt-black text-cream"
    >
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="footer-section">
            <h3 className="text-2xl font-bold mb-4">Raghul A. R.</h3>
            <p className="text-cream/70 max-w-md">
              Data Analyst and AI enthusiast focusing on creating innovative solutions through data engineering and machine learning.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-cream/70 hover:text-cream transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <SocialIcon href="mailto:arraghul06@gmail.com" label="Email">
                <Mail className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/raghul-ar05" label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://github.com/raghul017" label="GitHub">
                <Github className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="#about" label="Resume">
                <FileText className="h-5 w-5" />
              </SocialIcon>
            </div>
            <div className="mt-4">
              <p className="text-sm text-cream/70">
                <span className="font-medium">Email:</span> arraghul06@gmail.com
              </p>
              <p className="text-sm text-cream/70">
                <span className="font-medium">Phone:</span> +91-6379331551
              </p>
              <p className="text-sm text-cream/70">
                <span className="font-medium">Location:</span> Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-divider pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-cream/60">
            © {currentYear} Raghul A. R. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors">
              Privacy Policy
            </a>
            <span className="text-cream/40">•</span>
            <a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors">
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
    className="text-cream/70 hover:text-cream bg-cream/10 p-3 rounded-full hover:bg-cream/20 transition-colors"
    aria-label={label}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.a>
);

export default Footer;
