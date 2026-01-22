interface CyberWinsSectionProps {
  summary?: string;
}

const CyberWinsSection = ({ summary }: CyberWinsSectionProps) => {
  return (
    <section className="bg-background py-16 lg:py-20 border-t border-border shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Cyber Wins Header */}
          <h2 className="text-4xl lg:text-5xl font-bold italic mb-8">
            <span className="text-cyber-purple">Cyber </span>
            <span className="gradient-text-orange">Wins</span>
          </h2>
          
          {/* Summary Text */}
          <p 
            className="text-foreground text-base lg:text-lg leading-relaxed text-left"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {summary || 'Summary coming soon...'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CyberWinsSection;
