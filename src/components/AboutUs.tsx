import { motion } from 'framer-motion';

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

const AboutUs = () => {
  return (
    <motion.section
      className="py-32 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-serif text-4xl font-extralight md:text-5xl text-gray-900 dark:text-white mb-6"
          variants={itemVariants}
        >
          About Us
        </motion.h2>
        <motion.p
          className="leading-normal tracking-tight text-muted-foreground text-gray-700 dark:text-gray-300"
          variants={itemVariants}
        >
          We’re the caffeine-fueled crew ☕ who turn wild ideas into websites that actually work (and look darn good doing it). No cookie-cutter templates, no jargon soup — just smart design, clean code, and a sprinkle of “how did they even do that?” magic ✨. Whether you need a pixel-perfect portfolio, a sales machine of an e-commerce store , or a web app your users can’t stop clicking, we’ve got you covered… and yes, we promise to make Google love you too.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutUs;
