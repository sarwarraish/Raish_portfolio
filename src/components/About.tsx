
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gradient-to-b from-navy to-lightNavy text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-lightSlate">
            <span className="text-teal mr-2">01.</span> About Me
          </h2>
          <div className="h-px bg-lightNavy flex-grow ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            className="md:col-span-2"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-slate mb-6 text-lg leading-relaxed">
              Hello! I'm <span className="text-teal font-medium">Md Sarwar Raish</span>, a dedicated software engineer with a B.Tech in Computer Science & Engineering (CGPA: 6.89/10) and a passion for creating efficient, user-friendly applications that solve real-world problems.
            </p>
            
            <p className="text-slate mb-6 text-lg leading-relaxed">
              With strong foundations in both frontend and backend technologies, I excel at translating business requirements into elegant technical solutions. My approach combines analytical thinking with attention to detail, allowing me to build software that is not only functional but also intuitive and maintainable.
            </p>
            
            <p className="text-slate mb-6 text-lg leading-relaxed">
              Beyond technical skills, I bring <span className="text-teal font-medium">effective communication</span>, <span className="text-teal font-medium">adaptability</span>, and a <span className="text-teal font-medium">growth mindset</span> to any team. I thrive in collaborative environments and am always eager to learn new technologies and methodologies to enhance my development capabilities.
            </p>
            
            <div className="mt-8">
              <h3 className="text-lightSlate font-medium text-xl mb-4">Core Competencies:</h3>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-teal/20 text-teal hover:bg-teal/30 px-4 py-2">Frontend Development</Badge>
                <Badge className="bg-teal/20 text-teal hover:bg-teal/30 px-4 py-2">Backend Solutions</Badge>
                <Badge className="bg-teal/20 text-teal hover:bg-teal/30 px-4 py-2">Database Design</Badge>
                <Badge className="bg-teal/20 text-teal hover:bg-teal/30 px-4 py-2">Problem Solving</Badge>
                <Badge className="bg-teal/20 text-teal hover:bg-teal/30 px-4 py-2">Algorithm Optimization</Badge>
                <Badge className="bg-teal/20 text-teal hover:bg-teal/30 px-4 py-2">UI/UX Implementation</Badge>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lightSlate font-medium text-xl mb-4">Technology Stack:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6">
                <div className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> React.js & React Native
                </div>
                <div className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> JavaScript/TypeScript
                </div>
                <div className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> HTML5 & CSS3
                </div>
                <div className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> Java & Spring Boot
                </div>
                <div className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> SQL & NoSQL Databases
                </div>
                <div className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> RESTful API Design
                </div>
                <div className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> Git Version Control
                </div>
                <div className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> AWS Cloud Services
                </div>
                <div className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> Agile Methodologies
                </div>
              </div>
            </div>

            <div className="mt-8 hidden md:block">
              <h3 className="text-lightSlate font-medium text-xl mb-4">Why Work With Me:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy p-4 rounded-lg border border-teal/20">
                  <h4 className="text-teal font-medium mb-2">Quick Learner</h4>
                  <p className="text-slate text-sm">Adapt rapidly to new technologies and business domains</p>
                </div>
                <div className="bg-navy p-4 rounded-lg border border-teal/20">
                  <h4 className="text-teal font-medium mb-2">Detail-Oriented</h4>
                  <p className="text-slate text-sm">Meticulous attention to code quality and user experience</p>
                </div>
                <div className="bg-navy p-4 rounded-lg border border-teal/20">
                  <h4 className="text-teal font-medium mb-2">Problem Solver</h4>
                  <p className="text-slate text-sm">Analytical approach to complex technical challenges</p>
                </div>
                <div className="bg-navy p-4 rounded-lg border border-teal/20">
                  <h4 className="text-teal font-medium mb-2">Team Player</h4>
                  <p className="text-slate text-sm">Collaborative mindset with excellent communication skills</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mx-auto"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative group">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-lg overflow-hidden border-2 border-teal z-10 bg-gradient-to-br from-navy to-lightNavy p-1">
                <img 
                  src="/lovable-uploads/b0060c69-50bd-4226-8b2a-9b972d456f2b.png"
                  alt="Md Sarwar Raish - Software Engineer" 
                  className="w-full h-full object-cover rounded filter grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute w-64 h-64 sm:w-72 sm:h-72 border-2 border-teal rounded-lg top-4 left-4 z-0 transition-all duration-300 group-hover:top-6 group-hover:left-6"></div>
              
              <div className="mt-8 bg-navy p-6 rounded-lg border border-teal/20">
                <h3 className="text-lightSlate font-medium text-lg mb-3">Professional Snapshot</h3>
                <ul className="space-y-2">
                  <li className="text-slate flex items-start text-sm">
                    <span className="text-teal mr-2">▹</span> B.Tech in Computer Science & Engineering
                  </li>
                  <li className="text-slate flex items-start text-sm">
                    <span className="text-teal mr-2">▹</span> 500+ Data Structure & Algorithm Problems Solved
                  </li>
                  <li className="text-slate flex items-start text-sm">
                    <span className="text-teal mr-2">▹</span> Full-Stack Developer focusing on React & Java
                  </li>
                  <li className="text-slate flex items-start text-sm">
                    <span className="text-teal mr-2">▹</span> Passionate about Clean, Maintainable Code
                  </li>
                </ul>
                
                <div className="flex justify-center mt-4">
                  <a 
                    href="/lovable-uploads/Resume_Md_Sarwar_Raish.pdf" 
                    target="_blank"
                    className="text-teal text-sm hover:text-white transition-colors duration-300 flex items-center gap-1"
                  >
                    View Full Resume
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="md:col-span-3 block md:hidden">
            <h3 className="text-lightSlate font-medium text-xl mb-4">Why Work With Me:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-navy p-4 rounded-lg border border-teal/20">
                <h4 className="text-teal font-medium mb-2">Quick Learner</h4>
                <p className="text-slate text-sm">Adapt rapidly to new technologies and business domains</p>
              </div>
              <div className="bg-navy p-4 rounded-lg border border-teal/20">
                <h4 className="text-teal font-medium mb-2">Detail-Oriented</h4>
                <p className="text-slate text-sm">Meticulous attention to code quality and user experience</p>
              </div>
              <div className="bg-navy p-4 rounded-lg border border-teal/20">
                <h4 className="text-teal font-medium mb-2">Problem Solver</h4>
                <p className="text-slate text-sm">Analytical approach to complex technical challenges</p>
              </div>
              <div className="bg-navy p-4 rounded-lg border border-teal/20">
                <h4 className="text-teal font-medium mb-2">Team Player</h4>
                <p className="text-slate text-sm">Collaborative mindset with excellent communication skills</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
