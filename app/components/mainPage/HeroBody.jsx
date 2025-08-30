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
        <div className="text-center mt-14 flex justify-center">
          <a
            href="/about"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-black font-semibold rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_#a3e635]" // Glow effect on hover
          >
            Let’s Get Started
            <GoArrowUpRight className="text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBody;
