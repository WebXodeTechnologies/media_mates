"use client";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const HeroBody = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover -z-10"
      >
        <source src="/hero/bgVideos/rollercoaster.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-xl font-extrabold text-white tracking-wider">
          Welcome to <span className="text-lime-400">MediaMates</span>
        </h1>
        <h2 className="mt-4 text-4xl sm:text-4xl md:text-7xl font-semibold text-white">
          Bringing Your Ideas to Life
        </h2>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-200">
          We transform your concept into visually compelling designs, blending
          creativity and strategy.
        </p>

        {/* CTA Button */}
        <Link
          href="/get-started"
          className="group mt-8 inline-flex items-center bg-gray-800 gap-2 text-white px-6 py-3 rounded-full text-2xl font-semibold tracking-wide
            transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-lime-600"
        >
          Get Started
          <GoArrowUpRight
            className="w-7 h-7 bg-lime-500 rounded-full transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroBody;
