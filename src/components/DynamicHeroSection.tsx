import type { Guest } from "@/types/guest";
import DynamicChatWidget from "./DynamicChatWidget";

interface DynamicHeroSectionProps {
  guest: Guest;
}

const DynamicHeroSection = ({ guest }: DynamicHeroSectionProps) => {
  return (
    <section className="relative gradient-bg overflow-hidden">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary shadow-2xl mb-8">
            <img
              src={guest.profilePic}
              alt={`${guest.name} - Cybersecurity Leader`}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold italic gradient-text mb-4">
            {guest.name}
          </h1>
          <p className="text-lg lg:text-xl gradient-text-orange font-medium max-w-2xl mb-8">
            {guest.title}
          </p>
          
          {/* Guest Summary */}
          <div 
            className="text-muted-foreground text-base lg:text-lg max-w-3xl leading-relaxed"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {guest.summary || 'Summary coming soon...'}
          </div>
        </div>
      </div>

      {/* Chat Widget with guest-specific webhook */}
      <DynamicChatWidget webhookUrl={guest.chatbotWebhook} guestName={guest.name} />
    </section>
  );
};

export default DynamicHeroSection;
