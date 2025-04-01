
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. I'll get back to you soon!",
        variant: "success",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
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
    <section id="contact" className="py-20 px-6 md:px-12 bg-gradient-to-b from-navy to-purple-900/20 dark:from-[#121212] dark:to-purple-900/10 text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-lightSlate">
            <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mr-2">05.</span> Contact
          </h2>
          <div className="h-px bg-gradient-to-r from-purple-400/50 to-transparent flex-grow ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-lightSlate mb-4">Get In Touch</h3>
            <p className="text-slate mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hello, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lightSlate font-medium">Email</h4>
                  <a href="mailto:sarwarraish98@gmail.com" className="text-slate hover:text-purple-400 transition-colors">sarwarraish98@gmail.com</a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lightSlate font-medium">Phone</h4>
                  <a href="tel:+919540858376" className="text-slate hover:text-purple-400 transition-colors">+91 9540858376</a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lightSlate font-medium">Location</h4>
                  <p className="text-slate">Hyderabad, India</p>
                </div>
              </motion.div>
            </div>

            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/sarwarraish"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500/20 p-3 rounded-full text-slate hover:text-purple-400 hover:bg-purple-500/30 transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sarwarraish"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500/20 p-3 rounded-full text-slate hover:text-purple-400 hover:bg-purple-500/30 transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500/20 p-3 rounded-full text-slate hover:text-purple-400 hover:bg-purple-500/30 transition-colors flex items-center justify-center"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Code className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://gfg.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500/20 p-3 rounded-full text-slate hover:text-purple-400 hover:bg-purple-500/30 transition-colors flex items-center justify-center"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xs font-bold">GFG</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-purple-900/20 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-lightSlate mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-navy/50 border-purple-500/20 focus:border-purple-400 text-slate"
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
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-navy/50 border-purple-500/20 focus:border-purple-400 text-slate"
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
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-navy/50 border-purple-500/20 focus:border-purple-400 text-slate"
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
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-navy/50 border-purple-500/20 focus:border-purple-400 text-slate resize-none"
                />
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="captcha" className="mr-2" required />
                <label htmlFor="captcha" className="text-sm text-slate">
                  I am a human and not a robot
                </label>
              </div>

              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 font-medium group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
