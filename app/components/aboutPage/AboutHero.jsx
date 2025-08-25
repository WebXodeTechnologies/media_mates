"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutHero = () => {
    return (
        <section className="relative w-full max-w-7xl py-40 mx-auto flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10">

                {/* Floating Orbs */}
                <div className="absolute top-10 left-10 w-40 h-40 bg-lime-400/20 dark:bg-pink-500/20 rounded-full blur-3xl  animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="relative z-10 max-w-4xl text-center px-6">
                {/* Animated Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight 
          text-gray-900 dark:text-white"
                >
                    About <span className="text-lime-600 dark:text-lime-400">Media Mates</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto tracking-wide leading-snug"
                >
                    We are a{" "}
                    <span className="font-semibold text-lime-600 dark:text-lime-400">
                        creative digital agency
                    </span>{" "}
                    driven by design, data, and innovation to help brands grow and connect
                    with their audience.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 flex justify-center"
                >
                    <a
                        href="/contact"
                        className="flex items-center gap-2 px-6 py-3 
            bg-lime-600 text-white font-semibold text-lg rounded-full shadow-lg 
            hover:bg-lime-500 dark:bg-lime-400 dark:text-black dark:hover:bg-white dark:hover:text-black
            transition-all duration-300 hover:shadow-[0_0_20px_#a3e635]"
                    >
                        Work With Us <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
