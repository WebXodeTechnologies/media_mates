"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    let locoScroll;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scrollEl = document.querySelector("#main-container");

      locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 0.8,
      });

      locoScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollEl.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();

      // Fix white space issue after images/fonts
      window.addEventListener("load", () => {
        locoScroll.update();
      });
    })();

    return () => {
      if (locoScroll) locoScroll.destroy();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div id="main-container" data-scroll-container className="overflow-hidden">
      <section data-scroll-section>{children}</section>
    </div>
  );
};

export default SmoothScroll;
