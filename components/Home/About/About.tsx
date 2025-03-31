"use client";
import React from "react";
import { RevealList } from "next-reveal";
import ChooseCard from "./ChooseCard";

const About = () => {
  return (
    <div
      id="about"
      className="relative w-full min-h-screen bg-[#f7f6fb] pt-32 pb-20"
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#daa520]/20 to-transparent" />
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#daa520] mb-4">
            TILBURGER 베개는 어떻게 만들어질까요?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            최고급 말총으로 만드는 프리미엄 베개의 제작 과정을 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <RevealList
            duration={1000}
            delay={50}
            opacity={0}
            interval={100}
            origin="bottom"
            distance="50px"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <ChooseCard
                image="/images/about1.png"
                title="조직이 치밀한 말꼬리 털만을 수거"
                linkText="꼬리털만 수거"
              />
            </div>
          </RevealList>

          <RevealList
            duration={1000}
            delay={100}
            opacity={0}
            interval={100}
            origin="bottom"
            distance="50px"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <ChooseCard
                image="/images/about2.png"
                title="분리한 꼬리털을 특별한 소독과 건조를 반복"
                linkText="소독과 건조"
              />
            </div>
          </RevealList>

          <RevealList
            duration={1000}
            delay={150}
            opacity={0}
            interval={100}
            origin="bottom"
            distance="50px"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
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
            origin="bottom"
            distance="50px"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <ChooseCard
                image="/images/about4.png"
                title="100% 순면을 사용하여 베개 및 토퍼로 제작"
                linkText="제작"
              />
            </div>
          </RevealList>
        </div>
      </div>
    </div>
  );
};

export default About;
