
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Circle, Square, Triangle, X, Star, Plus, Hash } from "lucide-react";
import ProfileImage from "./hero/ProfileImage";
import HeroContent from "./hero/HeroContent";
import CallToAction from "./hero/CallToAction";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const floatingElements = [
    { component: Circle, top: "10%", left: "5%", size: "h-8 w-8", opacity: 0.2, delay: 0 },
    { component: Square, top: "15%", right: "8%", size: "h-6 w-6", opacity: 0.15, delay: 1 },
    { component: Triangle, bottom: "20%", left: "15%", size: "h-10 w-10", opacity: 0.2, delay: 2 },
    { component: X, bottom: "30%", right: "12%", size: "h-4 w-4", opacity: 0.25, delay: 3 },
    { component: Star, top: "40%", left: "15%", size: "h-5 w-5", opacity: 0.1, delay: 4 },
    { component: Plus, top: "25%", right: "25%", size: "h-7 w-7", opacity: 0.2, delay: 5 },
    { component: Circle, bottom: "15%", right: "30%", size: "h-9 w-9", opacity: 0.15, delay: 6 },
    { component: Hash, top: "60%", left: "8%", size: "h-6 w-6", opacity: 0.2, delay: 7 },
    { component: X, top: "70%", right: "5%", size: "h-4 w-4", opacity: 0.1, delay: 8 }
  ];
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for floating elements
      floatingElements.forEach((_, index) => {
        const el = document.querySelector(`.floating-element-${index}`);
        if (el) {
          gsap.to(el, {
            y: (i) => Math.sin(i * 0.5) * 100,
            x: (i) => Math.cos(i * 0.5) * 50,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              toggleActions: "play none none reverse"
            }
          });
        }
      });

      // Parallax for background shapes
      gsap.utils.toArray('.bg-shape').forEach((shape: any) => {
        gsap.to(shape, {
          y: () => -100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="section min-h-screen flex flex-col justify-center items-center text-center pt-16 pb-24 overflow-hidden relative bg-matt-black"
    >
      {/* Larger floating background shapes */}
      <div className="bg-shapes">
        <div className="bg-shape bg-shape-1 animate-float-slow"></div>
        <div className="bg-shape bg-shape-2 animate-float-medium"></div>
        <div className="bg-shape bg-shape-3 animate-float"></div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className={`floating-element floating-element-${index} absolute`}
          style={{
            top: el.top || "auto",
            left: el.left || "auto", 
            right: el.right || "auto",
            bottom: el.bottom || "auto",
            opacity: el.opacity
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: el.opacity }}
          transition={{ delay: el.delay }}
        >
          {React.createElement(el.component, { className: `${el.size} text-cream` })}
        </motion.div>
      ))}

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-secondary to-transparent opacity-30"></div>

      {/* Content Section with Image and Text */}
      <div className="flex flex-col md:flex-row items-center justify-between section-inner max-w-6xl z-10 gap-8">
        {/* Image Section */}
        <motion.div 
          className="md:w-2/5 w-full mb-8 md:mb-0"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <ProfileImage imageSrc="/placeholder.svg" alt="Profile" />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="md:w-3/5 w-full text-left"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <HeroContent 
            name="Raghul A. R."
            title="Data Analyst"
            description="With a focus on AI and data engineering, I'm passionate about creating innovative 
            data solutions and turning complex information into actionable insights."
          />
          
          <CallToAction item={item} />
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="h-6 w-6 text-cream animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
