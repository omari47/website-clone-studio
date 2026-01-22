import ChatWidget from "./ChatWidget";

const HeroSection = () => {
  return (
    <section className="relative gradient-bg overflow-hidden">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary shadow-2xl mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Dan Wilkins - Cybersecurity Leader"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold italic gradient-text mb-4">
            Dan Wilkins
          </h1>
          <p className="text-lg lg:text-xl gradient-text-orange font-medium max-w-2xl">
            CISO | Trusted advisor in cybersecurity strategy and risk management
          </p>
        </div>
      </div>

      {/* Chat Widget */}
      <ChatWidget />
    </section>
  );
};

export default HeroSection;
