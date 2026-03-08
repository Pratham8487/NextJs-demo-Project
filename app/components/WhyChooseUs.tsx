"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Learn Guitar Chords",
    description:
      "Master the most important guitar chords used in thousands of songs. This course will help you understand chord structures, transitions, and strumming patterns so you can start playing your favorite songs quickly.",
  },
  {
    title: "Piano Fundamentals",
    description:
      "Build a strong foundation in piano by learning hand positioning, scales, and simple melodies. Perfect for beginners who want to start their musical journey with confidence.",
  },
  {
    title: "Music Theory Basics",
    description:
      "Understand the core concepts of music theory including scales, harmony, rhythm, and chord progressions. This knowledge will help you compose, perform, and analyze music more effectively.",
  },
  {
    title: "Digital Music Production",
    description:
      "Learn how to create professional music using modern digital tools and DAWs. Discover beat making, sound design, and mixing techniques used by today's producers.",
  },
  {
    title: "Vocal Training Essentials",
    description:
      "Improve your singing ability with breathing techniques, pitch control, and vocal exercises. Develop confidence and learn how to perform songs with clarity and expression.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full">
      <StickyScroll content={musicSchoolContent} />
    </section>
  );
}
