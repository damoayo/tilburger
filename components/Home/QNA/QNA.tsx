"use client";
import React, { useState } from "react";
import { RevealList } from "next-reveal";
import { FaChevronDown } from "react-icons/fa";

const QNA = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "말총 베개의 장점은 무엇인가요?",
      answer:
        "말총 베개는 천연 소재로 만들어져 인체에 해로운 화학 물질이 없습니다. 또한 통기성이 뛰어나 수면 중 발생하는 열과 습기를 효과적으로 배출하며, 탄성이 좋아 목과 어깨를 자연스럽게 받쳐줍니다.",
    },
    {
      question: "말총 베개는 어떻게 관리해야 하나요?",
      answer:
        "말총 베개는 통기성이 좋아 정기적인 환기가 필요합니다. 햇볕에 말리거나 통풍이 잘 되는 곳에서 자연 건조하는 것이 좋습니다. 세탁은 드라이 클리닝을 권장합니다.",
    },
    {
      question: "말총 베개의 수명은 얼마나 되나요?",
      answer:
        "말총 베개는 적절한 관리만 한다면 5년 이상 사용할 수 있습니다. 천연 소재이기 때문에 시간이 지나도 특유의 탄성과 통기성을 유지합니다.",
    },
    {
      question: "알레르기가 있는데 사용해도 될까요?",
      answer:
        "말총은 천연 소재이며, 특별한 소독과 가공 과정을 거쳐 알레르기 유발 물질이 제거됩니다. 하지만 심한 알레르기가 있으신 경우, 사용 전에 의사와 상담하시는 것을 권장드립니다.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f7f6fb] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#daa520] mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            말총 베개에 대한 궁금증을 해결해드립니다
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <RevealList
            duration={1000}
            delay={50}
            opacity={0}
            interval={100}
            origin="bottom"
            distance="50px"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`transform transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </RevealList>
        </div>
      </div>
    </div>
  );
};

export default QNA;
