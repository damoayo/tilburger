"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { RevealList } from "next-reveal";

const Products = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      title: "프리미엄 말총 베개",
      description:
        "천연 말총으로 만든 프리미엄 베개로, 탁월한 통기성과 온도 조절 능력으로 완벽한 수면 환경을 제공합니다.",
      features: [
        "100% 천연 말총 사용",
        "탁월한 통기성",
        "자연스러운 온도 조절",
        "편안한 수면 자세 유지",
      ],
      image: "/images/product1.png",
      purchaseLink: "https://example.com/product1", // 실제 구매 링크로 변경 필요
    },
    {
      id: 2,
      title: "프리미엄 말총 + 특급 메모리폼",
      description:
        "말총의 탁월한 특성과 메모리폼의 부드러운 특성을 알맞게 조화시켜 좀더 탁월한 수면의 경험을 드립니다. ",
      features: [
        "고급 말총 소재",
        "부드러운 탄성",
        "습기 조절 효과",
        "편안한 수면 자세",
      ],
      image: "/images/product2.png",
      purchaseLink: "https://example.com/product2", // 실제 구매 링크로 변경 필요
    },
  ];

  return (
    <div
      id="product"
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
            프리미엄 말총 제품
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            천연 말총의 탁월한 특성을 살린 프리미엄 제품을 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <RevealList
              key={product.id}
              duration={1000}
              delay={index * 100}
              opacity={0}
              interval={100}
              origin="bottom"
              distance="50px"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div
                  className="relative h-80 overflow-hidden"
                  onMouseEnter={() => setHoveredImage(product.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className={`object-cover transition-transform duration-500 origin-[35%_85%] ${
                      hoveredImage === product.id ? "scale-[3]" : "scale-100"
                    }`}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <FaCheckCircle className="text-[#daa520] mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={product.purchaseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-[#daa520] rounded-lg hover:bg-[#b8860b] transition-colors duration-300"
                  >
                    구매하기
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </RevealList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
