"use client";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero/bgVideos/cosmic-pattern.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white px-4 sm:px-6 md:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Grow Your Brand with{" "}
          <span className="text-lime-400">Media Mates</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-lg md:max-w-2xl mx-auto text-gray-200">
          We provide powerful digital marketing, creative branding, and
          technology-driven solutions to elevate your business online.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 sm:text-base  bg-lime-600 text-white font-semibold text-lg rounded-full shadow-lg 
            hover:bg-lime-500 dark:bg-lime-400 dark:text-black dark:hover:bg-white dark:hover:text-black
            transition-all duration-300 hover:shadow-[0_0_20px_#a3e635]"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 sm:text-base  bg-lime-600 text-white font-semibold text-lg rounded-full shadow-lg 
            hover:bg-lime-500 dark:bg-lime-400 dark:text-black dark:hover:bg-white dark:hover:text-black
            transition-all duration-300 hover:shadow-[0_0_20px_#a3e635]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
