"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaAddressCard,
  FaAddressBook,
  FaHome,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { RevealList } from "next-reveal";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#f7f6fb] to-white">
      {/* 배경 효과 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#daa520]/10 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 로고 및 설명 섹션 */}
          <RevealList
            duration={1000}
            delay={100}
            opacity={0}
            interval={100}
            origin="bottom"
            distance="20px"
          >
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="relative group">
                <div
                  className="relative w-[100px] h-[100px] cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetElement = document.querySelector("#home");
                    if (targetElement) {
                      targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  <Image
                    src="/images/logo1.png"
                    priority
                    alt="Logo"
                    fill
                    className="rounded-lg shadow-md object-contain"
                  />
                  <div className="absolute inset-0 bg-[#daa520]/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
                </div>
              </div>
              <h2 className="flex items-center text-xl font-bold">
                <span className="text-[#daa520]">Natural</span>
                <span className="ml-2 text-gray-700">Horsehair</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left">
                프리미엄 말총 베개로 건강한 수면을 선사합니다.
              </p>
            </div>
          </RevealList>

          {/* About Us 섹션 */}
          <RevealList
            duration={1000}
            delay={200}
            opacity={0}
            interval={100}
            origin="bottom"
            distance="20px"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800 relative inline-block">
                About Us
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#daa520]/30"></div>
              </h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-600 hover:text-[#daa520] transition-colors">
                  경기도 안양시 동안구 엘에스로 136
                </li>
                <li className="text-sm text-gray-600 hover:text-[#daa520] transition-colors">
                  에이-1717호 (호계동, 금정역 2차 에스케이 브이1 타워)
                </li>
                <li className="text-sm text-gray-600 hover:text-[#daa520] transition-colors">
                  LIFECLEAN CO., LTD.
                </li>
              </ul>
            </div>
          </RevealList>

          {/* Our Information 섹션 */}
          <RevealList
            duration={1000}
            delay={300}
            opacity={0}
            interval={100}
            origin="bottom"
            distance="20px"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800 relative inline-block">
                Our Information
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#daa520]/30"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#daa520] transition-colors"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#daa520] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#daa520] transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#daa520] transition-colors"
                  >
                    Store Hours
                  </a>
                </li>
              </ul>
            </div>
          </RevealList>

          {/* Contact Info 섹션 */}
          <RevealList
            duration={1000}
            delay={400}
            opacity={0}
            interval={100}
            origin="bottom"
            distance="20px"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800 relative inline-block">
                Contact Info
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#daa520]/30"></div>
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center space-x-3 group">
                  <FaMapMarkerAlt className="text-[#daa520] group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-600 group-hover:text-[#daa520] transition-colors">
                    LIFECLEAN CO., LTD.
                  </span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <FaPhoneAlt className="text-[#daa520] group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-600 group-hover:text-[#daa520] transition-colors">
                    +82 (0)31-990-7980
                  </span>
                </li>

                <li className="flex items-center space-x-3 group">
                  <FaEnvelope className="text-[#daa520] group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-600 group-hover:text-[#daa520] transition-colors">
                    export@zs-korea.com
                  </span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <FaHome className="text-5xl text-[#daa520] group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-600 group-hover:text-[#daa520] transition-colors">
                    <a>
                      OFFICE: A-1717, GeumJeong Station SK V1 Tower,136, LS-ro,
                      Dongan-gu, Anyang-si,Gyeonggi-do, Republic of Korea
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </RevealList>
        </div>

        {/* 구분선 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © 2024 Natural Horsehair. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-600">Follow Us:</span>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#daa520] transform hover:scale-110 transition-all"
                >
                  <FaFacebook className="text-xl" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#daa520] transform hover:scale-110 transition-all"
                >
                  <FaTwitter className="text-xl" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#daa520] transform hover:scale-110 transition-all"
                >
                  <FaInstagram className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
