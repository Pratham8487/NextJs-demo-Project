"use-client";
import React from "react";
import Link from "next/link";
import CourseData from "@/app/data/music_courses.json";
import { p } from "motion/react-client";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export default function FeaturedSection() {
  const featuredCourses = CourseData.courses.filter(
    (course: Course) => course.isFeatured,
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center p-4">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold sm:text-4xl tracking-tight text-white sm:text:4xl">
            Learn with the Best
          </p>
        </div>
      </div>
      <div className="mt-10 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div
              className="flex justify-center space-y-6 gap-6"
              key={course.id}
            >
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm space-y-6">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-gray-50 mt-4 mb-2 datk:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                  <div className="border bg-gray-900 hover:bg-gray-800 border-white p-1.5 cursor-pointer rounded-xl my-2">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="tracking-wide text-gray-100"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="p-3 rounded-xl bg-gray-900 text-white text-xl tracking-wide border border-white hover:bg-gray-600 hover:text-yellow transition-colors transition-shadow"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}
