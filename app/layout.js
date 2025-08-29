import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/app/components/mainPage/Navbar";
import Footer from "@/app/components/mainPage/Footer";
import SmoothScroll from "@/app/components/SmoothScroll";

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
  icons: {
    icon: [
      { url: "/logo/favicon-32x32.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  authors: [{ name: "Media Mates" }],
  openGraph: {
    title: "Media Mates | Branding, Photography & Promotions in Namakkal",
    description:
      "Helping brands, stores, and individuals grow with creative photography, video promotions, and marketing strategies in Namakkal.",
    url: "https://mediamates.in",
    siteName: "Media Mates",
    images: [
      {
        url: "/logo/favicon-32x32.png",
        width: 1200,
        height: 1200,
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
    images: ["/logo/mediamates-logo-main.png"], // Corrected path & name
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={plusJakartaSans.variable}>
      <body className="antialiased">
        <SmoothScroll>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Navbar />
            {/* Main content takes remaining space */}
            <main className="w-full h-screen">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

