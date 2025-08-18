"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const AboutSample = () => {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 lg:px-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT GRID (STACKED / OVERLAPPED IMAGES) */}
        <div className="relative flex justify-center lg:justify-start">
          {/* First Image */}
          <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/aboutsample/about-image-1.jpg"
              alt="Team collaboration"
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Second Image (overlapping with margin/translate) */}
          <div className="absolute top-12 left-12 w-64 h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/aboutsample/about-image-2.jpg"
              alt="Team work"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* RIGHT GRID (TEXT + CTA) */}
        <div className="flex flex-col gap-6">
          <p className="text-green-500 font-semibold uppercase tracking-wide">
            * About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug">
            Crafting <span className="text-green-500">stories through</span> design mastery
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl">
            Transforming ideas into captivating visuals, we blend creativity and strategy 
            to bring your vision to life with stunning design solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-4">
            <div>
              <p className="text-2xl font-bold text-green-500">25+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Years of Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-500">36k+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-500">98%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Client Reach</p>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="mt-6">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors duration-200">
              More About <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSample;
