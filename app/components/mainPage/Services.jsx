"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";

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
      src: "/services/blogger.gif",
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
    <section className="relative max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-md font-semibold text-lime-400 uppercase">
          <span className="text-lime-400">✱</span> Services
        </h2>
        <p className="text-black dark:text-white mt-2 text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide">
          Innovative <span className="text-lime-400">Creative Services</span>{" "}
          tailored to your Business Growth
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl  bg-gradient-to-br from-gray-900 via-black to-gray-950  transition-transform duration-500 hover:scale-105 hover:rotate-1 
                 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] shadow-md p-6 flex flex-col items-center justify-center bg-red-400"
          >
            <div className="w-20 h-20 relative mb-4">
              <Image
                src={service.src}
                alt={service.title}
                width={80}
                height={80}
                className="object-contain rounded-full shadow-lg"
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
      <div className="text-center mt-14 flex justify-center">
        <a
          href="/services"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-black font-semibold rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_#a3e635]" // Glow effect on hover
        >
          Learn More
          <GoArrowUpRight className="text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Services;
