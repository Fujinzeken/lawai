import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import TrustBanner from "@/components/sections/TrustBanner";
import WhoIsItFor from "@/components/sections/WhoIsItFor";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import EmotionalSection from "@/components/sections/EmotionalSection";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <TrustBanner />
      <WhyChooseUs />
      <WhoIsItFor />
      <EmotionalSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
