import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  '/images/logo-gallery/logo-12.png',
  '/images/logo-gallery/logo-11.png',
  '/images/logo-gallery/logo-10.png',
  '/images/logo-gallery/logo-9.png',
  '/images/logo-gallery/logo-8.png',
  '/images/logo-gallery/logo-7.png',
  '/images/logo-gallery/logo-6.png',
  '/images/logo-gallery/logo-5.png',
  '/images/logo-gallery/logo-4.png',
  '/images/logo-gallery/logo-3.png',
  '/images/logo-gallery/logo-2.png',
  '/images/logo-gallery/logo-1.png',
];

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

const TrustedClients = () => {
  return (
    <section className="py-32 bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="font-serif text-4xl font-extralight md:text-5xl text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Trusted by Leading Brands
        </motion.h2>
        <motion.div
          className="group relative w-full flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex animate-scroll-left group-hover:paused">
            {clientLogos.map((logo, index) => (
              <motion.div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-4" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <img src={logo} alt={`Client Logo ${index + 1}`} className="max-h-full max-w-full object-contain" />
              </motion.div>
            ))}
            {/* Duplicate logos for seamless loop */}
            {clientLogos.map((logo, index) => (
              <motion.div key={`duplicate-${index}`} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-4" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <img src={logo} alt={`Client Logo ${index + 1}`} className="max-h-full max-w-full object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedClients;