"use client";
import React from "react";
import { motion } from "framer-motion";
import { Camera, Globe, Mic, PenTool, Users, Video, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Digital Promotions",
    desc: "Creative campaigns that boost your online presence.",
    icon: <Globe className="w-6 h-6" />,
    img: "/about-story/pexels-photo-9771813.jpeg",
    col: "md:col-span-2",
    row: "row-span-1",
  },
  {
    title: "Personal Branding",
    desc: "Shaping strong personal identities in digital space.",
    icon: <Users className="w-6 h-6" />,
    img: "/about-story/pexels-3motional-studio-407102-1081685.jpg",
    col: "col-span-1",
    row: "row-span-1",
  },
  {
    title: "Wedding & Photoshoots",
    desc: "Capturing memories with timeless storytelling.",
    icon: <Camera className="w-6 h-6" />,
    img: "/about-story/pexels-jonathanborba-3101548.jpg",
    col: "col-span-1",
    row: "row-span-1",
  },
  {
    title: "Podcast & YouTube",
    desc: "Professional setups for engaging content creation.",
    icon: <Mic className="w-6 h-6" />,
    img: "/about-story/pexels-george-milton-6954174.jpg",
    col: "md:col-span-2",
    row: "row-span-1",
  },
  {
    title: "Website Development",
    desc: "Premium websites tailored for growth.",
    icon: <PenTool className="w-6 h-6" />,
    img: "about-story/pexels-picjumbo-com-55570-196644.jpg",
    col: "md:col-span-2",
    row: "row-span-1",
  },
  {
    title: "Media Promotions",
    desc: "Awareness campaigns & local media coverage.",
    icon: <Video className="w-6 h-6" />,
    img: "about-story/pexels-michele-raffoni-88958531-9065337.jpg",
    col: "col-span-1",
    row: "row-span-1",
  },
];

const OurStory = () => {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent">
            Our Story
          </h2>
          <p className="mt-4 text-black dark:text-white max-w-3xl mx-auto tracking-wider leading-sung ">
            Media Mates is a startup digital agency founded by     {" "}
            <span className="text-lime-600 font-semibold mr-2">
              Bharath Dheenadhayalan
            </span>
            We specialize in crafting digital promotions,
            branding, photography, podcasts, websites, and impactful media
            campaigns.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[280px] gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-xl ${service.col} ${service.row}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotateZ: 0.5 }}
            >
              {/* Background */}
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80  hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-2 text-lime-400">
                  {service.icon}
                  <h3 className="font-bold text-lg">{service.title}</h3>
                </div>
                <p className="text-gray-200 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to grow your brand with Media Mates?
          </h3>
          <p className="text-gray-400 mb-6">
            Let’s bring your ideas to life through creative media and digital
            solutions.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-lime-400 text-black font-semibold rounded-full shadow-lg hover:bg-white transition-all duration-300"
          >
            Get In Touch <ArrowUpRight className="inline-block w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
