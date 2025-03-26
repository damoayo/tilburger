"use client";

import { RevealList } from "next-reveal";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js" as never);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 787);
    };

    handleResize(); // 초기값 설정
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="home" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        {!isMobile && (
          <div className="carousel-item active relative w-full h-screen">
            <Image
              src="/images/product1.png"
              alt="Slide 1"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 787px) 0px, (max-width: 1280px) 70vw, 100vw"
            />
            <div className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
              <RevealList
                interval={500}
                delay={200}
                opacity={0}
                duration={1500}
                distance="100px"
                origin="bottom"
              >
                <h2 className="w-full lg:text-[50px] text-[#fff] sm:text-[50px] font-bold md:text-[40px] mt-6  sm:leading-[6rem] md:leading-[10rem] lg:leading-[16rem] mb-6 text-left">
                  Natural Horsehair Pillow
                </h2>
                <h3 className="text-2xl text-[#424242] sm:text-2xl font-bold md:text-3xl mt-6 md:leading-[3rem] lg:leading-[3.5rem] mb-6 text-left">
                  말총을 사용한 베개와 토퍼는
                  <br /> 가장 편안하고 탄력 있는 수면을 제공합니다.
                </h3>
                <p className="text-lg text-[#424242] text-left w-full">
                  말에서 가장긴 섬유질인 말꼬리를 사용한 베개는 탁월한 습도조절
                  능력과 베개의 온도를 낮춰 주어,
                  <br />
                  베개온도를 32~33도 내외로 유지하여 가장 편안하고 탄력 있는
                  수면을 제공합니다.
                </p>
              </RevealList>
            </div>
          </div>
        )}

        <div
          className={`carousel-item ${
            isMobile ? "active" : ""
          } relative w-full h-screen`}
        >
          <Image
            src="/images/main3.png"
            alt="Slide 3"
            fill
            className="object-cover"
            priority
            sizes={isMobile ? "45vw" : "(max-width: 1280px) 70vw, 100vw"}
          />
          {isMobile && (
            <div className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
              <h2 className="w-full lg:text-[90px]  md:text-[#daa520]  sm:text-[#daa520] text-[#daa520] sm:text-5xl font-bold md:text-5xl mt-6 md:leading-[3rem] lg:leading-[16rem] mb-6 text-left">
                Natural Horsehair Pillow
              </h2>
              <h3 className="text-2xl text-[#fff] sm:text-2xl font-bold md:text-3xl mt-6 md:leading-[3rem] lg:leading-[3.5rem] mb-6 text-left">
                말총을 사용한 베개와 토퍼는
                <br /> 가장 편안하고 탄력 있는 수면을 제공합니다.
              </h3>
              <p className="text-lg text-[#fff] text-left">
                말에서 가장긴 섬유질인 말꼬리를 사용한 베개는 탁월한 습도조절
                능력과 베개의 온도를 낮춰 주어,
                <br />
                베개온도를 32~33도 내외로 유지하여 가장 편안하고 탄력 있는
                수면을 제공합니다.
              </p>
            </div>
          )}
          {!isMobile && (
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          )}
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
