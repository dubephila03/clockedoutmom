import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EssenceSection from "@/components/EssenceSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import AboutSection from "@/components/AboutSection";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EssenceSection />
      <ExperiencesSection />
      <AboutSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
