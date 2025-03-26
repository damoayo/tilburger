"use client"; // 만약 app router 사용 시 필요

import { RevealList } from "next-reveal";
import Image from "next/image";

import { useEffect } from "react";

export default function Carousel() {
  useEffect(() => {
    // Bootstrap JS가 클라이언트에서 동작하도록 보장
    import("bootstrap/dist/js/bootstrap.bundle.min.js" as never);
  }, []);

  return (
    <div id="home" className="carousel slide carousel-fade ">
      <div className="carousel-inner">
        <div className="carousel-item active relative w-full h-screen">
          <Image
            src="/images/product1.png"
            alt="Slide 1"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
            {/* Top box */}
            {/* <div className="w-fit py-1 px-2 md:px-5 rounded-full shadow-md flex items-center justify-center space-x-3 bg-white">
              <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-[#4169e1] md:text-base sm:text-sm text-xs text-[#fff]">
                Open
              </div>
              <p className=" mt-1 sm:text-sm">
                오픈기념으로 말총으로 만든 자사토퍼를 10분께 추첨으로 증정합니다.
              </p>
            </div> */}
            {/* Heading */}
            <RevealList
              interval={500}
              delay={200}
              opacity={0}
              duration={1500}
              distance="100px"
              origin="bottom"
            >
              <h2 className="text-2xl text-[#424242] sm:text-2xl font-bold md:text-5xl mt-6  md:leading-[3rem] lg:leading-[3.5rem] mb-6">
                {/* 천연말총은 당신의 숙면을 돕고 건강한 환경을 만듭니다 */}
                말총을 사용한 베개와 토퍼는 가장 편안하고 탄력 있는 수면을
                제공합니다.
              </h2>
              {/* Description */}
              <p className="text-lg text-[#424242]">
                말에서 가장긴 섬유질인 말꼬리를 사용한 베개와 토퍼는 가장
                편안하고 탄력 있는 수면을 제공합니다.
              </p>
            </RevealList>
          </div>
          {/* <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div> */}
        </div>
        <div className="carousel-item  relative w-full h-screen">
          <Image
            src="/images/main3.png"
            alt="Slide 3"
            fill
            className="object-cover"
            priority
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#home"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#home"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
