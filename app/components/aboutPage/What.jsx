"use client";
import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const What = () => {
    const services = [
        { title: "Photography", desc: "Capturing visuals that speak louder than words." },
        { title: "Branding", desc: "Building identities that stand the test of time." },
        { title: "Promotions", desc: "Driving campaigns that spark conversations." },
        { title: "Web Development", desc: "Crafting websites that convert and inspire." },
    ];

    return (
        <section className="max-w-7xl mx-auto text-white py-20 px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>
                    <p className="text-sm tracking-wider text-lime-400 mb-3">
                        <span className="ml-2 text-lime-400 text-xl">✱</span> WHAT WE DO
                    </p>
                    <h2 className="text-2xl md:text-5xl font-bold leading-snug mb-6 text-black dark:text-white">
                        Turning <span className="text-lime-400">creative Ideas</span> Into Action
                    </h2>
                    <p className="dark:text-gray-300 text-gray-800 mb-8">
                        We help brands stand out with creative solutions that connect, inspire,
                        and leave a mark. From visuals to digital experiences, we cover it all.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="p-5 rounded-xl bg-black dark:bg-gray-700/50 border border-gray-700 hover:border-lime-400 transition"
                            >
                                <h4 className="font-semibold text-lg text-lime-400 mb-2">
                                    {service.title}
                                </h4>
                                <p className="text-white text-sm">{service.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center lg:justify-start">
                        <a
                            href="/contact"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 
               bg-lime-400 text-black font-semibold rounded-full text-lg 
               shadow-md transition-all duration-300 
               hover:bg-lime-500 hover:shadow-xl dark:hover:bg-lime-300"
                        >
                            Let’s Work Together
                            <GoArrowUpRight
                                className="text-xl transform transition-transform duration-300 
                 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />

                            {/* Animated subtle glow ring */}
                            <span
                                className="absolute inset-0 rounded-full border-2 border-transparent 
                 transition-all duration-500 group-hover:border-lime-300 
                 group-hover:shadow-[0_0_20px_rgba(163,230,53,0.6)] 
                 dark:group-hover:shadow-[0_0_20px_rgba(163,230,53,0.8)]"
                            ></span>
                        </a>
                    </div>


                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <Image
                        src="/what/what-we-do-image.jpg" // replace with your actual image
                        alt="Creative Media Agency Services"
                        width={600}
                        height={500}
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default What;
