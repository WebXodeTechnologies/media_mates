"use client";
import { Phone } from "lucide-react";
import React from "react";

const FloatingCta = ({
  text = "Need Help !",
  phone = "+91-7826938373",
  icon = <Phone size={22} />,
  bgColor = "bg-gray-800",
  textColor = "text-white",
}) => {
  return (
    <a
      href={`tel:${phone}`}
      className="flex items-center shadow-lg rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105 w-fit"
    >
      {/* ICON SIDE */}
      <div className="bg-lime-400 p-4 flex items-center justify-center">
        <span className="bg-black text-lime-400 p-3 rounded-full flex items-center justify-center">
          {icon}
        </span>
      </div>

      {/* TEXT SIDE */}
      <div className={`px-4 py-3 ${bgColor}`}>
        <p className={`text-sm font-medium ${textColor}`}>{text}</p>
        <p className={`text-lg font-bold ${textColor}`}>{phone}</p>
      </div>
    </a>
  );
};

export default FloatingCta;
