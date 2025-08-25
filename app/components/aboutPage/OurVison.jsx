import React from "react";
import { TbScanEye } from "react-icons/tb";
import { IoDiamondSharp, IoLogoAppleAr } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

const data = [
    {
        type: "card",
        icon: <TbScanEye />,
        title: "Our Mission",
        desc: "To empower businesses and creators with impactful digital storytelling — through branding, media, and technology that spark engagement and drive measurable growth.",
    },
    {
        type: "image",
        img: "/vison/our-approach-image-1.jpg",
        alt: "Team brainstorming",
    },
    {
        type: "card",
        icon: <IoDiamondSharp />,
        title: "Our Values",
        desc: "We thrive on creativity, authenticity, and innovation — building campaigns that earn trust, inspire audiences, and deliver real results every single time.",
    },
    {
        type: "image",
        img: "/vison/our-approach-image-2.jpg",
        alt: "Creative collaboration",
    },
    {
        type: "card",
        icon: <IoLogoAppleAr />,
        title: "Our Vision",
        desc: "To become a leading creative force that shapes the future of media and marketing, redefining how brands connect with people in the digital-first world.",
    },
    {
        type: "image",
        img: "/vison/our-approach-image-3.jpg",
        alt: "Team success",
    },
];

const ApproachSection = () => {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
                <p className="text-lime-400 font-semibold uppercase tracking-wider">
                    <span className="ml-2 text-lime-400 text-xl">✱</span> our process
                </p>
                <h2 className="text-3xl md:text-5xl font-bold mt-2">
                    Our creative <span className="text-lime-400">approach</span> <br />
                    to achieve excellence
                </h2>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, i) =>
                    item.type === "card" ? (
                        <div
                            key={i}
                            className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-lg flex flex-col justify-between 
                                       hover:scale-105 transition-transform duration-300 
                                       hover:shadow-[0_0_20px_#a3e635]" // Backlight effect
                        >
                            {/* Icon with Circle */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white mb-4">
                                {React.cloneElement(item.icon, {
                                    className: "text-2xl text-black",
                                })}
                            </div>
                            <h3 className="text-xl text-white font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ) : (
                        <div
                            key={i}
                            className="rounded-2xl overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={item.img}
                                alt={item.alt}
                                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                            />
                        </div>
                    )
                )}
            </div>

            {/* CTA */}
            <div className="text-center mt-14 flex justify-center">
                <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-black font-semibold rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_#a3e635]" // Glow effect on hover
                >
                    Let’s Work Together
                    <GoArrowUpRight className="text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </a>
            </div>
        </section>
    );
};

export default ApproachSection;
