import React from "react";
import HeroSection from "@/app/components/servicePage/HeroSection";
import MarqueeBar from "@/app/components/mainPage/MarqueeBar";
import DigitalMarketing from "@/app/components/servicePage/DigitalMarketing";
import DgService from "@/app/components/servicePage/DgService";
import CTASection from "@/app/components/mainPage/CTASection";


export const metadata = {
  title: "Services | Media Mates - Digital Media & Marketing Agency",
  description:
    "Explore Media Mates services – Digital Marketing, Social Media Management, Branding, Web Development, and Content Creation. Boost your business with our creative solutions.",
  keywords: [
    "Media Mates",
    "digital marketing agency",
    "media agency services",
    "branding and design",
    "social media management",
    "content marketing",
    "SEO agency",
    "web development services",
    "online advertising",
    "creative agency",
  ],
  openGraph: {
    title: "Media Mates - Professional Media & Marketing Services",
    description:
      "Media Mates offers expert services in branding, digital marketing, SEO, content creation, and web solutions to help businesses grow online.",
    url: "https://mediamates.com/services", // replace with actual domain
    siteName: "Media Mates",
    images: [
      {
        url: "https://mediamates.com/og-image.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Media Mates - Digital Media Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Mates - Digital Marketing & Media Agency Services",
    description:
      "Grow your business with Media Mates – Experts in digital marketing, SEO, social media, and creative solutions.",
    images: ["https://mediamates.com/twitter-card.jpg"], // replace
  },
  alternates: {
    canonical: "https://mediamates.com/services",
  },
};

const page = () => {
  return (
    <div>
      <HeroSection />
      <MarqueeBar />
      <DgService />
      <CTASection />
      
      
    </div>
  )
}

export default page