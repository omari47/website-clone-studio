import { useState } from "react";
import type { Guest } from "@/types/guest";
import LazyVideoIframe from "./LazyVideoIframe";
import { Play, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import fullInterviewImg from "@/assets/full-interview.png";
import introductionImg from "@/assets/introduction.png";
import highlightsImg from "@/assets/highlights.png";

interface DynamicFeaturedContentProps {
  guest: Guest;
}

const DynamicFeaturedContent = ({ guest }: DynamicFeaturedContentProps) => {
  const [showAllHighlights, setShowAllHighlights] = useState(false);

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Featured</span>{" "}
          <span className="text-foreground">Content</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Full Interview */}
          <LazyVideoIframe
            url={guest.fullInterview}
            title="Full Interview"
            description={`Complete conversation with ${guest.name}`}
            thumbnail={fullInterviewImg}
          />

          {/* Introduction Video */}
          <LazyVideoIframe
            url={guest.introVideo}
            title="Introduction"
            description={`Meet ${guest.name}`}
            thumbnail={introductionImg}
          />

          {/* Highlights - Single Card Container */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={highlightsImg}
                alt="Highlights"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-[hsl(var(--cyber-pink))] ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg text-foreground mb-1">Highlights</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Best moments from the interview
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2"
                onClick={() => setShowAllHighlights(!showAllHighlights)}
              >
                {showAllHighlights ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Hide Highlights
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    View All Highlights
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Expanded Highlights Grid */}
        {showAllHighlights && (
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="gradient-text">All Highlights</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guest.highlights.map((highlightUrl, index) => (
                <LazyVideoIframe
                  key={`highlight-${index}`}
                  url={highlightUrl}
                  title={`Highlight ${index + 1}`}
                  description="Key moment from the interview"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DynamicFeaturedContent;
