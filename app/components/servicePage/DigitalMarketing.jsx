"use client";
import Image from "next/image";
import { HelpCircle } from "lucide-react";
import { BsArrowUpRight } from "react-icons/bs";
import React from "react";

export default function DigitalMarketing({
  heroImg,
  title,
  description,
  features,
  featureImg,
  sidebarServices,
  processSteps,
  faqs,
}) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20">
      {/* ----------- Section 1 (Hero + Sidebar) ----------- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          <Image
            src={heroImg}
            alt={title}
            width={800}
            height={500}
            className="rounded-2xl"
          />
          <h2 className="text-3xl lg:text-4xl font-bold">
            Key <span className="text-lime-400">features</span> of {title}
          </h2>
          <p className="text-black dark:text-white leading-relaxed">
            {description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ul className="space-y-2 py-7 text-black dark:text-white">
              {features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>

            <Image
              src={featureImg}
              alt="Feature Illustration"
              width={400}
              height={500}
              className="rounded-2xl object-cover w-80 h-60 ml-5"
            />
          </div>
        </div>

        {/* Sticky Sidebar */}
        <div className="space-y-10 lg:sticky lg:top-20 h-fit">
          <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-neutral-700 pb-3">
              Services Category
            </h3>
            <ul className="space-y-4 text-white ">
              {sidebarServices.map((service, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between cursor-pointer group border-b border-neutral-700 pb-3"
                >
                  <span className="transition-colors duration-300 group-hover:text-lime-400">
                    {service}
                  </span>
                  <BsArrowUpRight className="text-lime-400 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#141414] p-6 rounded-2xl text-center flex flex-col items-center shadow-lg w-full max-w-sm">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-transparent mb-4">
              <Image
                src="/icons/icon-sidebar-cta.svg"
                alt="Questions Icon"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-lg font-semibold text-lime-400 mb-2">
              You have different questions?
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Our team will answer all your questions. <br />
              We ensure a quick response.
            </p>
            <a
              href="tel:+919150253488"
              className="inline-block bg-lime-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-lime-500 transition duration-300"
            >
              +91-9150253488
            </a>
          </div>
        </div>
      </div>

      {/* ----------- Section 2 (Process Steps) ----------- */}
      <div className="mt-10 max-w-3xl">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Our <span className="text-lime-400">process</span> of {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {processSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              {idx % 2 === 0 ? (
                <>
                  <div className="bg-neutral-900 p-6 rounded-2xl">
                    <div className="flex flex-row justify-between items-center">
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={40}
                        height={40}
                      />
                      <h3 className="text-lime-400 font-semibold text-2xl">
                        STEP {idx + 1}
                      </h3>
                    </div>
                    <div className="mt-20">
                      <h4 className="text-xl font-bold text-white">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 mt-2">{step.description}</p>
                    </div>
                  </div>
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={500}
                    height={350}
                    className="rounded-2xl"
                  />
                </>
              ) : (
                <>
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={500}
                    height={350}
                    className="rounded-2xl"
                  />
                  <div className="bg-neutral-900 p-6 rounded-2xl">
                    <div className="flex flex-row justify-between items-center">
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={40}
                        height={40}
                      />
                      <h3 className="text-lime-400 font-semibold text-2xl">
                        STEP {idx + 1}
                      </h3>
                    </div>
                    <div className="mt-20">
                      <h4 className="text-xl font-bold text-white">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 mt-2">{step.description}</p>
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ----------- Section 3 (FAQ Section) ----------- */}
      <section className="text-black dark:text-white py-20 mt-10 px-6 rounded-2xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-12">
            Lets address your <span className="text-lime-400">questions</span>{" "}
            today!
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-lime-400 text-black rounded-full p-3 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{faq.question}</h3>
                  <p className="text-black dark:text-white text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
