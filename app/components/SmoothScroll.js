"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const locoRef = useRef(null); // keep reference to Locomotive

  useEffect(() => {
    if (!scrollRef.current) return;

    let refreshHandler;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      // Initialize Locomotive Scroll
      locoRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        lerp: 0.08, // buttery smooth
      });

      const locoScroll = locoRef.current;

      // Update ScrollTrigger on scroll
      locoScroll.on("scroll", ScrollTrigger.update);

      // Proxy Locomotive for ScrollTrigger
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

      // Force refresh Locomotive on window load
      refreshHandler = () => locoScroll.update();
      ScrollTrigger.addEventListener("refresh", refreshHandler);
      requestAnimationFrame(() => locoScroll.update());
      ScrollTrigger.refresh();
    })();

    return () => {
      if (locoRef.current) locoRef.current.destroy();
      if (refreshHandler) ScrollTrigger.removeEventListener("refresh", refreshHandler);
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="overflow-hidden">
      {children}
    </div>
  );
};

export default SmoothScroll;
