import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RainbowButton } from "@/components/ui/rainbow-button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust scroll threshold as needed
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={cn(
        "fixed z-[10000] transition-all duration-300 ease-in-out rounded-xl w-11/12 mx-auto left-1/2 -translate-x-1/2",
        scrolled ? "bg-background/90 shadow-lg backdrop-blur-md top-4" : "bg-transparent top-4"
      )}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-8 lg:px-16">
        {/* Logo/Site Name */}
        <motion.div
          className={cn(
            "font-serif text-2xl font-extralight",
            scrolled ? "text-gray-900 dark:text-white" : "text-gray-900"
          )}
          layout
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
        >
          <img src="acme-logo.svg" alt="ACME Digital Logo" className="h-8" />
        </motion.div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><a href="#home" className={cn("hover:text-primary transition-colors", scrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-900")}>Home</a></li>
            <li><a href="#about" className={cn("hover:text-primary transition-colors", scrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-900")}>About</a></li>
            <li><a href="#services" className={cn("hover:text-primary transition-colors", scrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-900")}>Services</a></li>
            <li><a href="#portfolio" className={cn("hover:text-primary transition-colors", scrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-900")}>Portfolio</a></li>
            <li><RainbowButton as="a" href="#contact">Contact</RainbowButton></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
