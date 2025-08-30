"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { GiSplitCross } from "react-icons/gi";
import FloatingCta from "./FloatingCta";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const AboutSample = () => {
  const ctaRef = useRef(null); // ref for CTA

  useEffect(() => {
    // Animate CTA only
    gsap.to(ctaRef.current, {
      x: 10, // move 20px right
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full py-20 md:py-24 lg:py-32 bg-white dark:bg-neutral-950 transition-colors duration-300 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT GRID (STACKED / OVERLAPPED IMAGES) */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Decorative Icons */}
          <GiSplitCross className="absolute -top-6 left-[4] text-lime-400 text-3xl md:text-4xl opacity-70 dark:text-lime-400" />
          <GiSplitCross className="absolute -top-18 left-[4] text-lime-400 text-3xl md:text-4xl opacity-70 dark:text-lime-400" />

          {/* First Image */}
          <div className="absolute top-6 -left-1 sm:top-10 w-56 sm:w-72 md:w-80 h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg z-10">
            <Image
              src="/aboutsample/about-image-1.jpg"
              alt="Team work"
               fill
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-50 sm:w-72 md:w-80 h-72 sm:h-90 md:h-96 rounded-2xl overflow-hidden shadow-lg translate-x-12 sm:translate-x-16 md:translate-x-20 -translate-y-6 sm:-translate-y-8 md:-translate-y-10">
            <Image
              src="/aboutsample/about-image-2.jpg"
              alt="Team collaboration"
              fill
              className="rounded-2xl object-cover"
            />
            <GiSplitCross className="absolute -bottom-2 right-[-20] text-red-500 text-3xl md:text-4xl opacity-70 dark:text-red-400" />
          </div>

          {/* Floating CTA (Animated) */}
          <div
            ref={ctaRef}
            className="absolute -bottom-10 left-[200] z-10 hidden md:block"
          >
            <FloatingCta
              text="Call Us Now!"
              phone="+91 98765 43210"
              icon={<PhoneCall size={22} />}
              bgColor="bg-gray-900"
              textColor="text-white"
            />
          </div>
        </div>

        {/* RIGHT GRID (TEXT + CTA) */}
        <div className="flex flex-col gap-6 text-center lg:text-left mt-5 sm:mt-3 md:mt-5">
          <p className="text-lime-400 text-md font-semibold uppercase tracking-wide">
            * About Us
          </p>
          <h2 className="text-2xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-snug">
            Crafting <span className="text-lime-400">stories through</span>{" "}
            Creative Content
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 text-lg sm:text-base md:text-xl">
            Transforming ideas into captivating visuals, we blend creativity and
            strategy to bring your vision to life with stunning design
            solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-4">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-lime-400">5+</p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Years of Experience
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-lime-400">
                30+
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-lime-400">
                98%
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Client Reach
              </p>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="text-center mt-14 flex justify-start">
          <a
            href="/about"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-black font-semibold rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_#a3e635]" // Glow effect on hover
          >
            Learn More
            <GoArrowUpRight className="text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSample;
