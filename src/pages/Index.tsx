import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedTournaments from "@/components/FeaturedTournaments";
import Leaderboard from "@/components/Leaderboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedTournaments />
      <Leaderboard />
      <Footer />
    </div>
  );
};

export default Index;
