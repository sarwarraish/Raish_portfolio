
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

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
    <section id="contact" className="py-20 px-6 md:px-12 bg-navy text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-lightSlate">
            <span className="text-teal mr-2">05.</span> Contact
          </h2>
          <div className="h-px bg-lightNavy flex-grow ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-lightSlate mb-4">Get In Touch</h3>
            <p className="text-slate mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hello, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-lightNavy p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lightSlate font-medium">Email</h4>
                  <a href="mailto:sarwarraish98@gmail.com" className="text-slate hover:text-teal">sarwarraish98@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-lightNavy p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lightSlate font-medium">Phone</h4>
                  <a href="tel:+919540858376" className="text-slate hover:text-teal">+91 9540858376</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-lightNavy p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lightSlate font-medium">Location</h4>
                  <p className="text-slate">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/sarwarraish"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lightNavy p-3 rounded-full text-slate hover:text-teal hover:bg-navy transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/sarwarraish"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lightNavy p-3 rounded-full text-slate hover:text-teal hover:bg-navy transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lightNavy p-3 rounded-full text-slate hover:text-teal hover:bg-navy transition-colors flex items-center justify-center"
              >
                <span className="text-xs font-bold">LC</span>
              </a>
              <a
                href="https://gfg.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lightNavy p-3 rounded-full text-slate hover:text-teal hover:bg-navy transition-colors flex items-center justify-center"
              >
                <span className="text-xs font-bold">GFG</span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-lightNavy p-6 rounded-lg border border-navy">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-lightSlate mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  className="bg-navy border-navy focus:border-teal text-slate"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-lightSlate mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-navy border-navy focus:border-teal text-slate"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-lightSlate mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  required
                  className="bg-navy border-navy focus:border-teal text-slate"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-lightSlate mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  className="bg-navy border-navy focus:border-teal text-slate resize-none"
                />
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="captcha" className="mr-2" required />
                <label htmlFor="captcha" className="text-sm text-slate">
                  I am a human and not a robot
                </label>
              </div>

              <Button type="submit" className="w-full bg-teal text-navy hover:bg-teal/80 font-medium">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
