import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Smartphone, CreditCard, Shield, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Payments = () => {
  const paymentSteps = [
    {
      step: 1,
      title: "Complete Registration",
      description: "Fill out the tournament registration form with your details",
      icon: CheckCircle
    },
    {
      step: 2,
      title: "Receive Payment Request",
      description: "Get M-Pesa STK Push notification on your registered phone number",
      icon: Smartphone
    },
    {
      step: 3,
      title: "Enter M-Pesa PIN",
      description: "Enter your M-Pesa PIN when prompted to complete the payment",
      icon: Shield
    },
    {
      step: 4,
      title: "Get Confirmation",
      description: "Receive SMS confirmation of successful payment and tournament spot",
      icon: CheckCircle
    }
  ];

  const paymentInfo = [
    { label: "Entry Fee", value: "KSh 200 per tournament" },
    { label: "Payment Method", value: "M-Pesa STK Push" },
    { label: "Processing Time", value: "Instant confirmation" },
    { label: "Refund Policy", value: "Full refund if tournament is cancelled" }
  ];

  const supportedNetworks = [
    { name: "Safaricom M-Pesa", supported: true, note: "Primary payment method" },
    { name: "Airtel Money", supported: false, note: "Coming soon" },
    { name: "T-Kash", supported: false, note: "Coming soon" },
    { name: "Bank Transfer", supported: false, note: "For large tournaments only" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            M-Pesa Payment Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, secure, and instant payments for all tournament registrations
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Payment Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-gaming-green" />
                How to Pay with M-Pesa
              </CardTitle>
              <CardDescription>Follow these simple steps to complete your tournament registration payment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {paymentSteps.map((step) => (
                  <div key={step.step} className="text-center space-y-3">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gaming-green/20">
                      <step.icon className="h-8 w-8 text-gaming-green" />
                    </div>
                    <Badge variant="secondary">Step {step.step}</Badge>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-gaming-blue" />
                  Payment Details
                </CardTitle>
                <CardDescription>Key information about tournament payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentInfo.map((info, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-card/50">
                      <span className="text-muted-foreground">{info.label}</span>
                      <span className="font-semibold">{info.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-gaming-purple" />
                  Supported Payment Methods
                </CardTitle>
                <CardDescription>Available payment options for tournaments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {supportedNetworks.map((network, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card/50">
                      <div>
                        <span className="font-semibold">{network.name}</span>
                        <p className="text-xs text-muted-foreground">{network.note}</p>
                      </div>
                      <Badge variant={network.supported ? "default" : "secondary"}>
                        {network.supported ? "Available" : "Coming Soon"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample Payment Flow */}
          <Card>
            <CardHeader>
              <CardTitle>Sample M-Pesa Payment Flow</CardTitle>
              <CardDescription>What you'll see during the payment process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                  <p className="text-sm font-mono">
                    📱 <strong>M-Pesa Request:</strong><br />
                    Pay KSh 200.00 to CampusPlay KE<br />
                    For: FIFA Tournament Registration<br />
                    Enter M-Pesa PIN to confirm
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                  <p className="text-sm font-mono">
                    📱 <strong>Confirmation SMS:</strong><br />
                    KSh 200.00 paid to CampusPlay KE<br />
                    Transaction ID: QR78X9M2<br />
                    You are now registered for FIFA Tournament!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notices */}
          <div className="space-y-4">
            <Alert>
              <Clock className="h-4 w-4" />
              <AlertDescription>
                <strong>Payment Deadline:</strong> All payments must be completed at least 2 hours before tournament start time. Late payments will not be accepted.
              </AlertDescription>
            </Alert>

            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                <strong>Security:</strong> We use secure M-Pesa API integration. Your payment details are never stored on our servers.
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Refund Policy:</strong> Refunds are only available if a tournament is cancelled by organizers. No refunds for no-shows or withdrawals.
              </AlertDescription>
            </Alert>
          </div>

          {/* Contact Support */}
          <Card className="bg-gradient-secondary/10 border-gaming-purple/20">
            <CardHeader>
              <CardTitle>Payment Issues?</CardTitle>
              <CardDescription>Get help with payment problems or questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  If you experience any payment issues, contact our support team immediately:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    Call: +254 700 123 456
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    WhatsApp: +254 700 123 456
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Support available Monday-Sunday, 8AM-10PM EAT
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payments;