import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "../components/ui/moving-border";

export default function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden py-10 md:py-0 mx-auto">
      <div className="p-4relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />

        <h1 className="mt-0 md:mt-0 tracking-wider
 text-4xl md:text-7xl font-bold bg-clip-text text-trasparent bg-gradient-to-b from-neutral-50 to neutral-400">
          Master the art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive courses and become a master of your craft.
          Weather you are a beginner or an experienced musician, our courses are
          designed to help you reach your full potential. Join us today and
          start your musical journey!
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              // className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
