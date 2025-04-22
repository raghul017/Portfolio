
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calculator, ChartBar, Code, FileCode, GraduationCap, Circle, Triangle, Square, Star, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-cream relative overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg"></div>
      
      {/* Section number */}
      <div className="section-number bottom-10 right-10">02</div>
      
      {/* Line decorations */}
      <div className="design-line vertical-line absolute top-10 right-[15%]"></div>
      <div className="design-line horizontal-line absolute bottom-[20%] left-10"></div>
      
      {/* Moving background elements */}
      <div className="moving-element circle-element text-black absolute top-[15%] left-[15%]"></div>
      <div className="moving-element square-element text-black absolute bottom-[20%] right-[10%]"></div>
      <div className="moving-element line-element text-black absolute top-[50%] right-[25%]"></div>
      <div className="moving-element dot-element text-black absolute top-[30%] left-[30%]"></div>
      
      {/* Abstract vector graphics */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000000" d="M42.3,-65.1C55.4,-56.8,67.2,-45.8,76.3,-31.9C85.4,-18,91.7,-1.2,86.8,12.1C81.9,25.3,65.8,35.1,51.8,45.3C37.8,55.5,25.9,66.1,11.8,70.3C-2.3,74.4,-18.7,72.2,-31.1,64.4C-43.5,56.6,-52.1,43.1,-59.6,29.1C-67.2,15,-73.9,0.2,-71.3,-12.8C-68.7,-25.8,-56.7,-37.1,-44.1,-45.5C-31.5,-54,-15.7,-59.5,-0.1,-59.4C15.6,-59.3,31.2,-53.6,42.3,-45.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 about-content relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-4 mb-12"
        >
          <div className="w-16 h-16 bg-matt-black rounded-full flex items-center justify-center flex-shrink-0">
            <Star className="w-8 h-8 text-cream" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-matt-black inline-flex items-center">
              About Me
              <div className="h-[3px] w-24 bg-matt-black/30 ml-6"></div>
            </h2>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* About Content - Left Column */}
          <motion.div 
            className="space-y-6 md:col-span-7" 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item} className="bg-white/50 backdrop-blur-sm p-6 border-l-4 border-matt-black">
              <h3 className="text-2xl font-bold text-matt-black mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-matt-black" />
                Data Analyst with a Passion for AI & Data Engineering
              </h3>
              
              <div className="space-y-4">
                <p className="text-matt-black/80 leading-relaxed">
                  I'm currently pursuing my B.Tech. in Computer Science and Engineering with a specialization in AI & Data Engineering 
                  at Lovely Professional University, expected to graduate in May 2026. My academic journey has equipped me with 
                  skills in data analysis, machine learning, and software development.
                </p>
                
                <p className="text-matt-black/80 leading-relaxed">
                  With hands-on experience as a Data Analyst Intern at Futurense Technologies, I've worked on real-world data 
                  projects, building dashboards and pipelines to track student performance and training outcomes. I'm passionate 
                  about applying AI and data engineering concepts to solve real-world problems.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="mt-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-5 h-5 mr-2 text-matt-black" />
                <h4 className="text-lg font-semibold text-matt-black">
                  Current Focus Areas
                </h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-2 border-data-blue/30 shadow-md bg-white hover:bg-data-blue/5 transition-colors duration-300 group">
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="bg-data-blue/10 p-2 rounded-full group-hover:bg-data-blue/20 transition-colors duration-300">
                      <ChartBar className="h-5 w-5 text-data-blue" />
                    </div>
                    <span className="text-sm font-medium text-matt-black">Data Analytics</span>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-data-purple/30 shadow-md bg-white hover:bg-data-purple/5 transition-colors duration-300 group">
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="bg-data-purple/10 p-2 rounded-full group-hover:bg-data-purple/20 transition-colors duration-300">
                      <Calculator className="h-5 w-5 text-data-purple" />
                    </div>
                    <span className="text-sm font-medium text-matt-black">Machine Learning</span>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-data-teal/30 shadow-md bg-white hover:bg-data-teal/5 transition-colors duration-300 group">
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="bg-data-teal/10 p-2 rounded-full group-hover:bg-data-teal/20 transition-colors duration-300">
                      <FileCode className="h-5 w-5 text-data-teal" />
                    </div>
                    <span className="text-sm font-medium text-matt-black">Natural Language Processing</span>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-data-emerald/30 shadow-md bg-white hover:bg-data-emerald/5 transition-colors duration-300 group">
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="bg-data-emerald/10 p-2 rounded-full group-hover:bg-data-emerald/20 transition-colors duration-300">
                      <Code className="h-5 w-5 text-data-emerald" />
                    </div>
                    <span className="text-sm font-medium text-matt-black">Full Stack Development</span>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Education & Contact - Right Column */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg shadow-xl p-8 border-2 border-matt-black/10 bg-white text-matt-black relative overflow-hidden">
              {/* Abstract background pattern */}
              <div className="absolute top-0 right-0 w-full h-full opacity-5 z-0">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="pattern-circles" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                    <circle id="pattern-circle" cx="10" cy="10" r="2" fill="#000"></circle>
                  </pattern>
                  <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center mb-6 bg-matt-black text-white py-2 px-4">
                  <h3 className="text-xl font-bold">
                    Education & Experience
                  </h3>
                </div>
                
                <div className="relative mb-10 pb-10 border-l-2 border-matt-black/30 pl-8">
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-matt-black"></div>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-matt-black/10 p-2 rounded-full">
                        <GraduationCap className="h-5 w-5 text-matt-black" />
                      </div>
                      <h4 className="text-lg font-bold text-matt-black">B.Tech. in Computer Science and Engineering</h4>
                    </div>
                    <div className="ml-10">
                      <p className="text-matt-black/80 font-medium">AI & Data Engineering Specialization</p>
                      <p className="text-matt-black/60 flex items-center gap-2 text-sm">
                        <span className="inline-block w-3 h-3 bg-data-blue rounded-full"></span>
                        Lovely Professional University | 2022 - 2026 (Expected)
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-[-10px] top-[100px] w-5 h-5 rounded-full bg-matt-black"></div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-matt-black/10 p-2 rounded-full">
                        <Briefcase className="h-5 w-5 text-matt-black" />
                      </div>
                      <h4 className="text-lg font-bold text-matt-black">Data Analyst Intern</h4>
                    </div>
                    <div className="ml-10">
                      <p className="text-matt-black/80 font-medium">Futurense Technologies, Bangalore</p>
                      <p className="text-matt-black/60 flex items-center gap-2 text-sm">
                        <span className="inline-block w-3 h-3 bg-data-purple rounded-full"></span>
                        June 2024 - August 2024
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="h-px bg-matt-black/10 my-8" />
                
                <div className="inline-flex items-center mb-6 bg-matt-black text-white py-2 px-4">
                  <h3 className="text-xl font-bold">
                    Contact Information
                  </h3>
                </div>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 group hover:bg-cream/50 p-3 transition-colors duration-300 -mx-3">
                    <div className="p-2 rounded-full bg-data-blue/10 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-data-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-matt-black/60 uppercase font-semibold mb-1">Email</span>
                      <a 
                        href="mailto:arraghul06@gmail.com" 
                        className="text-matt-black font-medium hover:text-data-blue transition-colors duration-200"
                      >
                        arraghul06@gmail.com
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4 group hover:bg-cream/50 p-3 transition-colors duration-300 -mx-3">
                    <div className="p-2 rounded-full bg-data-purple/10 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-data-purple" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-matt-black/60 uppercase font-semibold mb-1">Phone</span>
                      <a 
                        href="tel:+916379331551" 
                        className="text-matt-black font-medium hover:text-data-purple transition-colors duration-200"
                      >
                        +91-6379331551
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4 group hover:bg-cream/50 p-3 transition-colors duration-300 -mx-3">
                    <div className="p-2 rounded-full bg-data-emerald/10 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-data-emerald" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-matt-black/60 uppercase font-semibold mb-1">Location</span>
                      <span className="text-matt-black font-medium">Tamil Nadu, India</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
