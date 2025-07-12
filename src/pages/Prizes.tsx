import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Gift, DollarSign, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Prizes = () => {
  const tournamentPrizes = [
    {
      tournament: "FIFA 24 Championship",
      totalPrize: "15,000",
      first: "9,000",
      second: "4,500",
      third: "1,500",
      participants: 32,
      special: "Golden Boot Award: KSh 1,000"
    },
    {
      tournament: "Tekken Tournament",
      totalPrize: "10,000",
      first: "6,000",
      second: "3,000",
      third: "1,000",
      participants: 16,
      special: "Perfect Victory Bonus: KSh 500"
    },
    {
      tournament: "PUBG Squad Battle",
      totalPrize: "20,000",
      first: "12,000",
      second: "6,000",
      third: "2,000",
      participants: 64,
      special: "Most Kills Team: KSh 2,000"
    },
    {
      tournament: "Call of Duty",
      totalPrize: "12,000",
      first: "7,200",
      second: "3,600",
      third: "1,200",
      participants: 24,
      special: "MVP Award: KSh 1,000"
    }
  ];

  const seasonalRewards = [
    {
      title: "Monthly Champion",
      description: "Win the most tournaments in a month",
      reward: "KSh 5,000 + Gaming Headset",
      icon: Star
    },
    {
      title: "University Champion",
      description: "Best performing university each semester",
      reward: "KSh 10,000 + Trophy for Campus",
      icon: Trophy
    },
    {
      title: "Sportsmanship Award",
      description: "Most respectful and fair player",
      reward: "KSh 2,000 + Special Badge",
      icon: Medal
    },
    {
      title: "Rising Star",
      description: "Best newcomer of the month",
      reward: "KSh 1,500 + Gaming Mouse",
      icon: Gift
    }
  ];

  const prizeStructure = [
    { position: "1st Place", percentage: "60%", color: "text-gaming-gold" },
    { position: "2nd Place", percentage: "30%", color: "text-gaming-blue" },
    { position: "3rd Place", percentage: "10%", color: "text-gaming-purple" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Prize Distribution
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compete for amazing prizes and recognition in Kenya's premier campus gaming tournaments
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Prize Structure */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-gaming-green" />
                Prize Structure
              </CardTitle>
              <CardDescription>How tournament winnings are distributed across positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {prizeStructure.map((prize, index) => (
                  <div key={index} className="text-center p-6 rounded-lg bg-gradient-secondary/10 border border-gaming-purple/20">
                    <div className="mb-4">
                      {index === 0 && <Trophy className="h-12 w-12 mx-auto text-gaming-gold" />}
                      {index === 1 && <Medal className="h-12 w-12 mx-auto text-gaming-blue" />}
                      {index === 2 && <Award className="h-12 w-12 mx-auto text-gaming-purple" />}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{prize.position}</h3>
                    <div className={`text-2xl font-bold ${prize.color} mb-2`}>
                      {prize.percentage}
                    </div>
                    <p className="text-sm text-muted-foreground">of total prize pool</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tournament Prizes */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Current Tournament Prizes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tournamentPrizes.map((tournament, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {tournament.tournament}
                      <Badge variant="secondary">{tournament.participants} players</Badge>
                    </CardTitle>
                    <CardDescription>
                      Total Prize Pool: <span className="text-gaming-green font-bold">KSh {tournament.totalPrize}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 rounded-lg bg-gaming-gold/10">
                        <Trophy className="h-6 w-6 mx-auto mb-1 text-gaming-gold" />
                        <p className="text-sm font-semibold">1st</p>
                        <p className="text-gaming-gold font-bold">KSh {tournament.first}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-gaming-blue/10">
                        <Medal className="h-6 w-6 mx-auto mb-1 text-gaming-blue" />
                        <p className="text-sm font-semibold">2nd</p>
                        <p className="text-gaming-blue font-bold">KSh {tournament.second}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-gaming-purple/10">
                        <Award className="h-6 w-6 mx-auto mb-1 text-gaming-purple" />
                        <p className="text-sm font-semibold">3rd</p>
                        <p className="text-gaming-purple font-bold">KSh {tournament.third}</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-gradient-secondary/10 border border-gaming-green/20">
                      <p className="text-sm font-semibold text-gaming-green">Special Prize:</p>
                      <p className="text-sm text-muted-foreground">{tournament.special}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Seasonal Rewards */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-gaming-gold" />
                Seasonal & Special Rewards
              </CardTitle>
              <CardDescription>Additional prizes for consistent performers and community champions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {seasonalRewards.map((reward, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gaming-green/20">
                      <reward.icon className="h-6 w-6 text-gaming-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{reward.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{reward.description}</p>
                      <Badge className="bg-gaming-green/20 text-gaming-green">
                        {reward.reward}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prize Payment Info */}
          <Card className="bg-gradient-secondary/10 border-gaming-purple/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-gaming-purple" />
                Prize Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• All prizes are paid via M-Pesa within 24 hours of tournament completion</p>
                <p>• Winners must provide valid M-Pesa number and ID for verification</p>
                <p>• Physical prizes (headsets, mice, trophies) are distributed at university pickup points</p>
                <p>• Prize money is subject to applicable taxes as per Kenyan law</p>
                <p>• Unclaimed prizes are forfeited after 30 days</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Prizes;