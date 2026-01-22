import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const GetInvolvedSection = () => {
  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          <span className="gradient-text-orange">Get</span>{" "}
          <span className="text-foreground">Involved</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Want to share your cyber wins? We're always looking for inspiring stories and
          leaders to feature on our podcast.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2"
            asChild
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSe7QAW-iyyNSDYUHQEzYh0ajiL--K0Y9Sg21YeLalfQhrY1ZA/viewform?usp=send_form" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Apply to Be a Guest
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 gap-2"
            asChild
          >
            <a 
              href="https://www.linkedin.com/company/exclusive-networks-podcast-series/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
