
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10 px-6 md:px-12 bg-navy text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-teal font-mono"
          >
            Hi, my name is
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-lightSlate"
          >
            Md Sarwar Raish.
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate"
          >
            I build things for the web.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-slate max-w-lg"
          >
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently seeking entry-level software engineering opportunities to create accessible,
            human-centered products.
            <span className="text-white hidden">
              Entry-level React developer portfolio, Full-stack internship candidate, JavaScript developer seeking opportunities
            </span>
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex space-x-4 pt-4"
          >
            <Button className="bg-teal text-navy hover:bg-teal/80 font-medium" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="border-teal text-teal hover:bg-teal/10" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="md:col-span-2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border-2 border-teal/30 transform rotate-45"></div>
            <div className="absolute inset-4 rounded-full border-2 border-teal/20 transform -rotate-12"></div>
            <div className="absolute inset-0 rounded-full overflow-hidden bg-navy border-2 border-teal/50">
              <img 
                src="/lovable-uploads/b0060c69-50bd-4226-8b2a-9b972d456f2b.png" 
                alt="Md Sarwar Raish" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
