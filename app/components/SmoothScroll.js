"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    let locoScroll;
    let refreshHandler;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        lerp: 0.08, // lower = more smooth
      });

      // Update ScrollTrigger on loco scroll
      locoScroll.on("scroll", ScrollTrigger.update);

      // Proxy locomotive for ScrollTrigger
      ScrollTrigger.scrollerProxy(scrollRef.current, {
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
        pinType: scrollRef.current.style.transform ? "transform" : "fixed",
      });

      // Smooth refresh handling
      refreshHandler = () => locoScroll.update();
      ScrollTrigger.addEventListener("refresh", refreshHandler);
      ScrollTrigger.refresh();

      // Force update for images/fonts
      requestAnimationFrame(() => locoScroll.update());
    })();

    return () => {
      if (locoScroll) locoScroll.destroy();
      if (refreshHandler) ScrollTrigger.removeEventListener("refresh", refreshHandler);
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div
      id="main-container"
      ref={scrollRef}
      data-scroll-container
      className="overflow-hidden"
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
