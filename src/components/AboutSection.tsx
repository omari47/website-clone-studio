import { Users, Award, Mic } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Interviews",
    description: "In-depth conversations with industry leaders",
    color: "text-[hsl(var(--cyber-purple))]",
  },
  {
    icon: Award,
    title: "Success Stories",
    description: "Real victories from the cybersecurity frontlines",
    color: "text-primary",
  },
  {
    icon: Mic,
    title: "Insights & Tips",
    description: "Actionable advice from the pros",
    color: "text-[hsl(var(--cyber-pink))]",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            What is <span className="gradient-text">Cyber Wins</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cyber Wins is a podcast series dedicated to celebrating the victories and successes in the
            cybersecurity industry. We bring you conversations with leaders, innovators, and practitioners
            who are making a real difference in protecting our digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className={`w-12 h-12 ${feature.color}`} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
