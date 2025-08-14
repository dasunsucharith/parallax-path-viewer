import { motion } from 'framer-motion';
import { AuroraBackground } from "@/components/ui/aurora-background";

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

const teamMembers = [
  {
    name: "Jane Doe",
    title: "Founder & Lead Developer",
    photo: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "John Smith",
    title: "Lead UI/UX Designer",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emily White",
    title: "Marketing Strategist",
    photo: "https://images.pexels.com/photos/3760303/pexels-photo-3760303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // New Pexels image
  },
];

const AboutUs = () => {
  return (
    <AuroraBackground className="h-auto">
      <motion.section
        id="about"
        className="py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-serif text-3xl font-extralight md:text-4xl text-gray-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            About Us
          </motion.h2>
          <motion.p
            className="leading-normal tracking-tight text-muted-foreground text-gray-700 dark:text-gray-300 mb-12" // Added mb-12 for spacing
            variants={itemVariants}
          >
            We’re the caffeine-fueled crew ☕ who turn wild ideas into websites that actually work (and look darn good doing it). No cookie-cutter templates, no jargon soup — just smart design, clean code, and a sprinkle of “how did they even do that?” magic ✨. Whether you need a pixel-perfect portfolio, a sales machine of an e-commerce store , or a web app your users can’t stop clicking, we’ve got you covered… and yes, we promise to make Google love you too.
          </motion.p>

          {/* Team Section */}
          <motion.h2
            className="font-serif text-3xl font-extralight md:text-4xl text-gray-900 dark:text-white mb-12 mt-16" // Added mt-16 for spacing
            variants={itemVariants}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </AuroraBackground>
  );
};

export default AboutUs;