import HeroBody from "@/app/components/mainPage/HeroBody";
import MarqueeBar from "@/app/components/mainPage/MarqueeBar";
import AboutSample from "@/app/components/mainPage/AboutSample";
import Services from "@/app/components/mainPage/Services";
import WhyChoose from "@/app/components/mainPage/WhyChoose";
import PortFolio from "@/app/components/mainPage/PortfolioSample";

export default function Home() {
  return (
    <main className="">
      <HeroBody />
      <MarqueeBar />
      <AboutSample  />
      <Services />
      <WhyChoose />
      <PortFolio/>
    </main>
  );
}
