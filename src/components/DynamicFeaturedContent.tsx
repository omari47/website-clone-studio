import type { Guest } from "@/types/guest";
import LazyVideoIframe from "./LazyVideoIframe";

interface DynamicFeaturedContentProps {
  guest: Guest;
}

const DynamicFeaturedContent = ({ guest }: DynamicFeaturedContentProps) => {
  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Featured</span>{" "}
          <span className="text-foreground">Content</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Full Interview */}
          <LazyVideoIframe
            url={guest.fullInterview}
            title="Full Interview"
            description={`Complete conversation with ${guest.name}`}
          />

          {/* Introduction Video */}
          <LazyVideoIframe
            url={guest.introVideo}
            title="Introduction"
            description={`Meet ${guest.name}`}
          />

          {/* Highlights - dynamically mapped */}
          {guest.highlights.map((highlightUrl, index) => (
            <LazyVideoIframe
              key={`highlight-${index}`}
              url={highlightUrl}
              title={`Highlight ${index + 1}`}
              description={`Key moment from the interview`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicFeaturedContent;
