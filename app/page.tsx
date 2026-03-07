import HeroSection from "@/app/components/HeroSection";
import FeaturedSection from "@/app/components/FeaturedSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
    </main>
  );
}
