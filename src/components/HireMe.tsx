
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
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
    <section id="hire-me" className="py-24 px-6 md:px-12 bg-gradient-to-b from-lightNavy to-navy text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-lightSlate">
            <span className="text-teal mr-2">05.</span> Why Hire Me
          </h2>
          <div className="h-px bg-navy flex-grow ml-4"></div>
        </div>

        <div className="mb-12 max-w-3xl mx-auto text-center">
          <p className="text-slate text-lg">
            Looking for a dedicated developer who blends technical skills with business understanding?
            I'm currently seeking opportunities to bring my skills and enthusiasm to a forward-thinking team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gradient-to-br from-navy to-lightNavy p-1 rounded-lg">
              <div className="bg-navy p-6 rounded-lg h-full border-t border-teal/20">
                <h3 className="text-2xl font-bold text-teal mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                  Employment Preferences
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-lightNavy p-5 rounded-md hover:bg-lightNavy/70 transition-colors duration-300 group">
                    <h4 className="text-lg font-semibold text-lightSlate mb-2 flex items-center">
                      <div className="h-3 w-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                      Availability Status
                    </h4>
                    <p className="text-slate mb-3">
                      <span className="text-white font-medium">Immediately Available</span> for full-time positions, internships, and contract work
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-navy text-teal px-2 py-1 rounded border border-teal/20">Entry-level positions</span>
                      <span className="text-xs bg-navy text-teal px-2 py-1 rounded border border-teal/20">Software engineering roles</span>
                      <span className="text-xs bg-navy text-teal px-2 py-1 rounded border border-teal/20">React developer openings</span>
                    </div>
                  </div>

                  <div className="bg-lightNavy p-5 rounded-md hover:bg-lightNavy/70 transition-colors duration-300">
                    <h4 className="text-lg font-semibold text-lightSlate mb-2">Work Arrangements</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remote" defaultChecked />
                        <label htmlFor="remote" className="text-slate text-sm">Remote Work</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hybrid" defaultChecked />
                        <label htmlFor="hybrid" className="text-slate text-sm">Hybrid Model</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="onsite" defaultChecked />
                        <label htmlFor="onsite" className="text-slate text-sm">On-site</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="international" defaultChecked />
                        <label htmlFor="international" className="text-slate text-sm">International Opportunities</label>
                      </div>
                    </div>
                    <p className="text-slate text-sm">
                      Flexible to adapt to your company's preferred working model
                    </p>
                  </div>
                  
                  <div className="bg-lightNavy p-5 rounded-md hover:bg-lightNavy/70 transition-colors duration-300">
                    <h4 className="text-lg font-semibold text-lightSlate mb-2">Visa & Relocation</h4>
                    <ul className="space-y-2 text-slate">
                      <li className="flex items-start">
                        <span className="text-teal mr-2">▹</span>
                        <span>Open to relocation within India and internationally</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">▹</span>
                        <span>Available for visa sponsorship opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">▹</span>
                        <span>Currently based in Hyderabad, India</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gradient-to-br from-navy to-lightNavy p-1 rounded-lg">
              <div className="bg-navy p-6 rounded-lg h-full border-t border-teal/20">
                <h3 className="text-2xl font-bold text-teal mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M8.4 10.6a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Z"></path>
                    <path d="M10.5 12.7a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Z"></path>
                    <path d="M12.6 10.6a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Z"></path>
                    <path d="M10.5 8.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Z"></path>
                    <path d="M13.4 3.1c.2.3.5.5.8.5s.6-.2.8-.5c.3-.6.4-1.3.2-2s-.7-1.3-1.5-1.1c-.3.1-.6.3-.8.6-.2.4-.2.8 0 1.2.1.2.3.5.5.7.6.6.6 1.5 0 2.1s-1.5.6-2.1 0-.6-1.5 0-2.1c.2-.2.5-.4.5-.7.1-.4.1-.8 0-1.2-.2-.3-.5-.5-.8-.6-.8-.2-1.3.4-1.5 1.1s-.1 1.4.2 2c.2.3.5.5.8.5s.6-.2.8-.5"></path>
                    <path d="m8.4 10.6 2.1 2.1"></path>
                    <path d="m10.5 4.2 2.1 2.2"></path>
                    <path d="M10.5 12.7c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4-1.5-3.4-3.4-3.4Z"></path>
                    <path d="M17.7 19.5c.6-1.1 1-2.2 1-3.4 0-3.9-3.1-7-7-7"></path>
                    <path d="M16.9 21.1a10.9 10.9 0 0 0 5.1-5.1"></path>
                    <path d="M22 21.7c-3.5-.9-7.2-1.6-11-1.7-3.8.1-7.5.8-11 1.7"></path>
                    <path d="M4.6 5.5c-.5 1.5-.7 3-.7 4.5s.2 3 .7 4.5"></path>
                    <path d="M8.4 19.8c-1.9-2.9-2.4-6.6-1.2-10"></path>
                  </svg>
                  Value Proposition
                </h3>

                <div className="space-y-3 mb-6">
                  <Collapsible className="bg-lightNavy rounded-md overflow-hidden">
                    <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left">
                      <div className="flex items-center">
                        <span className="h-6 w-6 rounded-full bg-teal/20 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                            <path d="M5 3v4"></path>
                            <path d="M19 17v4"></path>
                            <path d="M3 5h4"></path>
                            <path d="M17 19h4"></path>
                          </svg>
                        </span>
                        <h4 className="text-lg font-semibold text-lightSlate">Technical Excellence</h4>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4">
                      <p className="text-slate mb-2">
                        My technical foundation is built on solid computer science principles combined with practical implementation experience. I've:
                      </p>
                      <ul className="space-y-1 text-sm text-slate">
                        <li className="flex items-start">
                          <span className="text-teal mr-2">▹</span>
                          <span>Solved 500+ algorithmic problems demonstrating strong analytical skills</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal mr-2">▹</span>
                          <span>Built end-to-end applications with modern tech stacks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal mr-2">▹</span>
                          <span>Implemented responsive UIs with accessibility in mind</span>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Collapsible className="bg-lightNavy rounded-md overflow-hidden">
                    <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left">
                      <div className="flex items-center">
                        <span className="h-6 w-6 rounded-full bg-teal/20 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <h4 className="text-lg font-semibold text-lightSlate">Growth Mindset</h4>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4">
                      <p className="text-slate mb-2">
                        Technology evolves rapidly, and so do I. My commitment to continuous learning means:
                      </p>
                      <ul className="space-y-1 text-sm text-slate">
                        <li className="flex items-start">
                          <span className="text-teal mr-2">▹</span>
                          <span>Quick adaptation to your tech stack and business domain</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal mr-2">▹</span>
                          <span>Proactive skills development through self-study and courses</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal mr-2">▹</span>
                          <span>Knowledge sharing with team members to elevate overall quality</span>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Collapsible className="bg-lightNavy rounded-md overflow-hidden">
                    <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left">
                      <div className="flex items-center">
                        <span className="h-6 w-6 rounded-full bg-teal/20 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </span>
                        <h4 className="text-lg font-semibold text-lightSlate">Team Integration</h4>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4">
                      <p className="text-slate mb-2">
                        Success in software development requires more than just coding skills. I bring:
                      </p>
                      <ul className="space-y-1 text-sm text-slate">
                        <li className="flex items-start">
                          <span className="text-teal mr-2">▹</span>
                          <span>Clear communication across technical and business teams</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal mr-2">▹</span>
                          <span>Collaborative approach to problem-solving and development</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal mr-2">▹</span>
                          <span>Receptiveness to feedback and constructive criticism</span>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div className="flex justify-center mt-8">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-teal to-blue-400 hover:from-teal/90 hover:to-blue-500 text-navy px-10 py-6 text-lg font-medium">
                        Start The Conversation
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-navy border-lightNavy">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-teal text-xl">Let's Connect</AlertDialogTitle>
                        <AlertDialogDescription className="text-slate">
                          Thank you for your interest! I'm excited about the possibility of joining your team. 
                          Please reach out via email or the contact form to discuss how I can contribute to your company's success.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="bg-lightNavy text-slate border-navy hover:bg-navy">
                          Maybe Later
                        </AlertDialogCancel>
                        <AlertDialogAction className="bg-teal text-navy hover:bg-teal/80" asChild>
                          <a href="#contact">Contact Me</a>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>

            <div className="hidden sm:block bg-lightNavy p-5 rounded-lg border border-teal/10">
              <h4 className="text-lightSlate font-medium mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-teal">
                  <path d="M7 8h10"></path>
                  <path d="M7 12h4"></path>
                  <path d="M7 16h10"></path>
                  <path d="M3 20h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"></path>
                </svg>
                Key Skills for HR Review
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-navy/70 text-teal px-2 py-1 rounded border border-teal/20">Entry-level React developer</span>
                <span className="text-xs bg-navy/70 text-teal px-2 py-1 rounded border border-teal/20">Full-stack internship candidate</span>
                <span className="text-xs bg-navy/70 text-teal px-2 py-1 rounded border border-teal/20">JavaScript developer</span>
                <span className="text-xs bg-navy/70 text-teal px-2 py-1 rounded border border-teal/20">Remote/hybrid roles</span>
                <span className="text-xs bg-navy/70 text-teal px-2 py-1 rounded border border-teal/20">MERN stack developer</span>
                <span className="text-xs bg-navy/70 text-teal px-2 py-1 rounded border border-teal/20">Java Spring Boot</span>
                <span className="text-xs bg-navy/70 text-teal px-2 py-1 rounded border border-teal/20">SQL & Database Design</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HireMe;
