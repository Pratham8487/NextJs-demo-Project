"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { courses } from "@/app/data/courses";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { Button } from "@/app/components/ui/moving-border";

export default function CourseDetailPage() {
  const params = useParams();
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Course Not Found
        </h1>
        <p className="text-neutral-400 mb-8">
          The course you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/courses">
          <Button borderRadius="1.75rem">Back to Courses</Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* Hero Section */}
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden py-10 md:py-0 mx-auto">
        <div className="p-4 relative z-10 w-full text-center pt-28 md:pt-0">
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
          />

          {/* Course Image Placeholder */}
          <div className="mx-auto mt-28 mb-6 h-48 w-48 rounded-2xl bg-gradient-to-br from-teal-600/30 via-purple-600/30 to-blue-600/30 flex items-center justify-center">
            <span className="text-7xl">{getCourseEmoji(course.title)}</span>
          </div>

          <h1 className="mt-0 md:mt-0 tracking-wider text-4xl md:text-7xl font-bold bg-clip-text text-trasparent bg-gradient-to-b from-neutral-50 to neutral-400">
            {course.title}
          </h1>
          <p className="mt-3 text-base md:text-lg text-neutral-400">
            Instructor:{" "}
            <span className="text-neutral-200">{course.instructor}</span>
          </p>
          <p className="mt-2 text-2xl md:text-3xl font-bold text-teal-500">
            ${course.price}
          </p>

          <div className="mt-6">
            <Button borderRadius="1.75rem">Enroll Now</Button>
          </div>
        </div>
      </div>

      {/* Course Info Cards */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-teal-500 mx-auto mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-neutral-500 uppercase tracking-wide">
                Duration
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {course.duration}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-teal-500 mx-auto mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <p className="text-sm text-neutral-500 uppercase tracking-wide">
                Skill Level
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {course.level}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-teal-500 mx-auto mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <p className="text-sm text-neutral-500 uppercase tracking-wide">
                Total Lessons
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {course.lessons} lessons
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Description */}
      <div className="py-12 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
              About This Course
            </h2>
            <p className="mt-2 text-3xl leading-8 font-bold sm:text-4xl tracking-tight text-white">
              Course Overview
            </p>
          </div>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center">
            {course.fullDescription}
          </p>
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="py-12 bg-black/[0.96]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
              Curriculum Highlights
            </h2>
            <p className="mt-2 text-3xl leading-8 font-bold sm:text-4xl tracking-tight text-white">
              What You&apos;ll Learn
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {course.learningOutcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-gray-900 border border-neutral-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-500 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-neutral-300">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Courses */}
      <div className="py-12 bg-gray-900">
        <div className="text-center">
          <Link href="/courses">
            <Button borderRadius="1.75rem">Back to All Courses</Button>
          </Link>
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
