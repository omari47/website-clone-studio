import { Mic } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative gradient-bg overflow-hidden">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl mb-6">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Dan Wilkes - Cybersecurity Leader"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            Dan Wilkes
          </h3>
          <p className="text-muted-foreground text-lg">
            Chief Information Security Officer
          </p>
        </div>
      </div>

      {/* Floating Mic Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center">
          <Mic className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
