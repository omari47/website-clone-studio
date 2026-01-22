import type { Guest } from "@/types/guest";
import { Play } from "lucide-react";
import fullInterviewImg from "@/assets/full-interview.png";
import introductionImg from "@/assets/introduction.png";
import highlightsImg from "@/assets/highlights.png";

interface DynamicFeaturedContentProps {
  guest: Guest;
}

const DynamicFeaturedContent = ({ guest }: DynamicFeaturedContentProps) => {
  const videos = [
    {
      id: 1,
      title: "Full Interview",
      description: `Complete conversation with ${guest.name}`,
      thumbnail: fullInterviewImg,
    },
    {
      id: 2,
      title: "Introduction",
      description: `Meet ${guest.name}`,
      thumbnail: introductionImg,
    },
    {
      id: 3,
      title: "Highlights",
      description: "Best moments from the interview",
      thumbnail: highlightsImg,
    },
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Featured</span>{" "}
          <span className="text-foreground">Content</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              {/* Video Thumbnail */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-6 h-6 text-[hsl(var(--cyber-pink))] ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground mb-1">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicFeaturedContent;
