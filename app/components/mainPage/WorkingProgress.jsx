"use client";
import React from "react";

const WorkingProgress = () => {
  const processSteps = [
    {
      id: "01",
      title: "Understanding",
      description:
        "We dive deep into your goals, vision, and target audience through in-depth consultation.",
    },
    {
      id: "02",
      title: "Strategy & Planning",
      description:
        "We define clear strategies and create a step-by-step roadmap for smooth execution.",
    },
    {
      id: "03",
      title: "Creative Ideation",
      description:
        "We brainstorm and bring innovative ideas to craft unique, standout solutions.",
    },
    {
      id: "04",
      title: "Support & Growth",
      description:
        "We provide continuous support and growth strategies for long-term success.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-lime-400 font-semibold mb-3 flex items-center justify-center gap-2">
          <span className="text-lg">✱</span> OUR PROCESS
        </p>
        <h2 className="max-w-3xl mx-auto text-center text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-black dark:text-white">
          Our seamless <span className="text-lime-400">process</span> for
          exceptional results
        </h2>
      </div>

      {/* Process Steps */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="group bg-neutral-900 rounded-2xl p-8 flex flex-col items-start shadow-md 
                       hover:shadow-lime-400/30 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Number Badge */}
            <div
              className="bg-lime-400 text-black font-extrabold 
                         text-lg md:text-xl 
                         inline-flex items-center justify-center 
                         w-14 h-14 md:w-16 md:h-16 
                         rounded-xl shadow-lg 
                         transition-all duration-300 
                         group-hover:bg-white group-hover:text-black group-hover:scale-110"
            >
              {step.id}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mt-6 mb-3 text-white group-hover:text-lime-400 transition-colors">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProgress;
