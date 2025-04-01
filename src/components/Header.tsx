
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Experience", path: "#experience" },
  { name: "Contact", path: "#contact" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1 } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 ${
        scrolled
          ? "bg-navy/90 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
      initial="initial"
      animate="animate"
      variants={headerVariants}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-teal font-bold text-2xl font-poppins">
          SR.dev
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.path}
              className="nav-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * (i + 1) }}
            >
              <span className="text-teal mr-1">{`0${i + 1}.`}</span>
              {item.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              variant="outline"
              className="border-teal text-teal hover:bg-teal/10"
              asChild
            >
              <a href="#hire-me">
                Hire Me
              </a>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-teal p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed top-0 right-0 bottom-0 bg-lightNavy w-3/4 p-6 z-50 flex flex-col justify-center items-center md:hidden ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
          variants={mobileMenuVariants}
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
        >
          <button
            className="absolute top-4 right-4 text-teal"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col space-y-6 items-center">
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.path}
                className="nav-link text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-teal mr-2">{`0${i + 1}.`}</span>
                {item.name}
              </a>
            ))}
            <Button
              variant="outline"
              className="border-teal text-teal hover:bg-teal/10 mt-4"
              asChild
            >
              <a href="#hire-me" onClick={() => setMobileMenuOpen(false)}>
                Hire Me
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
