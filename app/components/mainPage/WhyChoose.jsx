"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      id: 1,
      title: "Data–Driven Campaigns",
      description:
        "We combine creativity with analytics to ensure your brand reaches the right audience effectively.",
    },
    {
      id: 2,
      title: "End-to-End Media Solutions",
      description:
        "From strategy to execution, we handle every stage of your digital presence.",
    },
    {
      id: 3,
      title: "Creative Storytelling",
      description:
        "Engaging visuals and narratives that make your brand stand out across platforms.",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-[1.2fr_1.8fr] gap-12 items-center">
        {/* Left Content */}
        <div className="text-left container flex-1">
          <p className="uppercase text-xl text-green-400 font-medium mb-4 tracking-wide">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-bold text-black dark:text-white leading-snug">
            Powering <span className="text-green-400">brands</span> with media excellence
          </h2>
          <p className="text-gray-950 dark:text-white mt-6 text-lg">
            As a creative media agency, we fuse innovation, strategy, and storytelling 
            to craft campaigns that captivate audiences and drive measurable results.
          </p>

          <ul className="mt-6 space-y-3 text-gray-200">
            <li className="flex items-center gap-2 text-xl text-black dark:text-white">
              <span className="text-green-400">✔</span>
              Innovative Campaigns Built for Modern Audiences
            </li>
            <li className="flex items-center gap-2 text-xl text-black dark:text-white">
              <span className="text-green-400">✔</span>
              Strategic Partnerships that Grow with Your Brand
            </li>
          </ul>

          <button className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-400 text-black font-medium hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/50">
            Let’s Collaborate <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Right Side: Image + Features */}
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Image */}
          <div className="relative flex-shrink-0 w-full max-w-[380px] lg:max-w-[420px] overflow-hidden rounded-[2rem] shadow-xl border border-green-400 group">
            <Image
              src="/whychoose/why-choose-image.jpg"
              alt="Creative Media Team"
              width={980}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
          </div>

          {/* Feature Cards */}
          <div className="bg-green-400 text-black rounded-2xl px-4 flex-1 shadow-md">
            {features.map((feature, idx) => (
              <div
                key={feature.id}
                className={`p-3 mb-3 ${
                  idx !== features.length - 1 ? "border-b border-black/20" : ""
                }`}
              >
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
