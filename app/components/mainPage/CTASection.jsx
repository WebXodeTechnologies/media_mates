"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

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
                <div className="max-w-2xl mx-auto py-10 flex justify-center items-center gap-4">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-lime-400 text-black font-semibold rounded-full text-lg sm:text-xl shadow-lg hover:bg-lime-500 dark:hover:bg-lime-300 transition-all duration-300"
                    >
                        Get In Touch
                        <span className="ml-3 flex items-center justify-center w-9 h-9 rounded-full border border-black dark:border-white bg-white dark:bg-black text-black  dark:text-white hover:bg-lime-400 hover:text-black dark:hover:bg-lime-400 transition-all duration-300">
                            <MdArrowOutward className="text-xl" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
