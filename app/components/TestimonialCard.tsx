"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "../lib/utils";

const testimonials = [
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this platform matched me with a teacher who truly understands my musical goals. My technique and confidence have improved tremendously.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. From beat making to mastering tracks, everything is explained clearly. Highly recommended for aspiring producers.",
    name: "Chris Morales",
    title: "Music Production Student",
  },
  {
    quote:
      "I always wanted to learn guitar but didn't know where to start. The step-by-step lessons and practice exercises made learning fun and easy. Now I can confidently play my favorite songs.",
    name: "Daniel Brooks",
    title: "Guitar Student",
  },
  {
    quote:
      "The piano lessons helped me understand music theory and improve my hand coordination. The instructors explain concepts so well that even beginners can quickly grasp them.",
    name: "Sophia Williams",
    title: "Piano Student",
  },
  {
    quote:
      "This music school completely transformed my singing ability. The vocal training exercises improved my pitch control and breathing technique, and I feel much more confident performing live.",
    name: "Liam Carter",
    title: "Vocal Training Student",
  },
];

export default function MusicSchoolTestimonial() {
  return (
    <section className="relative flex h-[50rem] w-full flex-col items-center justify-center overflow-hidden bg-white antialiased dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      <div className="relative z-20 flex w-full flex-col items-center px-4 sm:px-6 lg:px-8">
        <h2 className="relative z-20 mb-12 bg-gradient-to-b from-neutral-800 to-neutral-600 bg-clip-text py-8 text-center text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-neutral-200 dark:to-neutral-500">
          Hear our Harmony: Voices of success
        </h2>

        <div className="w-full max-w-7xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
