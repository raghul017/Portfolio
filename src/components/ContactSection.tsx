
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Circle, Triangle, Square } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background animations
      gsap.utils.toArray('.contact-bg-shape').forEach((shape: any, index) => {
        gsap.to(shape, {
          y: () => (index % 2 === 0 ? -60 : 60),
          x: () => (index % 3 === 0 ? -40 : 40),
          rotation: index % 2 === 0 ? 120 : -120,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });

      // Content animations
      gsap.fromTo(
        '.contact-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
      
      // Form field animations
      const formFields = document.querySelectorAll('.form-field');
      gsap.fromTo(
        formFields,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          scrollTrigger: {
            trigger: '.contact-form',
            start: "top 80%",
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-matt-black relative overflow-hidden">
      {/* Background elements */}
      <div className="contact-bg-shape absolute top-20 right-10 w-36 h-36 border border-cream/10 rounded-full opacity-20"></div>
      <div className="contact-bg-shape absolute bottom-40 left-20 w-52 h-52 border border-cream/10 opacity-20">
        <Triangle className="w-full h-full text-cream/5" />
      </div>
      <div className="contact-bg-shape absolute top-40 left-1/4 w-28 h-28 opacity-10">
        <Square className="w-full h-full text-cream/10" strokeWidth={1} />
      </div>
      
      <div className="container max-w-5xl contact-content">
        <h2 className="text-3xl font-bold mb-8 text-cream">
          Let's Connect
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-6 text-cream/80">
              I'm currently focusing on expanding my knowledge in data analytics, AI, and machine learning.
              Feel free to reach out for collaborations, discussions, or just a tech chat!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-cream/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-cream" />
                </div>
                <div>
                  <p className="text-sm text-cream/60">Email</p>
                  <a 
                    href="mailto:arraghul06@gmail.com" 
                    className="font-medium hover:text-cream transition-colors text-cream/80"
                  >
                    arraghul06@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-cream/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-cream" />
                </div>
                <div>
                  <p className="text-sm text-cream/60">Phone</p>
                  <a 
                    href="tel:+916379331551" 
                    className="font-medium hover:text-cream transition-colors text-cream/80"
                  >
                    +91-6379331551
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-4 text-cream">Career Goals</h3>
              <ul className="space-y-2 list-disc list-inside text-cream/70">
                <li>Pursuing a Master's degree in AI/Data Science in the next few years</li>
                <li>Exploring opportunities at top universities in Switzerland and the Netherlands</li>
                <li>Growing expertise in Machine Learning and Data Engineering</li>
                <li>Learning MLOps to improve AI model deployment and management</li>
              </ul>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 form-field">
                  <label htmlFor="name" className="text-sm font-medium text-cream">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" required className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40" />
                </div>
                
                <div className="space-y-2 form-field">
                  <label htmlFor="email" className="text-sm font-medium text-cream">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your Email" required className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40" />
                </div>
              </div>
              
              <div className="space-y-2 form-field">
                <label htmlFor="subject" className="text-sm font-medium text-cream">
                  Subject
                </label>
                <Input id="subject" placeholder="Message Subject" required className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40" />
              </div>
              
              <div className="space-y-2 form-field">
                <label htmlFor="message" className="text-sm font-medium text-cream">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message..." 
                  className="min-h-[120px] bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40"
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full sm:w-auto gap-2 bg-cream hover:bg-cream/80 text-matt-black"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
