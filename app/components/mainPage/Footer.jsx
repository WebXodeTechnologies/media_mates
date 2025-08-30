"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import LogoWhite from "@/public/logo/logo1.png"; // Light mode logo
import LogoDark from "@/public/logo/logo2.png";
import { GoArrowUpRight } from "react-icons/go";// Dark mode logo

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <footer className="border-t border-gray-500">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Logo + Tagline */}
        <div>
          {mounted && (
            <Image
              src={theme === "dark" ? LogoWhite : LogoDark}
              alt="Media Mates Logo"
              width={180}
              height={180}
              className="mb-4 transition-transform duration-300 hover:scale-105"
            />
          )}
          <p className="text-base mb-6 max-w-xs">
            Turning your story into a vision with branding, promotions, and creative media solutions.
          </p>
          <div className="text-center mt-14 flex justify-start">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-black font-semibold rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_#a3e635]" // Glow effect on hover
            >
              Learn More
              <GoArrowUpRight className="text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            Quick Links
          </h3>
          <ul className="space-y-3 text-lg">
            <li><Link href="/" className="hover:text-lime-500 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-lime-500 transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-lime-500 transition">Services</Link></li>
            <li><Link href="/contact" className="hover:text-lime-500 transition">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-lime-500 transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            Our Services
          </h3>
          <ul className="space-y-3 text-lg">
            <li className="hover:text-lime-500 transition">Digital Marketing</li>
            <li className="hover:text-lime-500 transition">Social Media Management (SMM)</li>
            <li className="hover:text-lime-500 transition">Product Photoshoot</li>
            <li className="hover:text-lime-500 transition">Personal Branding</li>
            <li className="hover:text-lime-500 transition">Media Promotions</li>
          </ul>
        </div>

        {/* Column 4: Social + CTA */}
        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            Follow Us
          </h3>
          <div className="flex flex-col gap-4 text-lg">
            <a href="https://www.facebook.com/mediamates.studio" className="flex items-center gap-2 hover:text-lime-500 transition">
              <FaFacebook /> Facebook
            </a>
            <a href="https://www.instagram.com/mediamates_/" className="flex items-center gap-2 hover:text-lime-500 transition">
              <FaInstagram /> Instagram
            </a>
            <a href="/" className="flex items-center gap-2 hover:text-lime-500 transition">
              <FaYoutube /> YouTube
            </a>
            <a href="/" className="flex items-center gap-2 hover:text-lime-500 transition">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200 dark:border-neutral-700  py-4 text-center text-xs dark:text-white">
        © {new Date().getFullYear()} Developed by Webxode Technologies. All rights reserved.
      </div>
    </footer>
  );
}
