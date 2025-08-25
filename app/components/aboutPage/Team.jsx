"use client";
import React from 'react'
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Team = () => {
    const teamMembers = [
        {
            name: "Bharth",
            role: "Founder & CEO",
            image: "/team/WhatsApp Image 2025-08-25 at 11.16.30_f01b3faf.jpg",
            socials: { facebook: "#", linkedin: "#", instagram: "#", youtube: "#" },
        },
        {
            name: "Jegan Ravikumar",
            role: "Video Marketing Expert",
            image: "/team/IMG_0950.JPG",
            socials: { facebook: "https://www.facebook.com/thalajegan.jegan.5?mibextid=wwXIfr&rdid=0lGkdHVknYuwkeW0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1F8UkqnS3v%2F%3Fmibextid%3DwwXIfr#", linkedin: "#", instagram: "https://www.instagram.com/j_e_g_a_n___?igsh=MXE1aGQ4OGpvM3p2ZA%3D%3D&utm_source=qr", youtube: "#" },
        },
        {
            name: "AnandBabu Shanmugam",
            role: "Digital Marketing Head",
            image: "/team/anand.jpg",
            socials: { facebook: "https://www.facebook.com/hungrybyte.net?mibextid=wwXIfr&rdid=VHz0CPnDrz9Z7Jkb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19ttAnUd1N%2F%3Fmibextid%3DwwXIfr#", linkedin: "#", instagram: "https://www.instagram.com/hungrybyte.digital?igsh=MWNkYjdxejlycjhlNQ%3D%3D&utm_source=qr", youtube: "#" },
        },
        {
            name: "Akash S M",
            role: "Full Stack Developer",
            image: "/team/ak.jpg",
            socials: { facebook: "#", linkedin: "#", instagram: "https://www.instagram.com/webxode/", youtube: "#" },
        },
    ];

    return (
        <section className="max-w-7xl mx-auto py-20 px-6 lg:px-20">
            <div className="text-center mb-12">
                <p className="text-lime-400 text-sm font-semibold uppercase tracking-wide">
                    <span className="ml-2 text-lime-400 text-xl">✱</span> Our Team
                </p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                    Meet Our <span className="text-lime-400">Experts</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-lime-400/40 transition-transform duration-500 hover:scale-105"
                    >
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={500}
                            height={500}
                            className="object-cover w-full h-[380px]"
                        />

                        {/* Social Icons – floating right ribbon */}
                        <div className="absolute top-4 right-[-60px] group-hover:right-4 flex flex-col space-y-3 transition-all duration-500">
                            <a href={member.socials.facebook} target="_blank" className="bg-lime-400 text-black p-3 rounded-full shadow-md hover:bg-white hover:text-black transition">
                                <FaFacebookF />
                            </a>
                            <a href={member.socials.linkedin} target="_blank" className="bg-lime-400 text-black  p-3 rounded-full shadow-md hover:bg-white hover:text-black transition">
                                <FaLinkedinIn />
                            </a>
                            <a href={member.socials.instagram} target="_blank" className="bg-lime-400 text-black  p-3 rounded-full shadow-md hover:bg-white hover:text-black transition">
                                <FaInstagram />
                            </a>
                            <a href={member.socials.youtube} target="_blank" className="bg-lime-400 text-black  p-3 rounded-full shadow-md hover:bg-white hover:text-black transition">
                                <FaYoutube />
                            </a>
                        </div>

                        {/* Name + Role */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-lg font-bold text-white">{member.name}</h3>
                            <p className="text-sm opacity-80 text-gray-200">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Team;
