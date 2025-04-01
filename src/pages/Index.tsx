
import React, { useState } from "react";
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

const Index = () => {
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);

  // This admin toggle button would typically only be visible to authenticated users
  // For demo purposes, it's visible to everyone
  const AdminToggle = () => (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => setAdminPanelOpen(true)}
        className="bg-navy border border-teal text-teal hover:bg-navy/80 rounded-full h-12 w-12 flex items-center justify-center"
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
    </div>
  );

  return (
    <div className="bg-navy min-h-screen">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
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
