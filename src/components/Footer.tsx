import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-100 dark:bg-gray-900 py-12 px-4 md:px-8 lg:px-16 text-gray-700 dark:text-gray-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand/About Section */}
        <motion.div variants={itemVariants}>
          <h3 className="font-serif text-2xl font-extralight text-gray-900 dark:text-white mb-4">ACME Digital</h3>
          <p className="text-sm leading-relaxed">Crafting immersive digital experiences with cutting-edge web technologies.</p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">Services</a></li>
            <li><a href="#portfolio" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">Contact</a></li>
          </ul>
        </motion.div>

        {/* Social Media & Contact */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect With Us</h3>
          <ul className="flex space-x-4 mb-4">
            <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors"><Facebook size={24} /></a></li>
            <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors"><Twitter size={24} /></a></li>
            <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors"><Linkedin size={24} /></a></li>
          </ul>
          <p className="text-sm">Email: info@parallaxpath.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} ACME Digital. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
