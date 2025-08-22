import HeroBody from "@/app/components/mainPage/HeroBody";
import MarqueeBar from "@/app/components/mainPage/MarqueeBar";
import AboutSample from "@/app/components/mainPage/AboutSample";
import Services from "@/app/components/mainPage/Services";
import WhyChoose from "@/app/components/mainPage/WhyChoose";
import PortFolio from "@/app/components/mainPage/PortfolioSample";
import FeaturesSection from "@/app/components/mainPage/FeaturesSection";
import ToolsSection from "@/app/components/mainPage/ToolsSection";
import Expertise from "@/app/components/mainPage/Expertise";
import WorkingProgress from "@/app/components/mainPage/WorkingProgress";
import Testimonial from "@/app/components/mainPage/Testimonial";

export default function Home() {
  return (
    <main className="">
      <HeroBody />
      <MarqueeBar />
      <AboutSample />
      <Services />
      <WhyChoose />
      <PortFolio />
      <FeaturesSection />
      <ToolsSection />
      <Expertise />
      <WorkingProgress />
      <Testimonial />
    </main>
  );
}
