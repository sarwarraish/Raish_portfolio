
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Moon, Sun, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { toast } = useToast();
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  
  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    // Check if user has a system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Set the theme based on the above checks
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    
    toast({
      title: `${newTheme === "dark" ? "Dark" : "Light"} mode activated!`,
      description: "Your preference has been saved for your next visit.",
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={handleThemeToggle}
        className="relative overflow-hidden rounded-full border border-purple-500/50 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 dark:bg-navy/80 dark:hover:bg-navy/60 bg-white hover:bg-purple-100/20"
      >
        {theme === "dark" ? (
          <>
            <Sun className="h-5 w-5 text-yellow-400" />
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
              animate={{ 
                rotate: [0, 360],
                opacity: [0, 0.2, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            />
          </>
        ) : (
          <>
            <Moon className="h-5 w-5 text-indigo-600" />
            <Sparkles className="absolute h-3 w-3 text-yellow-300 top-1 right-1 opacity-70" />
          </>
        )}
      </Button>
    </motion.div>
  );
}
