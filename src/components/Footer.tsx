import { Gamepad2, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const gameCategories = [
    "FIFA Tournaments", "Tekken Battles", "PUBG Mobile", "Call of Duty", "Mortal Kombat", "Candy Crush"
  ];

  const universities = [
    "University of Nairobi", "Kenyatta University", "Strathmore University", 
    "USIU-Africa", "Multimedia University", "KIMC"
  ];

  const quickLinks = [
    { name: "How to Register", href: "/guide" },
    { name: "Tournament Rules", href: "/rules" },
    { name: "Prize Distribution", href: "/prizes" },
    { name: "M-Pesa Payments", href: "/payments" },
    { name: "Live Streaming", href: "/stream" },
    { name: "Contact Support", href: "/support" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-gaming-green" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CampusPlay KE
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Kenya's premier campus e-sports platform. Connect, compete, and conquer in the most exciting gaming tournaments across universities.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-gaming-green">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gaming-blue">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gaming-purple">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gaming-red">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Game Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Popular Games</h3>
            <ul className="space-y-2">
              {gameCategories.map((category) => (
                <li key={category}>
                  <a href="#" className="text-muted-foreground hover:text-gaming-green transition-colors text-sm">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Universities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Partner Universities</h3>
            <ul className="space-y-2">
              {universities.map((university) => (
                <li key={university}>
                  <a href="#" className="text-muted-foreground hover:text-gaming-green transition-colors text-sm">
                    {university}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-gaming-green transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-gaming-green" />
                <span>info@campusplay.ke</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-gaming-green" />
                <span>+254 700 123 456</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="bg-gradient-secondary rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-background mb-2">Never Miss a Tournament!</h3>
            <p className="text-background/80 mb-4">Get tournament alerts, gaming tips, and exclusive prizes straight to your phone!</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="text" 
                placeholder="Enter your phone number"
                className="flex-1 px-4 py-2 rounded-lg border-0 bg-background text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="default" className="bg-background text-gaming-purple hover:bg-background/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>&copy; 2025 CampusPlay KE. All rights reserved. Made with 💚 for Kenyan gamers.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gaming-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gaming-green transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gaming-green transition-colors">M-Pesa Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;