import React from 'react';
import { motion } from 'framer-motion';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { WarpBackground } from "@/components/ui/warp-background";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <WarpBackground
      className="py-32 px-4 md:px-8 lg:px-16 bg-gray-100 dark:bg-gray-800"
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
      <div className="container mx-auto text-center">
        <motion.h2
          className="font-serif text-3xl font-extralight md:text-4xl text-gray-900 dark:text-white mb-12"
          variants={itemVariants}
        >
          Ready to Start Your Project?
        </motion.h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <motion.p
            className="leading-normal tracking-tight text-muted-foreground text-gray-700 dark:text-gray-300 mb-8"
            variants={itemVariants}
          >
            Let's build something great together. Fill out the form below or reach out through our direct contact methods.
          </motion.p>
          <form className="space-y-6 text-left">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your Name"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="your@example.com"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Tell us about your project..."
              ></textarea>
            </motion.div>
            <motion.div variants={itemVariants}>
              <RainbowButton type="submit" className="w-full">
              Send Message
            </RainbowButton>
            </motion.div>
          </form>

          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Or Contact Us Directly</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Email: <a href="mailto:info@youragency.com" className="text-blue-600 hover:underline">info@youragency.com</a>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Address: 123 Web Dev Lane, Suite 456, Digital City, CA 90210
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </WarpBackground>
  );
};

export default Contact;
