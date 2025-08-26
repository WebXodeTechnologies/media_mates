"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const JourneySection = () => {
    const features = [
        {
            title: "Creative Storytelling",
            desc: "We craft compelling brand stories that emotionally connect with your audience.",
        },
        {
            title: "Strategic Campaigns",
            desc: "Data-driven media strategies that amplify reach, engagement, and impact.",
        },
        {
            title: "Production Excellence",
            desc: "From concept to execution, we deliver high-quality visuals, videos, and designs.",
        },
    ];

    const stats = [
        { value: "100+", label: "Creative portfolio projects completed." },
        { value: "97%", label: "Satisfied clients with innovative results." },
        { value: "25k+", label: "Hours of design & dev experience." },
        { value: "2.5k+", label: "Global clients served successfully." },
    ];

    return (
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20">
            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Text Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative group overflow-hidden bg-gradient-to-br from-gray-900/95 to-black/95 p-12 rounded-3xl shadow-2xl"
                >
                    <p className="text-lime-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                        <span className="text-xl">✱</span> OUR FACT
                    </p>
                    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-snug text-white">
                        Our{" "}
                        <span className="bg-gradient-to-r from-lime-400 to-green-300 bg-clip-text text-lime-400">
                            journey
                        </span>{" "}
                        your inspiration
                    </h2>
                    <p className="mt-2 text-gray-300 leading-relaxed">
                        Our journey is built on creativity, innovation, and inspiring brands
                        to achieve their full potential.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-lime-400 text-black rounded-full font-semibold shadow-lg hover:shadow-lime-500/50 transition-all duration-300"
                    >
                        Contact Us <ArrowUpRight size={18} />
                    </motion.button>

                    {/* Glow hover effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-lime-400 via-green-400 to-lime-600 blur-3xl transition-all duration-500" />
                </motion.div>

                {/* Right Image Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl group h-full"
                >
                    <Image
                        src="/journey/our-fact-image.jpg"
                        alt="Team"
                        width={600}
                        height={600}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>
            </div>

            {/* Features */}
            <div className="mt-20 grid md:grid-cols-3 gap-8">
                {features.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        whileHover={{ y: -8, scale: 1.05 }}
                        className="p-8 bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-md hover:shadow-lime-500/40 transition-all cursor-pointer"
                    >
                        <h3 className="font-semibold text-xl text-white">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        whileHover={{ y: -8 }}
                        className="p-6 bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-lg hover:shadow-lime-500/30 transition-all"
                    >
                        <h3 className="text-4xl font-extrabold bg-gradient-to-r from-lime-400 to-green-300 bg-clip-text text-transparent">
                            {stat.value}
                        </h3>
                        <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default JourneySection;
