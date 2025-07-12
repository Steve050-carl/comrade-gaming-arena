import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Users, Calendar, Tv, Youtube, Twitch, Radio } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Stream = () => {
  const liveStreams = [
    {
      title: "FIFA 24 Championship Finals",
      game: "FIFA 24",
      status: "Live",
      viewers: 234,
      platform: "YouTube",
      thumbnail: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=225&fit=crop",
      url: "https://youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      title: "Tekken Tournament Semi-Finals",
      game: "Tekken 8",
      status: "Starting Soon",
      viewers: 156,
      platform: "Twitch",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop",
      url: "https://twitch.tv/campusplayke"
    }
  ];

  const upcomingStreams = [
    {
      title: "PUBG Squad Championship",
      game: "PUBG Mobile",
      date: "Jan 25, 2025",
      time: "2:00 PM",
      platform: "YouTube"
    },
    {
      title: "Call of Duty Tournament",
      game: "Call of Duty",
      date: "Feb 1, 2025",
      time: "3:00 PM",
      platform: "Twitch"
    },
    {
      title: "Mortal Kombat Showdown",
      game: "Mortal Kombat",
      date: "Feb 8, 2025",
      time: "4:00 PM",
      platform: "YouTube"
    }
  ];

  const streamingPlatforms = [
    {
      name: "YouTube",
      icon: Youtube,
      description: "High-quality streams with chat replay",
      url: "https://youtube.com/@campusplayke",
      color: "text-red-500"
    },
    {
      name: "Twitch",
      icon: Twitch,
      description: "Interactive live streaming with real-time chat",
      url: "https://twitch.tv/campusplayke",
      color: "text-purple-500"
    },
    {
      name: "Facebook Live",
      icon: Radio,
      description: "Stream to Facebook for wider reach",
      url: "https://facebook.com/campusplayke",
      color: "text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Live Streaming
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch the best campus gaming action live or catch up on tournament highlights
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Live Streams */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-gaming-red" />
                Live Now
              </CardTitle>
              <CardDescription>Currently streaming tournaments and matches</CardDescription>
            </CardHeader>
            <CardContent>
              {liveStreams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {liveStreams.map((stream, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg mb-3">
                        <img 
                          src={stream.thumbnail} 
                          alt={stream.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className={stream.status === "Live" ? "bg-red-500 text-white" : "bg-yellow-500 text-black"}>
                            {stream.status === "Live" && <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>}
                            {stream.status}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge variant="secondary">
                            {stream.platform}
                          </Badge>
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          <Users className="h-3 w-3 inline mr-1" />
                          {stream.viewers}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-1">{stream.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{stream.game}</p>
                      <Button variant="gaming" size="sm" className="w-full">
                        <Play className="h-4 w-4 mr-1" />
                        Watch Stream
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Tv className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No live streams at the moment</p>
                  <p className="text-sm text-muted-foreground">Check back during tournament hours</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Streams */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gaming-blue" />
                Upcoming Streams
              </CardTitle>
              <CardDescription>Scheduled tournament broadcasts and gaming events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingStreams.map((stream, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card/50 border border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-secondary/20 flex items-center justify-center">
                        <Tv className="h-6 w-6 text-gaming-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{stream.title}</h3>
                        <p className="text-sm text-muted-foreground">{stream.game}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {stream.date}
                          </span>
                          <span>{stream.time}</span>
                          <Badge variant="outline" className="text-xs">
                            {stream.platform}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Set Reminder
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Streaming Platforms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Radio className="h-5 w-5 text-gaming-purple" />
                Where to Watch
              </CardTitle>
              <CardDescription>Follow us on your favorite streaming platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {streamingPlatforms.map((platform, index) => (
                  <div key={index} className="text-center p-6 rounded-lg bg-card/50 border border-border hover:bg-card/80 transition-colors">
                    <platform.icon className={`h-12 w-12 mx-auto mb-4 ${platform.color}`} />
                    <h3 className="font-semibold mb-2">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Follow Channel
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stream Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Stream Features</CardTitle>
                <CardDescription>What you can expect from our live streams</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gaming-green"></div>
                    <span className="text-sm">HD quality video streaming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gaming-green"></div>
                    <span className="text-sm">Live chat with other viewers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gaming-green"></div>
                    <span className="text-sm">Expert commentary and analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gaming-green"></div>
                    <span className="text-sm">Multiple camera angles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gaming-green"></div>
                    <span className="text-sm">Instant replay highlights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Broadcasting Schedule</CardTitle>
                <CardDescription>When we typically stream tournaments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Weekday Tournaments</span>
                    <span className="text-sm text-muted-foreground">6:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Weekend Championships</span>
                    <span className="text-sm text-muted-foreground">2:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Special Events</span>
                    <span className="text-sm text-muted-foreground">Varies</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Highlight Shows</span>
                    <span className="text-sm text-muted-foreground">Sundays 7:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Stream;