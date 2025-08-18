"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  // Array of service objects
  const services = [
    {
      id: 1,
      title: "Branding",
      description: "Creating a unique identity for your business.",
      src: "/services/badge.gif",
    },
    {
      id: 2,
      title: "Photoshoot",
      description: "Professional photoshoots for personal or business needs.",
      src: "/services/badge.gif",
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Promote your brand online and reach your audience effectively.",
      src: "/services/badge.gif",
    },
    {
      id: 4,
      title: "YouTube Video Creation",
      description: "Engaging video content creation for YouTube channels.",
      src: "/services/badge.gif",
    },
    {
      id: 5,
      title: "Website Development",
      description: "Modern, responsive websites tailored to your business.",
      src: "/services/badge.gif",
    },
    {
      id: 6,
      title: "Media Promotions",
      description: "Boost your brand through effective media promotion strategies.",
      src: "/services/badge.gif",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white dark:bg-black transition-colors duration-300">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg sm:text-xl">
          Innovative design services tailored to your needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300"
          >
            {/* Icon / Image */}
            <div className="w-20 h-20 mb-4">
              <Image
                src={service.src}
                alt={service.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4">
          Are you interested to work together and get a free quote?
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors duration-200 text-lg sm:text-base">
          Get a Quote <ArrowUpRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Services;
