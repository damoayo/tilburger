// import ScrollRevealComponent from "../../ScrollReveal/ScrollReveal";
"use client";
import React from "react";
import { RevealList } from "next-reveal";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Why you choose this application
      </h2>
      <div>
        <RevealList
          interval={60}
          delay={500}
          className="flex flex-wrap items-center justify-center"
        >
          <div className="bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2"></div>
          <div className="bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2"></div>
          <div className="bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2"></div>
          <div className="bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2"></div>
        </RevealList>
        {/* <ScrollRevealComponent /> */}
      </div>
    </div>
  );
};

export default About;
