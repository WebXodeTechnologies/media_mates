import HeroBody from "@/app/components/mainPage/HeroBody";
import MarqueeBar from "@/app/components/mainPage/MarqueeBar";
import AboutSample from "@/app/components/mainPage/AboutSample";
import Services from "@/app/components/mainPage/Services";

export default function Home() {
  return (
    <main className="">
      <HeroBody />
      <MarqueeBar />
      <AboutSample  />
      <Services />
    </main>
  );
}
