import TournamentCard from "./TournamentCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedTournaments = () => {
  const tournaments = [
    {
      id: "1",
      title: "FIFA 24 Championship",
      game: "EA Sports FIFA 24",
      date: "Jan 15, 2025",
      time: "2:00 PM",
      location: "University of Nairobi - ICT Lab",
      entryFee: 200,
      prize: "KSh 15,000",
      participants: 28,
      maxParticipants: 32,
      status: "upcoming" as const,
      gameIcon: "⚽"
    },
    {
      id: "2", 
      title: "Tekken 8 Showdown",
      game: "Tekken 8",
      date: "Jan 18, 2025",
      time: "4:00 PM", 
      location: "KIMC Gaming Lounge",
      entryFee: 150,
      prize: "KSh 10,000",
      participants: 16,
      maxParticipants: 24,
      status: "upcoming" as const,
      gameIcon: "👊"
    },
    {
      id: "3",
      title: "PUBG Mobile Squad Battle",
      game: "PUBG Mobile",
      date: "Jan 12, 2025",
      time: "6:00 PM",
      location: "Kenyatta University - Tech Hub",
      entryFee: 100,
      prize: "KSh 8,000",
      participants: 64,
      maxParticipants: 64,
      status: "live" as const,
      gameIcon: "🎯"
    },
    {
      id: "4",
      title: "Call of Duty Warzone",
      game: "COD Warzone",
      date: "Jan 20, 2025",
      time: "3:00 PM",
      location: "Strathmore Gaming Arena",
      entryFee: 250,
      prize: "KSh 20,000",
      participants: 8,
      maxParticipants: 40,
      status: "upcoming" as const,
      gameIcon: "🔫"
    },
    {
      id: "5",
      title: "Mortal Kombat 1 Tournament",
      game: "Mortal Kombat 1",
      date: "Jan 22, 2025",
      time: "5:00 PM",
      location: "USIU Gaming Center", 
      entryFee: 180,
      prize: "KSh 12,000",
      participants: 12,
      maxParticipants: 20,
      status: "upcoming" as const,
      gameIcon: "🥊"
    },
    {
      id: "6",
      title: "Candy Crush Ultimate Challenge",
      game: "Candy Crush Saga",
      date: "Jan 14, 2025", 
      time: "1:00 PM",
      location: "Multimedia University",
      entryFee: 50,
      prize: "KSh 3,000",
      participants: 45,
      maxParticipants: 50,
      status: "upcoming" as const,
      gameIcon: "🍭"
    }
  ];

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Featured Tournaments
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the hottest gaming competitions on campus. From FIFA to Candy Crush - there's something for every gamer!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group border-gaming-green text-gaming-green hover:bg-gaming-green hover:text-background">
            View All Tournaments
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTournaments;