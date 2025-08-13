import React from 'react';
import { motion } from 'framer-motion';
// Import specific Lucide icons as needed
import { Code, ShoppingCart, Palette, Rocket, Search, LifeBuoy } from 'lucide-react';

const services = [
  {
    title: "Custom Web Development",
    description: "Tailored websites built from scratch to perfectly match your unique business needs and vision.",
    icon: Code, // Assign icon component
    bgImage: 'https://images.unsplash.com/photo-1635776062360-af423602aff3?w=800&q=80',
  },
  {
    title: "E-commerce Solutions",
    description: "Powerful online stores designed to convert visitors into loyal customers and drive sales.",
    icon: ShoppingCart,
    bgImage: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=800&q=80',
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and beautiful user interfaces that provide seamless experiences and delight your audience.",
    icon: Palette,
    bgImage: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&q=80',
  },
  {
    title: "Web Application Development",
    description: "Robust and scalable web applications that streamline your operations and enhance user engagement.",
    icon: Rocket,
    bgImage: 'https://images.unsplash.com/photo-1635776063328-153b13e3c245?w=800&q=80',
  },
  {
    title: "SEO & Digital Marketing",
    description: "Boost your online visibility and attract more organic traffic with our expert search engine optimization strategies.",
    icon: Search,
    bgImage: 'https://images.unsplash.com/photo-1635776062360-af423602aff3?w=800&q=80',
  },
  {
    title: "Website Maintenance & Support",
    description: "Keep your website secure, updated, and performing optimally with our reliable ongoing support.",
    icon: LifeBuoy,
    bgImage: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=800&q=80',
  },
];

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

const Services = () => {
  return (
    <motion.section
      className="py-32 px-4 md:px-8 lg:px-16 bg-background dark:bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="font-serif text-4xl font-extralight md:text-5xl text-gray-900 dark:text-white mb-12 text-center"
          variants={itemVariants}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="scale-in group visible cursor-pointer text-left"
              style={{ transform: 'translateY(0px) scale(1)' }}
              variants={itemVariants}
            >
              <div
                className="relative transform overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 group-hover:scale-105 hover:shadow-xl"
                style={{
                  background: `url(${service.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                    {/* Render Lucide icon */}
                    {service.icon && <service.icon className="h-6 w-6 text-white" />}
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-extralight text-white">
                    {service.title}
                  </h3>
                  <p className="mb-4 font-sans text-sm text-white/80">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
