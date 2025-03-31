"use client";
import Image from "next/image";
import React from "react";
import { RevealList } from "next-reveal";
import {
  FaLeaf,
  FaRecycle,
  FaHandHoldingHeart,
  FaChartLine,
  FaPlay,
} from "react-icons/fa";

const Sustainability = () => {
  const sustainabilityPoints = [
    {
      icon: <FaLeaf className="text-4xl text-[#daa520] text-left" />,
      title: "친환경 제품",
      description:
        "라이프클린에서는 환경 지속 가능한 천연 재료를 찾았습니다. 우리는 최적의 수면 조건을 제공하면서도 최소한으로 환경에 영향을 주지 않는 천연 재료를 찾았습니다.",
    },
    {
      icon: <FaRecycle className="text-4xl text-[#daa520] text-left" />,
      title: "지속 가능한 자연",
      description:
        "동물과 식물 그리고 나무의 섬유를 사용하여 자연이 가진 오랜 수명만큼 제품이 오래동안 사용되길 바라기 때문입니다.",
    },
    {
      icon: (
        <FaHandHoldingHeart className="text-4xl text-[#daa520] text-left" />
      ),
      title: "환경 보호",
      description:
        "라이프클린은 긍정적인 변화의 영감과 원동력이 되는 것을 사명으로 삼았습니다. 우리는 인증의 힘과 긍정적인 영향을 믿으며, 이는 우리 제품과 회사가 투명성, 책임 및 지속 가능성에 대한 최고 기준을 존증한다는 보증입니다.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#daa520] text-left" />,
      title: "지속적인 혁신",
      description:
        "우리는 제품 생산 과정에서 발생하는 환경 영향을 최소화하기 위해 노력합니다. 각 제품의 생산부터 유통까지 전 과정에서 발생하는 환경 영향을 측정하고 개선하고 있습니다.",
    },
  ];

  return (
    <div
      id="sustainability"
      className="relative w-full min-h-screen bg-[#f7f6fb] pt-32 pb-20"
    >
      {/* 배경 효과 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#daa520]/20 to-transparent" />
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#daa520] mb-4">
            지속 가능성
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            환경을 생각하는 지속 가능한 제품으로 더 나은 미래를 만들어갑니다
          </p>
        </div>

        {/* 메인 이미지 섹션 */}
        <div className="mb-16">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/horse_tail01.png"
              alt="지속 가능성 사진"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-left text-white p-8 max-w-3xl">
                <h3 className="text-2xl text-[#bdbcbc] md:text-3xl font-bold mb-6">
                  수면과 건강한 환경을 위해
                </h3>
                <p className="text-lg md:text-xl leading-relaxed space-y-4">
                  <span className="block mb-4">
                    우리는 베개의 통기성과 땀의 흡수성, 탄성이 중요하다고
                    생각했고, 그런 소재를 찾아 자연을 뒤졌으며 훌륭한 말의
                    꼬리털에서 찾았습니다.
                  </span>
                  <span className="block">
                    말총베개는 통기성이 좋아 공기 흐름을 원활히 해서 체내 열을
                    효과적으로 처리할 수 있습니다
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 지속가능성 포인트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sustainabilityPoints.map((point, index) => (
            <RevealList
              key={index}
              duration={1000}
              delay={index * 100}
              opacity={0}
              interval={100}
              origin="bottom"
              distance="50px"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center">
                  <div className="mb-4">{point.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-left leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </RevealList>
          ))}
        </div>

        {/* 추가 정보 섹션 */}
        <RevealList
          duration={1000}
          delay={400}
          opacity={0}
          interval={100}
          origin="bottom"
          distance="50px"
        >
          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg">
              틸버그 천연 베개는 더 건강하고 지속 가능한 베개를 찾는 사람들에게
              가장 훌륭한 선택이 될것입니다.
            </p>
          </div>
        </RevealList>

        {/* 동영상 섹션 */}
        <div className="mt-16">
          <RevealList
            duration={1000}
            delay={100}
            opacity={0}
            interval={100}
            origin="bottom"
            distance="50px"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-[#daa520] mb-6 text-center">
                우리가 만들어 나가는 세상
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 첫 번째 동영상 */}
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-md group">
                  <iframe
                    src="https://www.youtube.com/embed/Cc2aNtukYHc"
                    title="환경 친화적인 말총 베개 제작 과정"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-[#daa520] rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <FaPlay className="text-white text-2xl" />
                    </div>
                  </div>
                </div>

                {/* 두 번째 동영상 */}
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-md group">
                  <iframe
                    src="https://www.youtube.com/embed/gCNSU2CO3oE"
                    title="천연 말총 베개의 환경적 가치"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-[#daa520] rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <FaPlay className="text-white text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-center mt-6">
                수십 년간의 연구와 장인 정신으로 만들어진 우리의 지속 가능한
                제작 과정을 확인해보세요
              </p>
            </div>
          </RevealList>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
