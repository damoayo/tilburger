"use client";
import React from "react";
import { RevealList } from "next-reveal";
import ChooseCard from "./ChooseCard";

const About = () => {
  return (
    <div id="about" className="pt-16 pb-16">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        우리가 추구하는 가치는
      </h2>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <RevealList
          duration={1000}
          delay={50}
          opacity={0}
          interval={100}
          origin="left"
          distance="200px"
        >
          <div>
            <ChooseCard
              image="/images/i1.png"
              title="horse tail 분리"
              linkText="Start"
            />
          </div>
        </RevealList>
        <RevealList
          duration={1000}
          delay={200}
          opacity={0}
          interval={100}
          origin="left"
          distance="400px"
        >
          <div>
            <ChooseCard
              image="/images/i2.png"
              title="분리한 꼬리털을 소독 및 건조"
              linkText="Disinfectant"
            />
          </div>
        </RevealList>
        <RevealList
          duration={1000}
          delay={200}
          opacity={0}
          interval={100}
          origin="left"
          distance="600px"
        >
          <div>
            <ChooseCard
              image="/images/i3.png"
              title="건조한 꼬리털을 섬유화하여 가공"
              linkText="Processing"
            />
          </div>
        </RevealList>
        <RevealList
          duration={1000}
          delay={200}
          opacity={0}
          interval={100}
          origin="left"
          distance="800px"
        >
          <div>
            <ChooseCard
              image="/images/i4.png"
              title="베개 및 토퍼로 제작"
              linkText="Production"
            />
          </div>
        </RevealList>
      </div>
    </div>
  );
};

export default About;
