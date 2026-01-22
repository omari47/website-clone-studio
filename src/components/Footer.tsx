import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h3 className="text-2xl font-bold gradient-text">
            Cyber Wins
          </h3>
          <img 
            src={logoImg} 
            alt="Cyber Wins Logo" 
            className="w-10 h-10 object-contain"
          />
        </div>
        <p className="text-muted/80 text-sm">
          © 2026 Cyber Wins. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
