"use client";
import React from "react";
import Link from "next/link";
import { courses, Course } from "@/app/data/courses";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/app/components/ui/3d-card";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="py-20">
        {/* Page Header */}
        <div className="text-center p-4 mt-8">
          <h2 className="text-base font-semibold text-teal-600 tracking-wider uppercase">
            Our Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold sm:text-4xl tracking-wider
           text-white">
            Explore Our Music Courses
          </p>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
            Discover a wide range of courses designed to help you master your
            musical skills, from beginner fundamentals to advanced techniques.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="mt-12 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courses.map((course: Course) => (
              <CardContainer key={course.id} containerClassName="py-4">
                <CardBody className="bg-gray-900 relative group/card border-white/[0.1] w-full h-auto rounded-xl p-6 border">
                  {/* Course Image Placeholder */}
                  <CardItem
                    translateZ="50"
                    className="w-full"
                  >
                    <div className="h-44 w-full rounded-xl bg-gradient-to-br from-teal-600/20 via-purple-600/20 to-blue-600/20 flex items-center justify-center overflow-hidden">
                      <span className="text-4xl">
                        {getCourseEmoji(course.title)}
                      </span>
                    </div>
                  </CardItem>

                  {/* Title */}
                  <CardItem
                    translateZ="60"
                    className="text-lg font-bold text-white mt-4"
                  >
                    {course.title}
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    as="p"
                    translateZ="40"
                    className="text-sm text-neutral-400 mt-2 line-clamp-3"
                  >
                    {course.description}
                  </CardItem>

                  {/* Instructor */}
                  <CardItem
                    translateZ="30"
                    className="text-xs text-neutral-500 mt-3"
                  >
                    Instructor:{" "}
                    <span className="text-neutral-300">
                      {course.instructor}
                    </span>
                  </CardItem>

                  {/* Price & Button */}
                  <div className="flex justify-between items-center mt-6">
                    <CardItem
                      translateZ="30"
                      className="text-xl font-bold text-teal-500"
                    >
                      ${course.price}
                    </CardItem>

                    <CardItem
                      translateZ="40"
                      as={Link}
                      href={`/courses/${course.slug}`}
                      className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-gray-200 transition-colors"
                    >
                      View Course
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function getCourseEmoji(title: string): string {
  const emojiMap: Record<string, string> = {
    Guitar: "\uD83C\uDFB8",
    Piano: "\uD83C\uDFB9",
    Production: "\uD83C\uDFDA",
    Vocal: "\uD83C\uDFA4",
    DJ: "\uD83C\uDFA7",
    Theory: "\uD83C\uDFBC",
    Drum: "\uD83E\uDD41",
    Song: "\u270D\uFE0F",
    Jazz: "\uD83C\uDFB7",
    Film: "\uD83C\uDFAC",
    Bass: "\uD83C\uDFB8",
    Live: "\uD83C\uDFA4",
  };

  for (const [key, emoji] of Object.entries(emojiMap)) {
    if (title.includes(key)) return emoji;
  }
  return "\uD83C\uDFB5";
}
