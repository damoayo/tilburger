"use client";

import { RevealList } from "next-reveal";
import Image from "next/image";

export default function Carousel() {
  return (
    <div id="home" className="relative w-full h-screen">
      <Image
        src="/images/main3.png"
        alt="Premium Sleep Experience"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
        <RevealList
          interval={500}
          delay={200}
          opacity={0}
          duration={1500}
          distance="100px"
          origin="bottom"
        >
          <h2 className="w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#daa520] font-bold mb-4 sm:mb-6 text-left">
            Premium Sleep Experience
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-[#fff] font-bold mb-4 sm:mb-6 text-left">
            최고급 말총으로 만든
            <br /> 프리미엄 수면 경험
          </h3>
          <p className="text-base sm:text-lg text-[#fff] text-left mb-6 sm:mb-8">
            천연 말총의 탁월한 통기성과 온도 조절 능력으로
            <br className="hidden sm:block" />
            완벽한 수면 환경을 제공합니다.
          </p>
        </RevealList>
      </div>
    </div>
  );
}
