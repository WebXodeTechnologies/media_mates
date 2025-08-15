import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Load Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Media Mates | Branding, Photography & Promotions in Namakkal",
  description:
    "Media Mates offers expert personal branding, store promotions, photography, videography, and digital marketing in Namakkal. Specializing in weddings, events, and business growth strategies.",
  keywords: [
    "Media Mates Namakkal",
    "personal branding Namakkal",
    "store branding Namakkal",
    "business promotions Namakkal",
    "local news Namakkal",
    "Namakkal photography",
    "wedding photography Namakkal",
    "event photography Namakkal",
    "video promotions Namakkal",
    "YouTube promotions Namakkal",
    "digital marketing Namakkal",
  ],
  authors: [{ name: "Media Mates" }],
  openGraph: {
    title: "Media Mates | Branding, Photography & Promotions in Namakkal",
    description:
      "Helping brands, stores, and individuals grow with creative photography, video promotions, and marketing strategies in Namakkal.",
    url: "https://mediamates.in", // Replace with actual URL
    siteName: "Media Mates",
    images: [
      {
        url: "/og-image.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Media Mates Branding & Photography in Namakkal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Mates | Branding, Photography & Promotions in Namakkal",
    description:
      "Photography, videography, branding, and promotions to help businesses and individuals grow in Namakkal.",
    images: ["/og-image.jpg"], // Replace with actual image path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={plusJakartaSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
