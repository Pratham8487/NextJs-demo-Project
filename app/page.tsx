import HeroSection from "@/app/components/HeroSection";
import FeaturedSection from "@/app/components/FeaturedSection";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import MusicSchoolTestimonial from "./components/TestimonialCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <MusicSchoolTestimonial />
    </main>
  );
}
