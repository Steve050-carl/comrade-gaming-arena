import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Shield, Trophy, Users, Clock, Gamepad2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Rules = () => {
  const gameRules = [
    {
      game: "FIFA 24",
      rules: [
        "Match duration: 6 minutes per half (12 minutes total)",
        "Difficulty: World Class",
        "No custom tactics or formations allowed",
        "Default squads only - no Ultimate Team",
        "Best of 3 format for finals"
      ]
    },
    {
      game: "Tekken 8",
      rules: [
        "Best of 3 rounds per match",
        "Tournament mode: Best of 5 for finals",
        "All characters allowed except guest characters",
        "Default settings only",
        "No coaching during matches"
      ]
    },
    {
      game: "PUBG Mobile",
      rules: [
        "Squad mode (4 players per team)",
        "Classic mode - Erangel/Sanhok maps",
        "No emulators allowed - mobile devices only",
        "Voice chat must be in English or Swahili",
        "No third-party applications"
      ]
    }
  ];

  const generalRules = [
    "All participants must be current university students with valid student ID",
    "Registration fee of KSh 200 must be paid before tournament day",
    "Late arrivals forfeit their matches - arrive 30 minutes early",
    "Unsportsmanlike conduct results in immediate disqualification",
    "Disputes are resolved by tournament officials - decisions are final",
    "Mobile phones must be on silent during matches",
    "No external coaching during individual matches"
  ];

  const prizes = [
    { position: "1st Place", reward: "60% of prize pool + Trophy" },
    { position: "2nd Place", reward: "30% of prize pool + Medal" },
    { position: "3rd Place", reward: "10% of prize pool + Certificate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Tournament Rules
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fair play guidelines for all CampusPlay KE tournaments
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* General Rules */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-gaming-blue" />
                General Tournament Rules
              </CardTitle>
              <CardDescription>Rules that apply to all tournaments and games</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {generalRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gaming-green/20 text-gaming-green text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Game-Specific Rules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {gameRules.map((gameRule) => (
              <Card key={gameRule.game}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gamepad2 className="h-5 w-5 text-gaming-purple" />
                    {gameRule.game}
                  </CardTitle>
                  <CardDescription>Game-specific tournament rules</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {gameRule.rules.map((rule, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gaming-green mt-2 flex-shrink-0"></div>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Prize Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-gaming-gold" />
                Prize Distribution
              </CardTitle>
              <CardDescription>How tournament winnings are distributed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {prizes.map((prize, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-gradient-secondary/10 border border-gaming-purple/20">
                    <Badge className="mb-2" variant={index === 0 ? "default" : "secondary"}>
                      {prize.position}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{prize.reward}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Important Notices */}
          <div className="space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Code of Conduct:</strong> Harassment, cheating, or toxic behavior will result in permanent ban from all CampusPlay KE events.
              </AlertDescription>
            </Alert>

            <Alert>
              <Clock className="h-4 w-4" />
              <AlertDescription>
                <strong>Punctuality:</strong> Tournament brackets are locked 15 minutes before start time. Late registrations forfeit their spot.
              </AlertDescription>
            </Alert>

            <Alert>
              <Users className="h-4 w-4" />
              <AlertDescription>
                <strong>Team Tournaments:</strong> All team members must be from the same university. Mixed-university teams are not allowed.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rules;