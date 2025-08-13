import { motion } from 'framer-motion';
import { AuroraBackground } from "@/components/ui/aurora-background"; // Import AuroraBackground

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
    <AuroraBackground className="h-auto"> {/* Added AuroraBackground and h-auto */}
      <motion.section
        className="py-32 px-4 md:px-8 lg:px-16 overflow-hidden"> {/* Removed background color */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-serif text-3xl font-extralight md:text-4xl text-gray-900 dark:text-white mb-6"
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
    </AuroraBackground>
  );
};

export default AboutUs;