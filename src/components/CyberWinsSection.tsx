interface CyberWinsSectionProps {
  summary?: string;
}

const CyberWinsSection = ({ summary }: CyberWinsSectionProps) => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header - matching home page */}
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            <span className="gradient-text">About This Interview</span>
          </h2>
          
          {/* Summary Text - matching home page styling */}
          <p 
            className="text-muted-foreground text-lg leading-relaxed"
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
