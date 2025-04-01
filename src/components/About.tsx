
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    <section id="about" className="py-20 px-6 md:px-12 bg-navy text-white">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div 
            className="md:col-span-2"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-slate mb-4">
              Hello! I'm Md Sarwar Raish, a passionate full-stack developer and recent B.Tech graduate 
              in Computer Science & Engineering from MRIT with a CGPA of 6.89/10.
            </p>
            <p className="text-slate mb-4">
              I'm passionate about creating software that solves real-world problems. With strong
              design and integration skills coupled with intuitive problem-solving abilities, I specialize
              in translating business requirements into technical solutions.
            </p>
            <p className="text-slate mb-4">
              My journey in programming started with Java, but I've since expanded my skills to include modern 
              web technologies. I enjoy working on challenging projects that push me to learn and grow as a developer.
            </p>
            <p className="text-slate">
              Currently, I'm looking for entry-level software engineering opportunities with a reputable,
              technology-driven organization. I'm open to remote, hybrid, or on-site roles worldwide.
            </p>
            
            <div className="mt-6">
              <h3 className="text-lightSlate font-medium mb-2">Technologies I've been working with recently:</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <li className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> JavaScript (ES6+)
                </li>
                <li className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> React.js
                </li>
                <li className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> HTML & CSS
                </li>
                <li className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> Java
                </li>
                <li className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> Spring Boot
                </li>
                <li className="text-slate flex items-center">
                  <span className="text-teal mr-2">▹</span> SQL/PL/SQL
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="mx-auto"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative group">
              <div className="relative w-60 h-60 rounded overflow-hidden border-2 border-teal z-10">
                <img 
                  src="/lovable-uploads/b0060c69-50bd-4226-8b2a-9b972d456f2b.png"
                  alt="Md Sarwar Raish" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute w-60 h-60 border-2 border-teal rounded top-4 left-4 z-0 transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
