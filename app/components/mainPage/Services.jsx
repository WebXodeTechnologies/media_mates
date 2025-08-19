"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Branding",
      description: "Crafting unique identities for business growth.",
      src: "/services/badge.gif",
    },

    {
      id: 2,
      title: "YouTube Video Creation",
      description: "Engaging content tailored for YouTube.",
      src: "/services/video-channel.gif",
    },
    {
      id: 3,
      title: "Website Development",
      description: "Responsive, modern websites for your brand.",
      src: "/services/programmer.gif",
    },
    {
      id: 4,
      title: "Media Promotions",
      description: "Boost visibility with smart media strategies.",
      src: "/services/promotion.gif",
    },
        {
      id: 5,
      title: "Photoshoot",
      description: "Professional shoots for personal and business use.",
      src: "/services/solo-traveller.gif",
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Promote your brand and reach audiences online.",
      src: "/services/person-with-fire.gif",
    },
  ];

  // Scroll animation using GSAP
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white tracking-wide bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500">
          Services
        </h2>
        <p className="text-black dark:text-white mt-2 text-xl md:text-2xl">
          Innovative Creative Services tailored to your Business Growth
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card rounded-2xl  bg-gradient-to-br from-gray-900 via-black to-gray-950  transition-transform duration-500 hover:scale-105 hover:rotate-1 
                 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] shadow-md   p-6 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 relative mb-4">
              <Image
                src={service.src}
                alt={service.title}
                width={80}
                height={80}
                className="object-contain "
                unoptimized
              />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-white text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <p className="text-lg sm:text-xl text-black dark:text-white mb-6">
          Are you interested to work together and get a free quote?
        </p>
        <button
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full text-black bg-green-400 hover:bg-green-500 
                           transition-all duration-300 text-lg sm:text-base shadow-[0_0_15px_rgba(16,185,129,0.8)] hover:shadow-[0_0_30px_rgba(16,185,129,0.9)] hover:scale-105"
        >
          Get a Quote <ArrowUpRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Services;
