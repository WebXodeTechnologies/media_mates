"use client";
import React from "react";

const HeroSection = () => {
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">

            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/hero/bgVideos/cosmic-pattern.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

            {/* Centered Content */}
            <div className="relative z-10 px-6 md:px-16">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                    Build Your <span className="text-green-400">Dream Project</span> Today
                </h1>
                <p className="text-white/80 text-lg md:text-2xl mb-8">
                    We help businesses grow online with creative designs and modern technology.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        Get Started
                    </button>
                    <button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-500 hover:text-white transition">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
