"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="relative z-50 p-2 text-white hover:text-[#daa520] transition-colors"
        aria-label="메뉴 열기"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 bg-black/90 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 flex items-center justify-center">
            <nav className="text-center">
              <ul className="space-y-8">
                <li>
                  <Link
                    href="#home"
                    onClick={(e) => smoothScroll(e, "#home")}
                    className="text-2xl text-white hover:text-[#daa520] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    onClick={(e) => smoothScroll(e, "#about")}
                    className="text-2xl text-white hover:text-[#daa520] transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#product"
                    onClick={(e) => smoothScroll(e, "#product")}
                    className="text-2xl text-white hover:text-[#daa520] transition-colors"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="#sustainability"
                    onClick={(e) => smoothScroll(e, "#sustainability")}
                    className="text-2xl text-white hover:text-[#daa520] transition-colors"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    href="#qna"
                    onClick={(e) => smoothScroll(e, "#qna")}
                    className="text-2xl text-white hover:text-[#daa520] transition-colors"
                  >
                    Q&A
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    onClick={(e) => smoothScroll(e, "#contact")}
                    className="text-2xl text-white hover:text-[#daa520] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="p-6 text-center">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="로고"
                width={120}
                height={40}
                className="mx-auto"
              />
            </div>
            <p className="text-white/70 text-sm">
              © 2024 Natural Horsehair. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
