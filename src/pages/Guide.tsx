import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, CreditCard, Trophy, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Guide = () => {
  const steps = [
    {
      step: 1,
      title: "Create Account",
      description: "Sign up with your university email and verify your student status",
      icon: Users,
      details: ["Use your official university email", "Provide valid student ID", "Verify phone number"]
    },
    {
      step: 2,
      title: "Choose Tournament",
      description: "Browse available tournaments and select your preferred gaming competition",
      icon: Trophy,
      details: ["Check tournament dates", "Review prize pools", "Read game-specific rules"]
    },
    {
      step: 3,
      title: "Register & Pay",
      description: "Complete registration form and pay entry fee via M-Pesa",
      icon: CreditCard,
      details: ["Fill registration form", "Pay KSh 200 entry fee", "Receive confirmation SMS"]
    },
    {
      step: 4,
      title: "Get Ready",
      description: "Prepare for tournament day and join the gaming community",
      icon: CheckCircle,
      details: ["Practice your game", "Join tournament WhatsApp group", "Arrive early on tournament day"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            How to Register
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join Kenya's premier campus gaming tournaments in 4 simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step) => (
            <Card key={step.step} className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-primary"></div>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gaming-green/20">
                    <step.icon className="h-6 w-6 text-gaming-green" />
                  </div>
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Step {step.step}: {step.title}
                      <Badge variant="secondary">{step.step}/4</Badge>
                    </CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 ml-16">
                  {step.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-gaming-green" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Info Cards */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <Calendar className="h-8 w-8 text-gaming-blue mx-auto mb-2" />
              <CardTitle>Tournament Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Tournaments run every weekend. Check our calendar for upcoming events.</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CreditCard className="h-8 w-8 text-gaming-purple mx-auto mb-2" />
              <CardTitle>Entry Fee</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Only KSh 200 per tournament. Pay easily via M-Pesa STK Push.</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Phone className="h-8 w-8 text-gaming-red mx-auto mb-2" />
              <CardTitle>Get Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Need help? Contact our support team at +254 700 123 456</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link to="/registration">
            <Button size="lg" className="bg-gradient-primary text-white">
              Start Registration Now
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Guide;