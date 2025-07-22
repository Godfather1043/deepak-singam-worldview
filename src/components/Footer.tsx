import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, TrendingUp, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Trades & P&L", href: "#trades" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                Deepak Singam
              </span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Finance enthusiast and trader sharing insights on market analysis, 
              trading strategies, and wealth building through data-driven decisions.
            </p>
            <div className="flex gap-3">
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-white/10 hover:text-accent"
                onClick={() => window.open("mailto:deepak.singam@email.com")}
              >
                <Mail className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-white/10 hover:text-accent"
                onClick={() => window.open("https://linkedin.com/in/deepaksingam")}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-white/10 hover:text-accent"
                onClick={() => window.open("https://github.com/deepaksingam")}
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-white/80 hover:text-accent transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <p className="text-white/80">
                Trading guides, risk management tools, and market analysis resources.
              </p>
              <Button variant="accent" size="sm" className="mt-4">
                Download Free Resources
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-white/60">
          <div className="flex items-center gap-1 mb-4 sm:mb-0">
            <span>© {currentYear} Deepak Singam. Made with</span>
            <Heart className="h-4 w-4 text-accent" />
            <span>for traders and investors.</span>
          </div>
          <div className="flex gap-6">
            <button className="hover:text-accent transition-colors">Privacy Policy</button>
            <button className="hover:text-accent transition-colors">Terms of Service</button>
            <button className="hover:text-accent transition-colors">Disclaimer</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;