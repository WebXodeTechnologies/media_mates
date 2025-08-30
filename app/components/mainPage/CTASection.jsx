"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const CTASection = () => {
    return (
        <section className="relative w-full overflow-hidden flex flex-col items-center justify-center py-24">
            {/* Background gradient / subtle grid */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-20  bg-cover" />
            </div>

            {/* Content wrapper */}
            <div className="relative text-center px-4 sm:px-6 lg:px-8">
                {/* Small top text */}
                <p className="text-black dark:text-white font-medium text-sm sm:text-base tracking-wide mb-6">
                    LET&apos;S COLLABORATE
                </p>

                {/* Big Headline */}
                <h2 className="text-black dark:text-white font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight uppercase">
                    LET&apos;S WORK
                </h2>
                <h2 className="text-black dark:text-white font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight uppercase">
                    TOGETHER
                </h2>

                {/* Circle CTA Button */}
                <div className="text-center mt-14 flex justify-center">
                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-black font-semibold rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_#a3e635]" // Glow effect on hover
                    >
                        Let’s Work Together
                        <GoArrowUpRight className="text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
