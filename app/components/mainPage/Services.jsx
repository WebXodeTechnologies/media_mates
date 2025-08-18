"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const services = [
    { id: 1, title: "Branding", description: "Creating a unique identity for your business.", src: "/services/badge.gif" },
    { id: 2, title: "Photoshoot", description: "Professional photoshoots for personal business needs.", src: "/services/solo-traveller.gif" },
    { id: 3, title: "Digital Marketing", description: "Promote your brand online and reach your audience effectively.", src: "/services/person-with-fire.gif" },
    { id: 4, title: "YouTube Video Creation", description: "Engaging video content creation for YouTube channels.", src: "/services/video-channel.gif" },
    { id: 5, title: "Website Development", description: "Modern, responsive websites tailored to your business.", src: "/services/programmer.gif" },
    { id: 6, title: "Media Promotions", description: "Boost your brand through effective media promotion strategies.", src: "/services/promotion.gif" },
  ];

  // Scroll animationation using GSAP
  useEffect(() => {
    gsap.from(".service-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".service-card",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white tracking-wide bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500">
          Services
        </h2>
        <p className="text-black dark:text-white mt-2 text-xl md:text-2xl">
          Innovative design services tailored to your needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card h-full min-h-[260px] p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-950 flex flex-col items-center justify-center text-center
                       transition-transform duration-500 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] group"
          >
            {/* Icon / Image */}
            <div className="w-20 h-20 mb-4 transition-transform duration-500 group-hover:translate-y-[-8px] group-hover:scale-110">
              <Image
                src={service.src}
                alt={service.title}
                width={80}
                height={80}
                className="object-contain rounded-full"
                unoptimized
              />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base">{service.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <p className="text-lg sm:text-xl text-black dark:text-white mb-6">
          Are you interested to work together and get a free quote?
        </p>
        <button className="inline-flex items-center gap-3 px-8 py-3 rounded-full text-black bg-green-400 hover:bg-green-500 
                           transition-all duration-300 text-lg sm:text-base shadow-[0_0_15px_rgba(16,185,129,0.8)] hover:shadow-[0_0_30px_rgba(16,185,129,0.9)] hover:scale-105">
          Get a Quote <ArrowUpRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Services;
