const InterviewSummary = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            <span className="gradient-text">About This Interview</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            In this episode, we sit down with Dan Wilkes, a seasoned cybersecurity leader with over 
            20 years of experience protecting enterprise organizations from evolving digital threats. 
            Dan shares his journey from a junior security analyst to becoming a Chief Information 
            Security Officer, highlighting the key victories and lessons learned along the way.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Discover how Dan led his team through a major ransomware attack, implemented zero-trust 
            architecture across a global organization, and built a security culture that empowers 
            every employee to be a defender. This conversation is packed with actionable insights 
            for security professionals at every level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InterviewSummary;
