
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import HireMe from "@/components/HireMe";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // This ensures hydration issues don't occur with the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // This admin toggle button would typically only be visible to authenticated users
  // For demo purposes, it's visible to everyone
  const AdminToggle = () => (
    <motion.div 
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <Button
        onClick={() => setAdminPanelOpen(true)}
        className="bg-navy border border-teal text-teal hover:bg-navy/80 rounded-full h-12 w-12 flex items-center justify-center shadow-lg shadow-teal/20"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      </Button>
    </motion.div>
  );

  if (!mounted) {
    return null; // Prevents hydration issues
  }

  return (
    <div className="bg-navy min-h-screen dark:bg-[#121212]">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        
        {/* Featured Testimonials Carousel */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-navy to-lightNavy text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-lightSlate">
                <span className="text-teal mr-2">04b.</span> Testimonials
              </h2>
              <div className="h-px bg-navy flex-grow ml-4"></div>
            </div>
            
            <p className="text-slate mb-10 max-w-2xl">
              What others have said about working with me
            </p>
            
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {[
                  { 
                    author: "Sarah Johnson", 
                    role: "Project Manager", 
                    company: "TechCorp",
                    text: "One of the most dedicated developers I've worked with. Consistently delivers high-quality code ahead of deadlines and is always eager to learn new technologies."
                  },
                  { 
                    author: "Michael Chen", 
                    role: "Senior Developer", 
                    company: "WebSolutions Inc",
                    text: "Exceptional problem-solving skills. Approaches complex challenges with a methodical mindset and always finds elegant solutions while maintaining clean code practices."
                  },
                  { 
                    author: "Priya Sharma", 
                    role: "UI/UX Designer", 
                    company: "DesignHub",
                    text: "A true collaborator who bridges the gap between design and implementation. Takes feedback constructively and implements UI changes with pixel-perfect precision."
                  }
                ].map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6 md:p-8 bg-gradient-to-br from-lightNavy to-navy border border-teal/20 rounded-lg shadow-xl">
                      <div className="mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">★</span>
                        ))}
                      </div>
                      <blockquote className="text-lg md:text-xl italic mb-6 text-lightSlate">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal to-blue-400 rounded-full flex items-center justify-center text-navy font-bold text-xl">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-white">{testimonial.author}</p>
                          <p className="text-sm text-slate">
                            {testimonial.role}, <span className="text-teal">{testimonial.company}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex justify-center gap-2">
                <CarouselPrevious className="relative inset-auto mx-2" />
                <CarouselNext className="relative inset-auto mx-2" />
              </div>
            </Carousel>
          </div>
        </section>
        
        <HireMe />
        <Contact />
      </main>
      <Footer />
      <AdminToggle />
      <AdminPanel isOpen={adminPanelOpen} onClose={() => setAdminPanelOpen(false)} />
      <div className="fixed top-6 right-6 z-40">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Index;
