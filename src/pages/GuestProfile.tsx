import { useParams, Link } from "react-router-dom";
import guestsData from "@/data/guests.json";
import type { Guest, GuestsData } from "@/types/guest";
import DynamicHeroSection from "@/components/DynamicHeroSection";
import DynamicFeaturedContent from "@/components/DynamicFeaturedContent";
import AboutSection from "@/components/AboutSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, UserX } from "lucide-react";

const GuestProfile = () => {
  const { guestId } = useParams<{ guestId: string }>();
  
  // Find the guest in the JSON data
  const typedGuestsData = guestsData as GuestsData;
  const guest: Guest | undefined = typedGuestsData.guests.find(
    (g) => g.id === guestId
  );

  // Profile not found state
  if (!guest) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <UserX className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Profile Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            We couldn't find a guest profile for "{guestId}". The profile may have been moved or doesn't exist.
          </p>
          <Button asChild className="rounded-full px-8 gap-2">
            <Link to="/">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <DynamicHeroSection guest={guest} />
      <DynamicFeaturedContent guest={guest} />
      <AboutSection />
      <GetInvolvedSection />
      <Footer />
    </div>
  );
};

export default GuestProfile;
