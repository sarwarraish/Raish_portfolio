
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  details: string;
  score?: string;
}

interface Training {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
}

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "B.Tech, Computer Science & Engineering",
    institution: "MRIT",
    year: "2018-2022",
    details: "Completed bachelor's degree with coursework in data structures, algorithms, database management, operating systems, and computer networks.",
    score: "CGPA - 6.89/10"
  },
  {
    id: 2,
    degree: "Senior Secondary (12th)",
    institution: "NIOS Board",
    year: "2018",
    details: "Completed senior secondary education with focus on science and mathematics.",
    score: "68%"
  },
  {
    id: 3,
    degree: "Secondary (10th)",
    institution: "CBSE Board",
    year: "2014",
    details: "Completed secondary education with strong academic performance.",
    score: "CGPA - 9.2"
  }
];

const trainingData: Training[] = [
  {
    id: 1,
    title: "Artificial Intelligence Workshop",
    organization: "Microsoft",
    date: "2022",
    description: "Two-day intensive workshop covering AI fundamentals, machine learning algorithms, and practical applications."
  },
  {
    id: 2,
    title: "Advanced Java Training",
    organization: "Naresh IT Technologies",
    date: "2021",
    description: "Comprehensive training on advanced Java concepts, including multithreading, collections framework, and design patterns."
  },
  {
    id: 3,
    title: "Spring Boot Development",
    organization: "Udemy",
    date: "2021",
    description: "Online course focusing on building RESTful web services with Spring Boot, JPA, and Hibernate."
  },
  {
    id: 4,
    title: "Web Development Training",
    organization: "Naresh IT Technologies",
    date: "2020",
    description: "Training program covering HTML, CSS, JavaScript, and responsive web design principles."
  }
];

const achievementData: Achievement[] = [
  {
    id: 1,
    title: "Microsoft Certification",
    organization: "Microsoft",
    date: "2022",
    description: "Introduction to Programming using Python (98-381) with a score of 80/100.",
    link: "https://docs.microsoft.com/en-us/learn/certifications/exams/98-381"
  },
  {
    id: 2,
    title: "Hacker Rank Certification",
    organization: "Hacker Rank",
    date: "2021",
    description: "Certified in Java programming, demonstrating proficiency in core language features and problem-solving."
  },
  {
    id: 3,
    title: "Problem Solving",
    organization: "Various Platforms",
    date: "Ongoing",
    description: "Solved 500+ programming problems across multiple competitive programming platforms."
  },
  {
    id: 4,
    title: "Leetcode Achievements",
    organization: "Leetcode",
    date: "Ongoing",
    description: "Solved 200+ problems on Leetcode, focusing on algorithms and data structures."
  },
  {
    id: 5,
    title: "COVID-19 Data Analysis Certification",
    organization: "Python",
    date: "2020",
    description: "Certified for analyzing COVID-19 data using Python, demonstrating data analysis and visualization skills."
  }
];

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 px-6 md:px-12 bg-lightNavy text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-lightSlate">
            <span className="text-teal mr-2">04.</span> Experience
          </h2>
          <div className="h-px bg-navy flex-grow ml-4"></div>
        </div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8 bg-navy">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="education">
            <motion.div variants={containerVariants} className="space-y-6">
              {educationData.map((education) => (
                <motion.div
                  key={education.id}
                  variants={itemVariants}
                  className="bg-navy border border-lightNavy rounded-lg p-6 transition-all duration-300 hover:border-teal/50"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-lightSlate">{education.degree}</h3>
                    <div className="text-teal font-mono text-sm">{education.year}</div>
                  </div>
                  <div className="mb-2">
                    <span className="text-slate">{education.institution}</span>
                    {education.score && (
                      <span className="ml-4 text-teal text-sm">{education.score}</span>
                    )}
                  </div>
                  <p className="text-slate">{education.details}</p>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="training">
            <motion.div variants={containerVariants} className="space-y-6">
              {trainingData.map((training) => (
                <motion.div
                  key={training.id}
                  variants={itemVariants}
                  className="bg-navy border border-lightNavy rounded-lg p-6 transition-all duration-300 hover:border-teal/50"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-lightSlate">{training.title}</h3>
                    <div className="text-teal font-mono text-sm">{training.date}</div>
                  </div>
                  <div className="mb-2 text-slate">{training.organization}</div>
                  <p className="text-slate">{training.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="achievements">
            <motion.div variants={containerVariants} className="space-y-6">
              {achievementData.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  className="bg-navy border border-lightNavy rounded-lg p-6 transition-all duration-300 hover:border-teal/50"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-lightSlate">{achievement.title}</h3>
                    <div className="text-teal font-mono text-sm">{achievement.date}</div>
                  </div>
                  <div className="mb-2 text-slate">{achievement.organization}</div>
                  <p className="text-slate">{achievement.description}</p>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-teal hover:underline text-sm"
                    >
                      View Certificate →
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
        
        {/* Resume Viewer/Download Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-lightSlate mb-4">Download My Resume</h3>
          <p className="text-slate mb-6 max-w-2xl mx-auto">
            For a more detailed overview of my experience, education, and skills, please download my resume.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-navy border border-teal text-teal rounded-md hover:bg-teal/10 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
              Standard PDF
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-navy border border-teal text-teal rounded-md hover:bg-teal/10 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
                <path d="M10 9H8"></path>
              </svg>
              ATS-Friendly
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
