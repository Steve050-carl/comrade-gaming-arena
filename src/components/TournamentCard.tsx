import { Calendar, Users, MapPin, Trophy, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Tournament {
  id: string;
  title: string;
  game: string;
  date: string;
  time: string;
  location: string;
  entryFee: number;
  prize: string;
  participants: number;
  maxParticipants: number;
  status: 'upcoming' | 'live' | 'completed';
  gameIcon: string;
}

interface TournamentCardProps {
  tournament: Tournament;
}

const TournamentCard = ({ tournament }: TournamentCardProps) => {
  const statusColors = {
    upcoming: 'bg-gaming-blue text-background',
    live: 'bg-gaming-green text-background',
    completed: 'bg-muted text-muted-foreground'
  };

  const isRegistrationOpen = tournament.status === 'upcoming' && tournament.participants < tournament.maxParticipants;

  return (
    <Card className="group hover:shadow-neon transition-all duration-300 hover:-translate-y-1 border-border bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{tournament.gameIcon}</div>
            <div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-gaming-green transition-colors">
                {tournament.title}
              </h3>
              <p className="text-sm text-muted-foreground">{tournament.game}</p>
            </div>
          </div>
          <Badge className={statusColors[tournament.status]}>
            {tournament.status.charAt(0).toUpperCase() + tournament.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 text-gaming-green" />
          <span>{tournament.date} at {tournament.time}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-gaming-green" />
          <span>{tournament.location}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4 text-gaming-green" />
          <span>{tournament.participants}/{tournament.maxParticipants} players</span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center space-x-2">
            <Coins className="h-4 w-4 text-gaming-orange" />
            <span className="text-sm font-medium">KSh {tournament.entryFee}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="h-4 w-4 text-gaming-orange" />
            <span className="text-sm font-bold text-gaming-orange">{tournament.prize}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        {isRegistrationOpen ? (
          <Button 
            variant="gaming" 
            className="w-full"
            disabled={!isRegistrationOpen}
          >
            Register Now - KSh {tournament.entryFee}
          </Button>
        ) : tournament.status === 'live' ? (
          <Button variant="tournament" className="w-full">
            Watch Live
          </Button>
        ) : (
          <Button variant="ghost" className="w-full" disabled>
            Registration Closed
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default TournamentCard;