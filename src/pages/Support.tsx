import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Phone, Mail, Clock, HelpCircle, Bug, CreditCard, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Support = () => {
  const contactMethods = [
    {
      title: "WhatsApp Support",
      description: "Get instant help via WhatsApp",
      icon: MessageCircle,
      contact: "+254 700 123 456",
      hours: "Mon-Sun, 8AM-10PM",
      color: "text-green-500"
    },
    {
      title: "Phone Support",
      description: "Call us for urgent issues",
      icon: Phone,
      contact: "+254 700 123 456",
      hours: "Mon-Fri, 9AM-6PM",
      color: "text-blue-500"
    },
    {
      title: "Email Support",
      description: "Send detailed inquiries",
      icon: Mail,
      contact: "support@campusplay.ke",
      hours: "Response within 24h",
      color: "text-purple-500"
    }
  ];

  const faqCategories = [
    {
      category: "Registration & Account",
      icon: Users,
      questions: [
        {
          q: "How do I register for a tournament?",
          a: "Visit our registration page, fill out the form, and complete payment via M-Pesa. You'll receive confirmation within minutes."
        },
        {
          q: "Can I register for multiple tournaments?",
          a: "Yes! You can register for as many tournaments as you'd like, as long as they don't overlap in time."
        },
        {
          q: "What if I'm not a current student?",
          a: "Unfortunately, our tournaments are exclusively for current university students with valid student IDs."
        }
      ]
    },
    {
      category: "Payments & Refunds",
      icon: CreditCard,
      questions: [
        {
          q: "How do I pay for tournament entry?",
          a: "We use M-Pesa STK Push. After registration, you'll receive a payment prompt on your phone. Enter your M-Pesa PIN to complete."
        },
        {
          q: "Can I get a refund if I can't attend?",
          a: "Refunds are only available if the tournament is cancelled by organizers. No refunds for no-shows or personal withdrawals."
        },
        {
          q: "Why is my payment failing?",
          a: "Ensure you have sufficient M-Pesa balance and your phone number is correctly registered with Safaricom."
        }
      ]
    },
    {
      category: "Tournament Rules",
      icon: HelpCircle,
      questions: [
        {
          q: "What happens if I'm late to a tournament?",
          a: "Players must arrive 30 minutes before start time. Late arrivals forfeit their matches and entry fee."
        },
        {
          q: "Can I bring my own gaming equipment?",
          a: "For mobile games, use your own device. For console games, we provide standardized equipment for fair play."
        },
        {
          q: "Are there age restrictions?",
          a: "You must be 18+ and a current university student. Some games may have additional age ratings."
        }
      ]
    },
    {
      category: "Technical Issues",
      icon: Bug,
      questions: [
        {
          q: "The website isn't loading properly",
          a: "Try clearing your browser cache or using a different browser. Contact us if the issue persists."
        },
        {
          q: "I'm not receiving SMS notifications",
          a: "Check if your phone number is correct in your profile and ensure you have network coverage."
        },
        {
          q: "How do I report a bug?",
          a: "Use the contact form below or WhatsApp us with details about the issue and your device/browser."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Contact Support
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get help with tournaments, payments, or technical issues. We're here to help!
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <method.icon className={`h-12 w-12 mx-auto mb-4 ${method.color}`} />
                  <CardTitle>{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">{method.contact}</p>
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {method.hours}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gaming-purple" />
                Send us a Message
              </CardTitle>
              <CardDescription>Fill out this form and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="0700123456" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Issue Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="registration">Registration Issues</SelectItem>
                        <SelectItem value="payment">Payment Problems</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="tournament">Tournament Questions</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide detailed information about your issue..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-gaming-blue" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <div className="flex items-center gap-2 mb-4">
                      <category.icon className="h-5 w-5 text-gaming-green" />
                      <h3 className="text-lg font-semibold">{category.category}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="p-4 rounded-lg bg-card/50 border border-border">
                          <h4 className="font-semibold mb-2">{faq.q}</h4>
                          <p className="text-muted-foreground text-sm">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="bg-gradient-secondary/10 border-gaming-red/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gaming-red">
                <Phone className="h-5 w-5" />
                Emergency Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  For urgent issues during live tournaments or time-sensitive problems:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="destructive" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Emergency Hotline: +254 700 123 456
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Emergency: +254 700 123 456
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Emergency support available during tournament hours only
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

export default Support;