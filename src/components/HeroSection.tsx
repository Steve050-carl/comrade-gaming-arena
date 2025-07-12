import { Button } from "@/components/ui/button";
import { Trophy, Users, Calendar, Zap } from "lucide-react";
import heroImage from "@/assets/gaming-hero.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Trophy, label: "Tournaments", value: "50+", color: "text-gaming-orange" },
    { icon: Users, label: "Players", value: "2.5K+", color: "text-gaming-green" },
    { icon: Calendar, label: "Events/Month", value: "25+", color: "text-gaming-blue" },
    { icon: Zap, label: "Prize Pool", value: "KSh 500K+", color: "text-gaming-purple" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Campus E-Sports
            </span>
            <br />
            <span className="text-foreground">Tournaments</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Kenya's biggest campus gaming community. Compete in FIFA, Tekken, PUBG Mobile, and more. 
            <span className="text-gaming-green font-semibold"> Win prizes, earn respect! 🔥</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="gaming" size="lg" className="text-lg px-8">
              Join Next Tournament
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-gaming-green text-gaming-green hover:bg-gaming-green hover:text-background">
              View Schedule
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:shadow-neon transition-all duration-300">
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Gaming Icons Row */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Featured Games</p>
            <div className="flex justify-center space-x-8 text-4xl">
              <span title="FIFA">⚽</span>
              <span title="Tekken">👊</span>
              <span title="PUBG Mobile">🎯</span>
              <span title="Call of Duty">🔫</span>
              <span title="Mortal Kombat">🥊</span>
              <span title="Candy Crush">🍭</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="w-3 h-3 bg-gaming-green rounded-full opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="w-2 h-2 bg-gaming-purple rounded-full opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce" style={{ animationDelay: '2s' }}>
        <div className="w-4 h-4 bg-gaming-orange rounded-full opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;