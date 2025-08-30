"use client";
import React from "react";
import { FaStarOfLife } from "react-icons/fa";

const MarqueeBar = () => {
  const items = [
    "Photoshoot",
    "Branding",
    "Personal Branding",
    "Media Promotions",
    "Digital Marketing",
    "Website Development",
    "Social Media Handling",
    "Wedding Photography",
    "Outdoor Shoot",
    "YouTube Video Creation",
    "Content Creation",
    "Content Marketing",
  ];

  return (
    <div className="w-full h-auto overflow-hidden border-y border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-lime-400 py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Original list */}
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center text-gray-800 dark:text-gray-950 text-2xl font-bold mx-10"
          >
            <span>{item}</span>
            <FaStarOfLife className="mx-8 text-yellow-500 dark:text-black" />
          </div>
        ))}

        {/* Duplicate list for seamless loop */}
        {items.map((item, idx) => (
          <div
            key={`dup-${idx}`}
            className="flex items-center text-gray-800 dark:text-gray-950 text-4xl font-bold mx-10"
          >
            <span>{item}</span>
            <FaStarOfLife className="mx-8 text-yellow-500 dark:text-black" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBar;
