import HeroSection from "@/components/HeroSection";
import FeaturedContent from "@/components/FeaturedContent";
import AboutSection from "@/components/AboutSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedContent />
      <AboutSection />
      <GetInvolvedSection />
      <Footer />
    </div>
  );
};

export default Index;
