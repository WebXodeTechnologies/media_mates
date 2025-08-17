"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";
import Logo from "@/public/logo/Mediamateslogo.png";
import LogoDark from "@/public/logo/MediamatesLogoWhite.png";
import Image from "next/image";
import clsx from "clsx";
import { FaXTwitter } from "react-icons/fa6"; 
import { RiApps2AiLine } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="border-b border-gray-500 border-blur">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-6">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={theme === "dark" ? LogoDark : Logo}
            alt="Mediamates Logo"
            width={200}
            height={200}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Middle: Menu */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium dark:text-white hover:text-lime-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Social Icons + Theme Toggle */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-lime-400 hover:text-lime-300 transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-lime-400 hover:text-lime-300 transition">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-lime-400 hover:text-lime-300 transition">
            <FaXTwitter size={20} />
          </a>
          <a href="#" className="text-lime-400 hover:text-lime-300 transition">
            <RiApps2AiLine size={25} />
          </a>
          
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-64 bg-white dark:bg-neutral-900 shadow-lg transform transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-neutral-900 dark:text-neutral-100" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6 text-lg text-neutral-800 dark:text-neutral-200">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-lime-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
