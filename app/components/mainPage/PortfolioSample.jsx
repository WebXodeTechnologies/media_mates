"use client";
import React, { useState } from "react";
import Image from "next/image";

const categories = [
  "All",
  "Branding",
  "Photoshoot",
  "Digital Marketing",
  "YouTube Video Creation",
  "Media Promotions",
];

const PortFolio = () => {
  const projects = [
    {
      id: 1,
      title: "Creative Brand Identity Design",
      category: "Branding",
      src: "/portfolio/project-1.jpg",
    },
    {
      id: 2,
      title: "Professional Photoshoot Campaign",
      category: "Photoshoot",
      src: "/portfolio/project-2.jpg",
    },
    {
      id: 3,
      title: "Successful Digital Marketing Strategy",
      category: "Digital Marketing",
      src: "/portfolio/project-3.jpg",
    },
    {
      id: 4,
      title: "Engaging YouTube Video Series",
      category: "YouTube Video Creation",
      src: "/portfolio/project-4.jpg",
    },
    {
      id: 5,
      title: "Responsive Business Website",
      category: "Website Development",
      src: "/portfolio/project-5.jpg",
    },
    {
      id: 6,
      title: "High-Impact Media Promotion Campaign",
      category: "Media Promotions",
      src: "/portfolio/project-6.jpg",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="uppercase text-sm text-green-400 font-semibold mb-3 tracking-wide">
          Portfolio
        </p>
        <h2 className="text-4xl font-bold text-white tracking-wide leading-relaxed">
          Showcasing our{" "}
          <span className="text-green-400">Creative Journey</span> and Works
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full transition-all font-medium ${
              activeCategory === cat
                ? "bg-green-400 text-black"
                : "bg-gray-800 text-white hover:bg-green-500 hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-green-500/30 transition-all duration-300"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <p className="text-green-400 text-sm font-medium">
                {project.category}
              </p>
              <h3 className="text-xl font-semibold text-white mt-2">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortFolio;
