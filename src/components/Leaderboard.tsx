import { Trophy, Medal, Award, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Leaderboard = () => {
  const topPlayers = [
    {
      rank: 1,
      name: "KiprotichKE",
      university: "University of Nairobi",
      points: 2450,
      wins: 28,
      tournaments: 35,
      favoriteGame: "FIFA 24",
      avatar: "🎮",
      tier: "Diamond"
    },
    {
      rank: 2,
      name: "NairobiNinja",
      university: "Kenyatta University", 
      points: 2380,
      wins: 25,
      tournaments: 32,
      favoriteGame: "Tekken 8",
      avatar: "🥋",
      tier: "Diamond"
    },
    {
      rank: 3,
      name: "CyberWarrior254",
      university: "Strathmore University",
      points: 2210,
      wins: 22,
      tournaments: 28,
      favoriteGame: "COD Warzone",
      avatar: "⚔️",
      tier: "Platinum"
    },
    {
      rank: 4,
      name: "GameMaster_KE",
      university: "USIU",
      points: 2050,
      wins: 20,
      tournaments: 26,
      favoriteGame: "PUBG Mobile",
      avatar: "🏆",
      tier: "Platinum"
    },
    {
      rank: 5,
      name: "PixelPro",
      university: "Multimedia University",
      points: 1890,
      wins: 18,
      tournaments: 24,
      favoriteGame: "Mortal Kombat 1",
      avatar: "💀",
      tier: "Gold"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-gaming-orange" />;
      case 2:
        return <Medal className="h-6 w-6 text-muted-foreground" />;
      case 3:
        return <Award className="h-6 w-6 text-gaming-orange opacity-70" />;
      default:
        return <User className="h-6 w-6 text-gaming-green" />;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Diamond":
        return "bg-gaming-blue text-background";
      case "Platinum":
        return "bg-gaming-purple text-background";
      case "Gold":
        return "bg-gaming-orange text-background";
      default:
        return "bg-gaming-green text-background";
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Campus Champions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the top gaming legends across Kenyan universities. Think you can challenge them?
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {topPlayers.map((player, index) => (
            <Card 
              key={player.rank} 
              className={`mb-4 hover:shadow-neon transition-all duration-300 border-border bg-card/50 backdrop-blur-sm ${
                player.rank <= 3 ? 'ring-2 ring-gaming-green/20' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Rank & Icon */}
                    <div className="flex items-center space-x-3">
                      {getRankIcon(player.rank)}
                      <div className="text-3xl">{player.avatar}</div>
                    </div>

                    {/* Player Info */}
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-bold text-foreground">{player.name}</h3>
                        <Badge className={getTierColor(player.tier)}>
                          {player.tier}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{player.university}</p>
                      <p className="text-xs text-gaming-green">Favorite: {player.favoriteGame}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex space-x-8 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gaming-orange">{player.points}</div>
                      <div className="text-xs text-muted-foreground">Points</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gaming-green">{player.wins}</div>
                      <div className="text-xs text-muted-foreground">Wins</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gaming-blue">{player.tournaments}</div>
                      <div className="text-xs text-muted-foreground">Tournaments</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 rounded-lg bg-gradient-secondary">
          <h3 className="text-2xl font-bold mb-4 text-background">Ready to Climb the Leaderboard?</h3>
          <p className="text-background/80 mb-6">Join tournaments, earn points, and become the next campus gaming legend!</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-background text-gaming-purple font-semibold px-6 py-3 rounded-lg hover:bg-background/90 transition-colors">
              Register for Tournament
            </button>
            <button className="border-2 border-background text-background font-semibold px-6 py-3 rounded-lg hover:bg-background hover:text-gaming-purple transition-colors">
              View Full Rankings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;