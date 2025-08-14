import React from 'react';
import { motion } from 'framer-motion';
import { Gallery4 } from "@/components/ui/gallery4"; // Import Gallery4

const projects = [
  {
    title: "E-commerce Redesign",
    client: "FashionForward Co.",
    description: "Complete overhaul of an existing e-commerce platform to improve user experience and conversion rates.",
    results: "Increased conversion rate by 25% and reduced bounce rate by 15%.",
    image: "https://picsum.photos/seed/ecommerce/800/600",
    link: "#",
  },
  {
    title: "SaaS Dashboard Development",
    client: "DataInsights Inc.",
    description: "Developed an intuitive and powerful SaaS dashboard for data visualization and analytics.",
    results: "Improved user engagement by 30% and reduced data processing time by 50%.",
    image: "https://picsum.photos/seed/dashboard/800/600",
    link: "#",
  },
  {
    title: "Non-Profit Website Launch",
    client: "HelpingHands Foundation",
    description: "Designed and launched a new website to increase donations and volunteer sign-ups.",
    results: "Increased online donations by 150% in the first quarter and volunteer sign-ups by 80%.",
    image: "https://picsum.photos/seed/nonprofit/800/600",
    link: "#",
  },
  {
    title: "Mobile-First Blog Platform",
    client: "Wanderlust Diaries",
    description: "Created a responsive blog platform optimized for mobile users to share travel stories.",
    results: "Achieved 90% mobile user satisfaction and 40% increase in page views from mobile devices.",
    image: "https://picsum.photos/seed/blog/800/600",
    link: "#",
  },
  {
    title: "Local Business Directory",
    client: "Community Connect",
    description: "Developed a comprehensive online directory to connect local businesses with customers.",
    results: "Increased local business sign-ups by 70% and customer inquiries by 60% within six months.",
    image: "https://picsum.photos/seed/directory/800/600",
    link: "#",
  },
  {
    title: "Educational Portal",
    client: "LearnSphere Academy",
    description: "Built an interactive educational portal with online courses and student management features.",
    results: "Improved student completion rates by 20% and reduced administrative overhead by 35%.",
    image: "https://picsum.photos/seed/education/800/600",
    link: "#",
  },
];

const Portfolio = () => {
  const galleryItems = projects.map(project => ({
    id: project.title.replace(/\s+/g, '-').toLowerCase(), // Create a simple ID
    title: project.title,
    description: `${project.description} Results: ${project.results}`, // Combine description and results
    href: project.link,
    image: project.image,
  }));

  return (
    <Gallery4
      id="portfolio"
      className="gallery4-section"
      title="Our Portfolio"
      description="Discover how we've helped clients achieve their goals with our innovative web solutions."
      items={galleryItems}
    />
  );
};

export default Portfolio;