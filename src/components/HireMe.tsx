
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const HireMe: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hire-me" className="py-20 px-6 md:px-12 bg-lightNavy text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-lightSlate">
            <span className="text-teal mr-2">06.</span> Hire Me
          </h2>
          <div className="h-px bg-navy flex-grow ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-lightSlate">Work Preferences</h3>
            
            <div className="space-y-6">
              <div className="bg-navy p-6 rounded-lg border border-lightNavy hover:border-teal/50 transition-all duration-300">
                <h4 className="text-lg font-semibold text-lightSlate mb-2">Availability Status</h4>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-slate">Available for hire</span>
                </div>
                <p className="text-slate mt-2">
                  I'm currently looking for entry-level software engineering opportunities.
                </p>
              </div>

              <div className="bg-navy p-6 rounded-lg border border-lightNavy hover:border-teal/50 transition-all duration-300">
                <h4 className="text-lg font-semibold text-lightSlate mb-2">Work Types</h4>
                <ul className="space-y-2 text-slate">
                  <li className="flex items-start">
                    <span className="text-teal mr-2">▹</span>
                    <span>Full-time roles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">▹</span>
                    <span>Remote positions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">▹</span>
                    <span>Hybrid arrangements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">▹</span>
                    <span>Contract work</span>
                  </li>
                </ul>
              </div>

              <div className="bg-navy p-6 rounded-lg border border-lightNavy hover:border-teal/50 transition-all duration-300">
                <h4 className="text-lg font-semibold text-lightSlate mb-2">Visa & Relocation</h4>
                <ul className="space-y-2 text-slate">
                  <li className="flex items-start">
                    <span className="text-teal mr-2">▹</span>
                    <span>Open to visa sponsorship opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">▹</span>
                    <span>Willing to relocate for the right opportunity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">▹</span>
                    <span>Currently based in Hyderabad, India</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-lightSlate">Why Hire Me?</h3>

            <div className="bg-navy p-6 rounded-lg border border-lightNavy hover:border-teal/50 transition-all duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-teal mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lightSlate font-medium">Strong Technical Foundation</h5>
                    <p className="text-slate text-sm">B.Tech in CSE with solid understanding of core CS concepts and programming fundamentals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-teal mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lightSlate font-medium">Problem-Solving Mindset</h5>
                    <p className="text-slate text-sm">Solved 500+ problems across various platforms, showcasing strong analytical and algorithmic skills.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-teal mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lightSlate font-medium">Continuous Learner</h5>
                    <p className="text-slate text-sm">Proactively seeking opportunities to expand knowledge through workshops, courses, and self-study.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-teal mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lightSlate font-medium">Project Experience</h5>
                    <p className="text-slate text-sm">Hands-on experience building end-to-end applications, from biometric security systems to facial recognition.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex justify-center pt-6">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-teal text-navy hover:bg-teal/80 px-8 py-6 text-lg">
                    Let's Work Together
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-navy border-lightNavy">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-lightSlate">Ready to Hire Me?</AlertDialogTitle>
                    <AlertDialogDescription className="text-slate">
                      Thank you for your interest! Please reach out via email or the contact form to discuss potential opportunities.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-lightNavy text-slate border-navy hover:bg-navy">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-teal text-navy hover:bg-teal/80" asChild>
                      <a href="#contact">Contact Me</a>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HireMe;
