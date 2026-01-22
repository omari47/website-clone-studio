import { useState } from "react";
import { Play } from "lucide-react";

interface LazyVideoIframeProps {
  url: string;
  title: string;
  description?: string;
  thumbnail?: string;
}

// Convert Google Drive share links to embeddable preview URLs
const getEmbedUrl = (url: string): string => {
  // Handle Google Drive links
  if (url.includes("drive.google.com")) {
    // Extract file ID from various Google Drive URL formats
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    // If already in preview format, return as-is
    if (url.includes("/preview")) {
      return url;
    }
  }
  
  // Handle YouTube links
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoIdMatch = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
  }
  
  // Handle Vimeo links
  if (url.includes("vimeo.com")) {
    const vimeoIdMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoIdMatch) {
      return `https://player.vimeo.com/video/${vimeoIdMatch[1]}`;
    }
  }
  
  return url;
};

const LazyVideoIframe = ({ url, title, description, thumbnail }: LazyVideoIframeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const embedUrl = getEmbedUrl(url);

  const handlePlay = () => {
    setIsLoaded(true);
  };

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
      {/* Video Container */}
      <div className="aspect-video relative overflow-hidden bg-muted">
        {isLoaded ? (
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                <span className="text-muted-foreground text-lg font-medium">{title}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button
                onClick={handlePlay}
                className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label={`Play ${title}`}
              >
                <Play className="w-6 h-6 text-[hsl(var(--cyber-pink))] ml-1" fill="currentColor" />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Video Info */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-foreground mb-1">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

export default LazyVideoIframe;
