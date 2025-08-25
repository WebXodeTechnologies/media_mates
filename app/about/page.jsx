// app/about/page.jsx
import React from "react";
import AboutHero from "@/app/components/aboutPage/AboutHero";
import MarqueeBar from "@/app/components/mainPage/MarqueeBar";
import OurStory from "@/app/components/aboutPage/OurStory";
import OurVison from "@/app/components/aboutPage/OurVison";

// ✅ Metadata for SEO
export const metadata = {
  title: "About Us | Media Mates - Creative Digital Agency",
  description:
    "Discover the story of Media Mates, a leading creative agency specializing in digital marketing, branding, advertising, and innovative campaigns that help brands grow.",
  keywords: [
    "creative agency",
    "digital marketing agency",
    "branding services",
    "advertising company",
    "design agency",
    "Media Mates",
    "marketing strategy",
    "creative solutions",
    "social media marketing",
    "branding agency India",
    "performance marketing",
  ],
  alternates: {
    canonical: "https://www.mediamates.com/about",
  },
  openGraph: {
    title: "About Us | Media Mates",
    description:
      "Learn about Media Mates, a creative digital agency helping businesses grow with branding, digital marketing, and innovative campaigns.",
    url: "https://www.mediamates.com/about",
    siteName: "Media Mates",
    images: [
      {
        url: "https://www.mediamates.com/og-image.jpg", // replace with real OG image
        width: 1200,
        height: 630,
        alt: "Media Mates Creative Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Media Mates",
    description:
      "Media Mates is a creative agency focused on branding, marketing, and digital innovation.",
    images: ["https://www.mediamates.com/og-image.jpg"], // replace with real OG image
  },
};

const AboutPage = () => {
  return (
   <div className="">
    <AboutHero />
    <MarqueeBar />
    <OurStory />
    <OurVison />
   </div>
  );
};

export default AboutPage;
