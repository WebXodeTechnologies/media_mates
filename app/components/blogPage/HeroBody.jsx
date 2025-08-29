
"use client";

import React from "react";

const HeroBody = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/bgVideos/stars.mp4" // Replace with your video path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          {/* Caption */}
          <h1 className="text-white dark:text-gray-100 text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Our Recent Blogs
          </h1>

          {/* Short Catchy Description */}
          <p className="text-white/80 dark:text-gray-300 text-lg sm:text-xl md:text-2xl mb-6">
            Discover tips, trends & insights to boost your brand.
          </p>

          {/* CTA Button */}
          <a
            href="#blogs" // Anchor to your blog section
            className="inline-block bg-lime-400 text-black transition-transform duration-500 hover:scale-105 hover:rotate-1 
                 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] font-semibold px-6 py-3 rounded-lg shadow-lg "
          >
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBody;


