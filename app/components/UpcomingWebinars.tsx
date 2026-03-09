import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "Guitar Mastery",
    description:
      "Master acoustic and electric guitar with lessons covering chords, scales, fingerstyle techniques, and solo improvisation for all skill levels.",
    link: "https://musicacademy.com/guitar-mastery",
  },
  {
    title: "Piano Fundamentals",
    description:
      "Learn piano from the ground up with structured lessons on scales, chords, music reading, and playing beautiful melodies.",
    link: "https://musicacademy.com/piano-fundamentals",
  },
  {
    title: "Drum Rhythm Lab",
    description:
      "Build powerful rhythm skills with step-by-step drum lessons covering grooves, fills, timing, and professional drumming techniques.",
    link: "https://musicacademy.com/drum-rhythm",
  },
  {
    title: "Music Production Studio",
    description:
      "Create professional music tracks using DAWs while learning beat making, sound design, mixing, and mastering techniques.",
    link: "https://musicacademy.com/music-production",
  },
  {
    title: "DJ Performance Academy",
    description:
      "Learn the art of DJing including beat matching, mixing transitions, live performance techniques, and crowd engagement.",
    link: "https://musicacademy.com/dj-performance",
  },
  {
    title: "Songwriting Workshop",
    description:
      "Develop your songwriting skills by learning lyric writing, melody creation, chord progressions, and storytelling through music.",
    link: "https://musicacademy.com/songwriting",
  },
  {
    title: "Vocal Training Pro",
    description:
      "Improve your singing with breathing techniques, pitch control exercises, vocal range development, and stage confidence.",
    link: "https://musicacademy.com/vocal-training",
  },
  {
    title: "Music Theory Essentials",
    description:
      "Understand scales, harmony, rhythm patterns, and chord structures to strengthen your musical knowledge and creativity.",
    link: "https://musicacademy.com/music-theory",
  },
  {
    title: "Jazz Improvisation Lab",
    description:
      "Explore advanced improvisation techniques used in jazz music and learn to create expressive solos and chord voicings.",
    link: "https://musicacademy.com/jazz-improvisation",
  },
  {
    title: "Electronic Music Production",
    description:
      "Produce EDM tracks by learning synthesizers, sound layering, drum programming, and professional mixing techniques.",
    link: "https://musicacademy.com/edm-production",
  },
  {
    title: "Film Scoring Academy",
    description:
      "Learn how to compose cinematic music for films, games, and media using orchestration and modern digital tools.",
    link: "https://musicacademy.com/film-scoring",
  },
  {
    title: "Live Performance Mastery",
    description:
      "Develop stage presence, audience connection, and live performance techniques to perform confidently on stage.",
    link: "https://musicacademy.com/live-performance",
  },
];

export default function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold sm:text-4xl tracking-wide text-white sm:text:4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="max-w-8xl my-1 mx-auto px-8">
          <HoverEffect items={projects} />
        </div>

        <div className="mt-10 flex item-center align-center justify-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}
