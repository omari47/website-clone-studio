import { useState } from "react";
import type { Guest } from "@/types/guest";
import { Play, X } from "lucide-react";
import fullInterviewImg from "@/assets/full-interview.png";
import introductionImg from "@/assets/introduction.png";
import highlightsImg from "@/assets/highlights.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DynamicFeaturedContentProps {
  guest: Guest;
}

// Convert URLs to embeddable format
const getEmbedUrl = (url: string): string => {
  if (url.includes("drive.google.com")) {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    if (url.includes("/preview")) return url;
  }
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoIdMatch = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
  }
  if (url.includes("vimeo.com")) {
    const vimeoIdMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoIdMatch) {
      return `https://player.vimeo.com/video/${vimeoIdMatch[1]}`;
    }
  }
  return url;
};

const DynamicFeaturedContent = ({ guest }: DynamicFeaturedContentProps) => {
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    url: string;
  } | null>(null);
  const [showHighlightsModal, setShowHighlightsModal] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "Full Interview",
      description: `Complete conversation with ${guest.name}`,
      thumbnail: fullInterviewImg,
      url: guest.fullInterview,
      type: "single" as const,
    },
    {
      id: 2,
      title: "Introduction",
      description: `Meet ${guest.name}`,
      thumbnail: introductionImg,
      url: guest.introVideo,
      type: "single" as const,
    },
    {
      id: 3,
      title: "Highlights",
      description: "Best moments from the interview",
      thumbnail: highlightsImg,
      url: "",
      type: "highlights" as const,
    },
  ];

  const handleVideoClick = (video: typeof videos[0]) => {
    if (video.type === "highlights") {
      setShowHighlightsModal(true);
    } else {
      setActiveVideo({ title: video.title, url: video.url });
    }
  };

  const handleHighlightClick = (url: string) => {
    setActiveHighlight(url);
  };

  return (
    <>
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
                onClick={() => handleVideoClick(video)}
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

      {/* Single Video Modal */}
      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle>{activeVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            {activeVideo && (
              <iframe
                src={getEmbedUrl(activeVideo.url)}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Highlights Grid Modal */}
      <Dialog open={showHighlightsModal} onOpenChange={(open) => {
        setShowHighlightsModal(open);
        if (!open) setActiveHighlight(null);
      }}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Highlights</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Video Player */}
            <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
              <iframe
                src={getEmbedUrl(activeHighlight || guest.highlights[0])}
                title="Highlight"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-3 gap-3">
              {guest.highlights.map((url, index) => (
                <div
                  key={index}
                  onClick={() => setActiveHighlight(url)}
                  className={`aspect-video relative rounded-lg overflow-hidden cursor-pointer group bg-muted transition-all ${
                    (activeHighlight || guest.highlights[0]) === url 
                      ? "ring-2 ring-primary" 
                      : "hover:ring-2 hover:ring-primary/50"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-3 h-3 text-[hsl(var(--cyber-pink))] ml-0.5" fill="currentColor" />
                      </div>
                      <span className="text-xs font-medium text-foreground mt-1 block">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DynamicFeaturedContent;
