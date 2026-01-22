import { Linkedin, ArrowRight, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-bg overflow-hidden">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-extrabold gradient-text leading-tight">
              Cyber Wins
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground">
              Where Cybersecurity Leaders Share Their Victories
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              Join us as we explore the stories behind the successes in
              cybersecurity. Learn from industry leaders who are shaping the
              future of digital security.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Follow on LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-6 gap-2 border-primary text-primary hover:bg-primary/10"
              >
                Get Involved
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="text-center">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl mx-auto mb-6">
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
