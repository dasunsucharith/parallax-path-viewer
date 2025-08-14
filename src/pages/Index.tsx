// Update this page (the content is just a fallback if you fail to update the page)

import { DemoVariant1 } from "@/components/demos/AnimatedGalleryDemo";
import { TextRevealDemo } from "@/components/demos/TextRevealDemo";
import AboutUs from "@/components/AboutUs";
import TrustedClients from "@/components/TrustedClients";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import OurProcess from "@/components/OurProcess";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <DemoVariant1 />
      <TrustedClients />
      <Services />
      <Portfolio />
      <OurProcess />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;