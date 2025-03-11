"use client";
import Image from "next/image";
import React from "react";
import { RevealList } from "next-reveal";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb"
    >
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            {/* Top box */}
            <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white">
              <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
                Open
              </div>
              <p className="text-xs  sm:text-sm">
                오픈기념으로 말총토퍼를 10분께 추첨으로 증정합니다.
              </p>
            </div>
            {/* Heading */}
            <RevealList
              interval={1000}
              delay={200}
              opacity={0}
              duration={1000}
              distance="50px"
              origin="bottom"
            >
              <h2 className="text-2xl sm:text-2xl font-bold md:text-5xl mt-6  md:leading-[3rem] lg:leading-[3.5rem] mb-6">
                {/* 천연말총은 당신의 숙면을 돕고 건강한 환경을 만듭니다 */}
                말총을 사용한 베개와 토퍼는 가장 편안하고 탄력 있는 수면을
                제공합니다.
              </h2>
              {/* Description */}
              <p className="text-gray-700">
                말에서 가장긴 섬유질인 말꼬리를 사용한 베개와 토퍼는 가장
                편안하고 탄력 있는 수면을 제공합니다.
              </p>
            </RevealList>
          </div>
          {/* Image Content */}
          <RevealList
            interval={2000}
            delay={400}
            opacity={0}
            duration={1000}
            distance="50px"
            origin="bottom"
          >
            <div className="hidden lg:block ">
              <Image
                className="rounded-full  "
                src="/images/horse1.jpg"
                alt="hero"
                width={700}
                height={700}
                priority
              />
            </div>
          </RevealList>
        </div>
      </div>
    </div>
  );
};

export default Hero;
