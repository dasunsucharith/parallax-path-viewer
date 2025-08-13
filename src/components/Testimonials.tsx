import React from 'react';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonial';

const testimonialsData = [
  {
    quote: "Working with this team was a game-changer for our online presence. Their expertise in web development and attention to detail truly exceeded our expectations. Our new website has significantly boosted our customer engagement.",
    name: "Sarah Chen",
    designation: "CEO, TechInnovate Solutions",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "The e-commerce solution they built for us is robust, user-friendly, and has directly led to a 25% increase in sales within the first quarter. Their team is professional, responsive, and truly understands our business needs.",
    name: "David Lee",
    designation: "Marketing Director, Global Retail Co.",
    src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // New Pexels image
  },
  {
    quote: "Their UI/UX design process is exceptional. They transformed our complex ideas into an intuitive and visually appealing interface that our users love. The feedback has been overwhelmingly positive.",
    name: "Maria Garcia",
    designation: "Product Manager, Creative Apps Inc.",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 px-4 md:px-8 lg:px-16 bg-background dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-3xl font-extralight md:text-4xl text-gray-900 dark:text-white mb-12">
          What Our Clients Say
        </h2>
        <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
      </div>
    </section>
  );
};

export default Testimonials;