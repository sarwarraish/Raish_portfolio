
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10 px-6 md:px-12 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6 relative z-10">
          <motion.div 
            className="absolute -top-24 -left-24 w-64 h-64 bg-teal/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-teal font-mono"
          >
            Hi there, I'm
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold"
          >
            <span className="text-gradient-to-r from-teal to-blue-400 bg-clip-text text-transparent">Md Sarwar Raish</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate"
          >
            Software Engineer & Problem Solver
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-slate max-w-lg text-lg"
          >
            Bridging ideas with elegant code. Specialized in React and Java full-stack solutions with a passion for creating intuitive user experiences and scalable applications.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <Button className="bg-gradient-to-r from-teal to-blue-400 hover:from-teal/90 hover:to-blue-500 text-navy font-medium px-8 py-6 text-lg" asChild>
              <a href="#projects">View My Projects</a>
            </Button>
            <Button variant="outline" className="border-teal text-teal hover:bg-teal/10 px-8 py-6 text-lg" asChild>
              <a href="/lovable-uploads/Resume_Md_Sarwar_Raish.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
            <Button variant="ghost" className="text-slate hover:text-white hover:bg-lightNavy px-8 py-6 text-lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex items-center gap-2 pt-6"
          >
            <span className="text-teal text-sm">Tech Stack:</span>
            {['React', 'Java', 'Spring', 'JavaScript', 'SQL'].map((tech, i) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.1, duration: 0.3 }}
                className="px-3 py-1 rounded-full text-xs bg-lightNavy text-slate"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="md:col-span-2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal/30 to-blue-400/30 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-teal/20 to-blue-400/20"></div>
            <div className="absolute inset-0 rounded-full overflow-hidden bg-navy border-2 border-teal/50">
              <img 
                src="/lovable-uploads/b0060c69-50bd-4226-8b2a-9b972d456f2b.png" 
                alt="Md Sarwar Raish - Software Engineer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -z-10 right-0 bottom-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
