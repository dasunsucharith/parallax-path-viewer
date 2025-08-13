// Update this page (the content is just a fallback if you fail to update the page)

import { DemoVariant1 } from "@/components/demos/AnimatedGalleryDemo";
import { TextRevealDemo } from "@/components/demos/TextRevealDemo";
import AboutUs from "@/components/AboutUs";
import TrustedClients from "@/components/TrustedClients";
import Services from "@/components/Services";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <DemoVariant1 />
      <TrustedClients />
      <Services />
      <AboutUs />
    </main>
  );
};

export default Index;