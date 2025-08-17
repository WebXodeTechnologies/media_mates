"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


const HeroBody = () => {
  return (
    <section className="space-y-20 relative h-screen w-full overflow-hidden z-[-999]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-screen w-full object-cover"
      >
        <source src="/hero/bgVideos/rollercoaster.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (darken video for better text contrast) */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-xl font-extrabold text-white tracking-wider">
          Welcome to <span className="text-lime-400">MediaMates</span>
        </h1>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          Bringing Your Ideas to Life Creatively
        </h2>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-200">
          We transform your concept into visually compelling designs, blending
          creativity and strategy.
        </p>

        {/* CTA Button */}
        <Link
          href="/get-started"
          className="mt-8 inline-flex items-center gap-2 bg-lime-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-lime-400 transition"
        >
          Get Started <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

export default HeroBody





