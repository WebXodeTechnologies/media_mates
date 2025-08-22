"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { gsap } from "gsap";

const Expertise = () => {
  const clientBadgeRef = useRef(null);
  const phoneBadgeRef = useRef(null);
  const progressRefs = useRef([]); // store multiple refs
  const rightColRef = useRef(null); // right column wrapper

  useEffect(() => {
    // Floating animations
    if (clientBadgeRef.current) {
      gsap.to(clientBadgeRef.current, {
        x: 20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    if (phoneBadgeRef.current) {
      gsap.to(phoneBadgeRef.current, {
        x: -20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Hover trigger for progress bar animation
    const rightCol = rightColRef.current;
    if (rightCol) {
      const handleMouseEnter = () => {
        progressRefs.current.forEach((bar) => {
          if (bar) {
            const targetWidth = bar.getAttribute("data-progress");
            gsap.fromTo(
              bar,
              { width: "0%" }, // reset on hover
              {
                width: targetWidth,
                duration: 2,
                ease: "power2.out",
              }
            );
          }
        });
      };

      rightCol.addEventListener("mouseenter", handleMouseEnter);
      return () => rightCol.removeEventListener("mouseenter", handleMouseEnter);
    }
  }, []);

  return (
    <section className="text-white dark:text-black py-20 max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Left Side */}
      <div className="relative flex flex-col items-center md:w-1/2">
        {/* Circle BG */}
        <div className="absolute -z-10 w-[400px] h-[400px] rounded-full opacity-20"></div>

        {/* Person Image */}
        <Image
          src="/expertise/our-expertise-image.png"
          alt="Media Expert"
          width={400}
          height={500}
          className="relative z-10"
        />

        {/* Happy Client Badge */}
        <div
          ref={clientBadgeRef}
          className="absolute  top-40 left-[-50px] flex items-center bg-neutral-900 rounded-xl px-4 py-2 gap-4 shadow-md z-10"
        >
          <div className="flex -space-x-2">
            <Image
              src="/expertise/satisfy-client-img-1.jpg"
              alt="Client"
              width={32}
              height={32}
              className="rounded-full border-2 border-black"
            />
            <Image
              src="/expertise/satisfy-client-img-2.jpg"
              alt="Client"
              width={32}
              height={32}
              className="rounded-full border-2 border-black"
            />
            <Image
              src="/expertise/satisfy-client-img-3.jpg"
              alt="Client"
              width={32}
              height={32}
              className="rounded-full border-2 border-black"
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-lime-400 font-semibold text-lg">40+</span>
            <span className="text-md">Happy Clients</span>
          </div>
        </div>

        {/* Phone Badge */}
        <div
          ref={phoneBadgeRef}
          className="absolute bottom-10 right-0 bg-lime-400 text-black px-5 py-2 rounded-lg font-semibold flex items-center gap-2 z-10"
        >
          <Phone size={18} />
          +91-9150253488
        </div>
      </div>

      {/* Right Side */}
      <div ref={rightColRef} className="md:w-1/2 space-y-6 cursor-pointer">
         <p className="text-lime-400 font-semibold mb-2 flex items-center justify-center gap-2">
          <span className="text-lg">✱</span> OUR EXPERTISE
        </p>
        <h2 className="text-4xl font-bold leading-snug text-black dark:text-white">
          Driving <span className="text-lime-400">media innovation</span> with
          impactful strategies
        </h2>
        <p className="leading-relaxed text-black dark:text-white">
          At our media agency, we specialize in crafting high-impact campaigns
          that merge creativity, storytelling, and technology. From brand
          identity to digital growth, we empower businesses with strategies that
          engage audiences and deliver measurable success.
        </p>

        {/* Progress Bars */}
        <div className="space-y-6 pt-4">
          <div>
            <div className="flex justify-between mb-1 text-black dark:text-white">
              <span>Brand Strategy</span>
              <span>89%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                ref={(el) => (progressRefs.current[0] = el)}
                data-progress="89%"
                style={{ width: "0%" }} // start collapsed
                className="bg-lime-400 h-2 rounded-full"
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1 text-black dark:text-white">
              <span>Digital Marketing</span>
              <span>95%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                ref={(el) => (progressRefs.current[1] = el)}
                data-progress="95%"
                style={{ width: "0%" }} // start collapsed
                className="bg-lime-400 h-2 rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
