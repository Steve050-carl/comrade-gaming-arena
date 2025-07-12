import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Trophy, Users, Plus, Edit, Trash2, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AdminPanel = () => {
  const [tournaments, setTournaments] = useState([
    { id: 1, name: "FIFA 24 Championship", game: "FIFA", date: "2025-01-15", status: "active", participants: 32, prize: "15,000" },
    { id: 2, name: "Tekken Tournament", game: "Tekken", date: "2025-01-20", status: "upcoming", participants: 16, prize: "10,000" },
  ]);

  const [newTournament, setNewTournament] = useState({
    name: "",
    game: "",
    date: "",
    prize: "",
    description: "",
    maxParticipants: ""
  });

  const handleCreateTournament = () => {
    if (newTournament.name && newTournament.game) {
      const tournament = {
        id: tournaments.length + 1,
        name: newTournament.name,
        game: newTournament.game,
        date: newTournament.date,
        status: "upcoming",
        participants: 0,
        prize: newTournament.prize
      };
      setTournaments([...tournaments, tournament]);
      setNewTournament({ name: "", game: "", date: "", prize: "", description: "", maxParticipants: "" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">Manage tournaments, players, and gaming events</p>
        </div>

        <Tabs defaultValue="tournaments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
            <TabsTrigger value="create">Create Event</TabsTrigger>
            <TabsTrigger value="players">Players</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="tournaments">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-gaming-gold" />
                  Tournament Management
                </CardTitle>
                <CardDescription>View and manage all gaming tournaments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tournaments.map((tournament) => (
                    <div key={tournament.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-card/50">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{tournament.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {tournament.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {tournament.participants} players
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            KSh {tournament.prize}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={tournament.status === "active" ? "default" : "secondary"}>
                          {tournament.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-gaming-green" />
                  Create New Tournament
                </CardTitle>
                <CardDescription>Set up a new gaming tournament</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Tournament Name</Label>
                    <Input
                      id="name"
                      value={newTournament.name}
                      onChange={(e) => setNewTournament({...newTournament, name: e.target.value})}
                      placeholder="FIFA Championship 2025"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="game">Game</Label>
                    <Select value={newTournament.game} onValueChange={(value) => setNewTournament({...newTournament, game: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a game" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FIFA">FIFA 24</SelectItem>
                        <SelectItem value="Tekken">Tekken 8</SelectItem>
                        <SelectItem value="PUBG">PUBG Mobile</SelectItem>
                        <SelectItem value="COD">Call of Duty</SelectItem>
                        <SelectItem value="MK">Mortal Kombat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={newTournament.date}
                      onChange={(e) => setNewTournament({...newTournament, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prize">Prize Pool (KSh)</Label>
                    <Input
                      id="prize"
                      value={newTournament.prize}
                      onChange={(e) => setNewTournament({...newTournament, prize: e.target.value})}
                      placeholder="10000"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newTournament.description}
                      onChange={(e) => setNewTournament({...newTournament, description: e.target.value})}
                      placeholder="Tournament rules and details..."
                    />
                  </div>
                </div>
                <Button onClick={handleCreateTournament} className="w-full">
                  Create Tournament
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="players">
            <Card>
              <CardHeader>
                <CardTitle>Player Management</CardTitle>
                <CardDescription>View registered players and their statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Player management features coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
                <CardDescription>Tournament statistics and performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPanel;