import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const people = [
  {
    id: 1,
    name: "Alex Rivera",
    designation: "Guitar Instructor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Sophia Bennett",
    designation: "Piano Instructor",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Marcus Lee",
    designation: "Music Producer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Isabella Cruz",
    designation: "Vocal Coach",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Daniel Kim",
    designation: "Drum Instructor",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    name: "Liam Parker",
    designation: "DJ & Electronic Music Producer",
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&q=60",
  },
];

export default function IntroducingUsSection() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-6xl font-bold tracking-wider text-white text-center">
          Meet Our Instructors
        </h2>
        <p className="mt-4 text-xl text-center">
          Discover the talented professionals who will guide your music
          journey.
        </p>
        <div className="max-w-6xl mx-auto flex flex-row items-center justify-center mt-10">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
}
