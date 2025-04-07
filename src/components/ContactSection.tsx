
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // We would handle form submission logic here in a real application
    console.log("Form submitted!");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold mb-8">
          Let's Connect
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-6">
              I'm open to exciting opportunities in Data Engineering, AI Development, or Analytics roles.
              Feel free to reach out for collaborations, discussions, or just a tech chat!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:arraghul06@gmail.com" 
                    className="font-medium hover:text-primary transition-colors"
                  >
                    arraghul06@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a 
                    href="tel:+916379331551" 
                    className="font-medium hover:text-primary transition-colors"
                  >
                    +91-6379331551
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-4">What's next?</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Building end-to-end Data Pipelines</li>
                <li>Writing technical blogs on AI & Data Engineering</li>
                <li>Exploring MLOps for scalable AI deployments</li>
              </ul>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your Email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Message Subject" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message..." 
                  className="min-h-[120px]"
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full sm:w-auto gap-2">
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
