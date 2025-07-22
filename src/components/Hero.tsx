import { Button } from "@/components/ui/button";
import { ChevronDown, TrendingUp } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-primary/60 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">The World of</span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Deepak Singam
            </span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed">
              "Success in trading comes from rigorous analysis, disciplined execution, and continuous learning."
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-white/80 leading-relaxed">
              Finance enthusiast, active trader, and data analyst passionate about 
              decoding market patterns and building profitable trading strategies. 
              Welcome to my world of numbers, insights, and financial growth.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#trades")}
              className="bg-gradient-primary hover:bg-gradient-accent text-white border-0 shadow-primary hover:shadow-accent transition-all duration-300 px-8 py-4 text-lg font-semibold group"
            >
              <TrendingUp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View My World
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#trades")}
          className="text-white/70 hover:text-white transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;