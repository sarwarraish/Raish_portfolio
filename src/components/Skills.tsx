
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface SkillProps {
  name: string;
  proficiency: number;
  category: string;
}

const skills: SkillProps[] = [
  { name: "Core Java", proficiency: 90, category: "Programming Languages" },
  { name: "JavaScript", proficiency: 85, category: "Programming Languages" },
  { name: "Python", proficiency: 75, category: "Programming Languages" },
  { name: "HTML5", proficiency: 90, category: "Web Development" },
  { name: "CSS3", proficiency: 85, category: "Web Development" },
  { name: "React", proficiency: 80, category: "Frameworks/Libraries" },
  { name: "Spring Boot", proficiency: 75, category: "Frameworks/Libraries" },
  { name: "JSP", proficiency: 70, category: "Frameworks/Libraries" },
  { name: "Oracle (PL/SQL)", proficiency: 85, category: "Databases" },
  { name: "MySQL", proficiency: 80, category: "Databases" },
  { name: "Data Structures", proficiency: 85, category: "Technical Skill" },
  { name: "Algorithms", proficiency: 80, category: "Technical Skill" },
  { name: "Git", proficiency: 80, category: "Tools/Platforms" },
  { name: "VS Code", proficiency: 90, category: "Tools/Platforms" },
  { name: "Eclipse", proficiency: 85, category: "Tools/Platforms" },
  { name: "Computer Networks", proficiency: 75, category: "Technical Skill" },
  { name: "Operating Systems", proficiency: 75, category: "Technical Skill" },
  { name: "Apache Tomcat", proficiency: 80, category: "Server" },
];

const SkillBar: React.FC<SkillProps> = ({ name, proficiency }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-lightSlate">{name}</span>
        <span className="text-xs font-medium text-teal">{proficiency}%</span>
      </div>
      <div className="w-full bg-lightNavy rounded-full h-2.5">
        <motion.div
          className="bg-teal h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = Array.from(new Set(skills.map((skill) => skill.category)));

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
    <section id="skills" className="py-20 px-6 md:px-12 bg-lightNavy text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-lightSlate">
            <span className="text-teal mr-2">02.</span> Skills
          </h2>
          <div className="h-px bg-navy flex-grow ml-4"></div>
        </div>

        <p className="text-slate mb-10 max-w-2xl">
          Here are the technologies and skills I've been working with. I'm constantly learning and adding new skills to my repertoire.
        </p>

        {skillCategories.map((category) => (
          <motion.div key={category} variants={itemVariants} className="mb-12">
            <h3 className="text-xl font-semibold text-lightSlate mb-6">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    proficiency={skill.proficiency}
                    category={skill.category}
                  />
                ))}
            </div>
          </motion.div>
        ))}

        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-xl font-semibold text-lightSlate mb-6">Skills Cloud</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full"
                style={{ 
                  backgroundColor: `rgba(100, 255, 218, ${skill.proficiency / 100 * 0.3})`,
                  fontSize: `${(skill.proficiency / 100) * 0.7 + 0.8}rem`
                }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
