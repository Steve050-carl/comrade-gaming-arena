import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Phone, Mail, CreditCard, Trophy, Users, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    studentId: "",
    gamertag: "",
    selectedTournament: "",
    teamName: "",
    teamMembers: "",
    agreeTerms: false
  });

  const tournaments = [
    { id: "fifa", name: "FIFA 24 Championship", date: "Jan 15, 2025", prize: "KSh 15,000", type: "1v1" },
    { id: "tekken", name: "Tekken Tournament", date: "Jan 20, 2025", prize: "KSh 10,000", type: "1v1" },
    { id: "pubg", name: "PUBG Squad Battle", date: "Jan 25, 2025", prize: "KSh 20,000", type: "Squad" },
    { id: "cod", name: "Call of Duty Tournament", date: "Feb 1, 2025", prize: "KSh 12,000", type: "Team" }
  ];

  const universities = [
    "University of Nairobi", "Kenyatta University", "Strathmore University",
    "USIU-Africa", "Multimedia University", "KIMC", "Jomo Kenyatta University",
    "Moi University", "Egerton University", "Mount Kenya University"
  ];

  const selectedTournament = tournaments.find(t => t.id === formData.selectedTournament);
  const isTeamTournament = selectedTournament?.type === "Squad" || selectedTournament?.type === "Team";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    // Here you would integrate with Supabase for user registration
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Tournament Registration
            </h1>
            <p className="text-muted-foreground">Join the ultimate campus gaming experience</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gamepad2 className="h-5 w-5 text-gaming-green" />
                Player Registration
              </CardTitle>
              <CardDescription>Fill in your details to register for tournaments</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gamertag">Gamertag/Username</Label>
                      <Input
                        id="gamertag"
                        value={formData.gamertag}
                        onChange={(e) => setFormData({...formData, gamertag: e.target.value})}
                        placeholder="Your gaming username"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="0700123456"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* University Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">University Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="university">University</Label>
                      <Select value={formData.university} onValueChange={(value) => setFormData({...formData, university: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your university" />
                        </SelectTrigger>
                        <SelectContent>
                          {universities.map((uni) => (
                            <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="studentId">Student ID</Label>
                      <Input
                        id="studentId"
                        value={formData.studentId}
                        onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                        placeholder="Your student ID"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Tournament Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Tournament Selection</h3>
                  <div className="space-y-2">
                    <Label htmlFor="tournament">Choose Tournament</Label>
                    <Select value={formData.selectedTournament} onValueChange={(value) => setFormData({...formData, selectedTournament: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a tournament" />
                      </SelectTrigger>
                      <SelectContent>
                        {tournaments.map((tournament) => (
                          <SelectItem key={tournament.id} value={tournament.id}>
                            <div className="flex items-center gap-2">
                              <span>{tournament.name}</span>
                              <Badge variant="secondary">{tournament.type}</Badge>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedTournament && (
                    <Card className="bg-gaming-dark/30 border-gaming-green/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{selectedTournament.name}</h4>
                          <Badge className="bg-gaming-green/20 text-gaming-green">
                            {selectedTournament.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {selectedTournament.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Trophy className="h-4 w-4" />
                            {selectedTournament.prize}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Team Information (if applicable) */}
                {isTeamTournament && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Team Information
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="teamName">Team Name</Label>
                        <Input
                          id="teamName"
                          value={formData.teamName}
                          onChange={(e) => setFormData({...formData, teamName: e.target.value})}
                          placeholder="Enter your team name"
                          required={isTeamTournament}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="teamMembers">Team Members (comma separated)</Label>
                        <Input
                          id="teamMembers"
                          value={formData.teamMembers}
                          onChange={(e) => setFormData({...formData, teamMembers: e.target.value})}
                          placeholder="Player1, Player2, Player3..."
                          required={isTeamTournament}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Terms and Conditions */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({...formData, agreeTerms: checked as boolean})}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the tournament rules and terms of service
                  </Label>
                </div>

                {/* Payment Information */}
                <Card className="bg-gradient-secondary/10 border-gaming-purple/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard className="h-4 w-4 text-gaming-purple" />
                      <h4 className="font-semibold">Payment Information</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Entry fee: KSh 200 (payable via M-Pesa after registration)
                    </p>
                    <p className="text-xs text-muted-foreground">
                      You will receive M-Pesa payment instructions via SMS after submitting this form.
                    </p>
                  </CardContent>
                </Card>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={!formData.agreeTerms || !formData.selectedTournament}
                >
                  Register for Tournament
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Registration;