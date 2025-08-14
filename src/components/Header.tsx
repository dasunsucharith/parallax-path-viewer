import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RainbowButton } from "@/components/ui/rainbow-button";
import useMobile from '@/hooks/use-mobile';
import { Home, Info, Briefcase, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#home", text: "Home", icon: <Home size={24} /> },
    { href: "#about", text: "About", icon: <Info size={24} /> },
    { href: "#services", text: "Services", icon: <Briefcase size={24} /> },
    { href: "#portfolio", text: "Portfolio", icon: <Briefcase size={24} /> },
  ];

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
        <nav className="flex items-center">
          {isMobile ? (
            <>
              <button onClick={toggleMenu} className="text-gray-900 dark:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              {isMenuOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-20 left-0 w-full bg-background/90 shadow-lg backdrop-blur-md rounded-b-xl p-4 flex flex-col items-center space-y-4"
                >
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className={cn("hover:text-primary transition-colors flex items-center space-x-2", scrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-900")} onClick={toggleMenu}>
                        {link.icon}
                        <span>{link.text}</span>
                      </a>
                    </li>
                  ))}
                  <li><RainbowButton as="a" href="#contact" onClick={toggleMenu}>Contact</RainbowButton></li>
                </motion.ul>
              )}
            </>
          ) : (
            <ul className="flex space-x-6 items-center">
              {navLinks.map((link) => (
                <li key={link.href}><a href={link.href} className={cn("hover:text-primary transition-colors", scrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-900")}>{link.text}</a></li>
              ))}
              <li><RainbowButton as="a" href="#contact">Contact</RainbowButton></li>
            </ul>
          )}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
