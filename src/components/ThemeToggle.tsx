
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Moon, Sun } from "lucide-react";

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
    <Button
      variant="outline"
      size="icon"
      onClick={handleThemeToggle}
      className="rounded-full border border-teal shadow-md hover:shadow-teal/20 transition-all duration-300 dark:bg-navy/80 dark:hover:bg-navy/60 bg-white hover:bg-teal/5"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-teal" />
      ) : (
        <Moon className="h-5 w-5 text-navy" />
      )}
    </Button>
  );
}
