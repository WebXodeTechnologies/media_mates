"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto w-full  text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="">
          <p className="text-lime-400 font-semibold mb-2 flex items-center gap-2">
            <span className="text-xl">✱</span> OUR FEATURE
          </p>
          <h2 className="text-4xl font-bold leading-snug mb-4 text-black dark:text-white">
            Explore our <span className="text-lime-400 ">features and</span>{" "}
            unique offerings
          </h2>
          <p className="text-black dark:text-white text-lg mb-4">
            Driving growth through design, content, and technology — we help brands transform ideas into meaningful experiences that last.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-45 md:h-50 lg:h-60">
          <Image
            src="/featuresection/our-feature-image.jpg" // replace with your image path
            alt="Team Collaboration"
            width={500}
            height={500}

            className="object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Feature Cards & Right Bullet Section */}
      <div className=" grid md:grid-cols-2 gap-10 items-center">

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-neutral-900 rounded-2xl p-6 text-center shadow-md flex flex-col items-center justify-center">
            <Image src="/featuresection/icon-feature-1.svg" alt="icon" width={50} height={50} className=" w-12 h-12 mb-4 object-contain" />
            <h3 className="font-semibold">Brand Identity & Design</h3>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 text-center shadow-md flex flex-col items-center justify-center">
            <Image src="/featuresection/icon-feature-2.svg" alt="icon" width={50} height={50} className="w-12 h-12 mb-4 object-contain" />
            <h3 className="font-semibold">Creative Content Development </h3>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 text-center shadow-md flex flex-col items-center justify-center">
            <Image src="/featuresection/icon-feature-3.svg" alt="icon" width={50} height={50} className="w-12 h-12 mb-4 object-contain" />
            <h3 className="font-semibold">Digital Marketing Solutions</h3>
          </div>
        </div>

        {/* Bullet Points */}
        <div>
          <p className="text-black dark:text-white mb-6">
            Discover the distinctive features and exclusive offerings that set us apart.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-black dark:text-white">
              <CheckCircle className="text-lime-400" size={20} />
              User-Centric Interface Design
            </li>
            <li className="flex items-center gap-2 text-black dark:text-white">
              <CheckCircle className="text-lime-400" size={20} />
              Cutting-Edge Technology Use
            </li>
            <li className="flex items-center gap-2 text-black dark:text-white">
              <CheckCircle className="text-lime-400" size={20} />
              Scalable and Flexible Solutions
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
