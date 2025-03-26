"use client";
import React from "react";
import { RevealList } from "next-reveal";
import ChooseCard from "./ChooseCard";

const About = () => {
  return (
    <div id="about" className="pt-16  pb-16">
      <h2 className="mt-32 text-2xl md:text-3xl capitalize font-bold text-center">
        TILBURGER 배게는 어떻게 만들어질까요?
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
              image="/images/about1.png"
              title="조직이 치밀한 말꼬리 털만을 수거"
              linkText="꼬리털만 수거"
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
              image="/images/about2.png"
              title="분리한 꼬리털을 특별한 소독과 건조를 반복"
              linkText="속독과 건조"
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
              image="/images/about3.png"
              title="건조한 꼬리털을 섬유화하여 물리적인 가공"
              linkText="물리적 가공"
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
              image="/images/about4.png"
              title="100% 순면을 사용하여 베개 및 토퍼로 제작"
              linkText="제작"
            />
          </div>
        </RevealList>
      </div>
    </div>
  );
};

export default About;
