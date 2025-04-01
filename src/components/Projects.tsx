
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  type: "web" | "mobile" | "full-stack" | "other";
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  imageSrc?: string;
  learnings: string;
}

const projectsData: ProjectProps[] = [
  {
    id: 1,
    title: "Biometric-Based Secure Access",
    description: "Designed a biometric-based authentication protocol to provide secure access to remote cloud services using biometric data as secret credentials.",
    type: "full-stack",
    technologies: ["Java", "J2ee", "MySQL", "Tomcat", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/sarwarraish",
    imageSrc: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    learnings: "This project taught me how to implement secure authentication systems and work with sensitive biometric data while ensuring privacy compliance."
  },
  {
    id: 2,
    title: "Facial Expression Recognition",
    description: "Developed a facial recognition system that can identify emotions from facial expressions using YOLO object detection algorithm.",
    type: "other",
    technologies: ["Python", "Flask", "MySQL", "PyCharm", "YOLO v2"],
    githubLink: "https://github.com/sarwarraish",
    imageSrc: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&q=80&w=2669&ixlib=rb-4.0.3",
    learnings: "I gained experience with machine learning algorithms and working with image processing techniques for emotion detection."
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my projects, skills, and experience. Built with modern web technologies.",
    type: "web",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/sarwarraish",
    demoLink: "#",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    learnings: "This project helped me refine my front-end skills and learn about responsive design principles and animations."
  },
  {
    id: 4,
    title: "COVID-19 Data Analysis",
    description: "Analysis of COVID-19 data using Python and data visualization techniques to identify patterns and trends.",
    type: "other",
    technologies: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
    githubLink: "https://github.com/sarwarraish",
    imageSrc: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    learnings: "I improved my data analysis skills and learned how to work with large datasets to extract meaningful insights."
  }
];

const ProjectCard: React.FC<{ project: ProjectProps; delay: number }> = ({ project, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className="h-full"
    >
      <Card className="h-full bg-navy border border-lightNavy overflow-hidden group hover:border-teal/50 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          {project.imageSrc && (
            <>
              <div className="absolute inset-0 bg-navy/60 z-10"></div>
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </>
          )}
          <div className="absolute top-4 right-4 z-20 flex space-x-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs bg-navy/80 text-teal px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs bg-navy/80 text-teal px-2 py-1 rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-lightSlate mb-2">{project.title}</h3>
          <p className="text-slate mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-teal hover:text-teal hover:bg-teal/10"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide Details" : "View Details"}
            </Button>
            <div className="flex space-x-2">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-teal transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-teal transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}
            </div>
          </div>
          
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-lightNavy"
            >
              <h4 className="text-lightSlate font-medium mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-lightNavy text-teal px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className="text-lightSlate font-medium mb-2">What I Learned:</h4>
              <p className="text-slate text-sm">{project.learnings}</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-navy text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-lightSlate">
            <span className="text-teal mr-2">03.</span> Projects
          </h2>
          <div className="h-px bg-lightNavy flex-grow ml-4"></div>
        </div>

        <p className="text-slate mb-10 max-w-2xl">
          Here are some of the projects I've worked on. Each project represents a unique challenge and learning opportunity.
        </p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8 bg-lightNavy">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="full-stack">Full-Stack</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((project, index) => (
                <ProjectCard key={project.id} project={project} delay={index} />
              ))}
            </div>
          </TabsContent>
          
          {["web", "full-stack", "other"].map((type) => (
            <TabsContent key={type} value={type}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData
                  .filter((project) => project.type === type)
                  .map((project, index) => (
                    <ProjectCard key={project.id} project={project} delay={index} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
};

export default Projects;
