"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  // 컨텐츠가 넘치는 경우에도 스크롤바를 보이지 않게함.
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
