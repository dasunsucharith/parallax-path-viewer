import React from 'react';
import { FeatureSteps } from '@/components/ui/feature-section';

const processSteps = [
  {
    step: "Step 1",
    title: "Discovery & Strategy",
    content: "We dive deep to understand your business, goals, and target audience to craft a tailored strategy.",
    image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // New Pexels image
  },
  {
    step: "Step 2",
    title: "Design & Development",
    content: "Bringing your vision to life with stunning UI/UX design and robust, scalable web development.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // New Pexels image
  },
  {
    step: "Step 3",
    title: "Launch & Optimize",
    content: "Deploying your project with precision and continuously optimizing for performance and user engagement.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Keeping this one
  },
];

const OurProcess = () => {
  return (
    <FeatureSteps
      title="Our Process"
      features={processSteps}
      autoPlayInterval={5000} // Adjust as needed
    />
  );
};

export default OurProcess;