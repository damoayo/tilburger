"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCamera,
  // faQuestionCircle,
  faHandsBound,
  faBars,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

type Props = {
  openNav: () => void; // 상위 컴포넌트로부터 전달받은 네비게이션 열기 함수
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

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
  };

  return (
    <nav
      className={`fixed ${
        navBg ? "bg-[#e1e1e14f] shadow-md backdrop-blur-lg" : "bg-opacity-100"
      } w-full transition-all duration-300 h-[12vh] z-[1000] `}
    >
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* 로고 */}
        <Link
          href="#home"
          onClick={(e) => smoothScroll(e, "#home")}
          passHref
          legacyBehavior
        >
          <a
            // href="#home"
            // onClick={(e) => smoothScroll(e, "#home")}
            className="no-underline text-inherit flex items-center"
          >
            <span className="text-2xl font-bold text-[#daa520] bg-white px-1 py-1 rounded-lg shadow-md">
              TIL
            </span>
            <h1 className="ml-1 pt-1 text-xl md:text-2xl font-bold text-gray-500">
              Burger
            </h1>
          </a>
        </Link>

        {/* 네비게이션 링크 */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="#home"
            onClick={(e) => smoothScroll(e, "#home")}
            passHref
            legacyBehavior
          >
            <a
              className={`text-[#222] hover:text-[#daa520] no-underline flex flex-col text-inherit items-center space-x-1 `}
            >
              <FontAwesomeIcon className="text-2xl" icon={faHome} />
              <span className="text-sm">Home</span>
            </a>
          </Link>

          <Link
            href="#about"
            onClick={(e) => smoothScroll(e, "#about")}
            passHref
            legacyBehavior
          >
            <a className="text-[#222] hover:text-[#daa520] no-underline text-inherit flex flex-col items-center space-x-1">
              <FontAwesomeIcon className="text-2xl" icon={faCamera} />
              <span className="text-sm">About</span>
            </a>
          </Link>
          <Link
            href="#product"
            onClick={(e) => smoothScroll(e, "#product")}
            passHref
            legacyBehavior
          >
            <a className="text-[#222] hover:text-[#daa520] no-underline text-inherit flex flex-col items-center space-x-1">
              <FontAwesomeIcon className="text-2xl" icon={faTruck} />
              <span className="text-sm">Product</span>
            </a>
          </Link>
          <Link
            href="#sustainability"
            onClick={(e) => smoothScroll(e, "#sustainability")}
            passHref
            legacyBehavior
          >
            <a className="text-[#222]  hover:text-[#daa520] no-underline text-inherit flex flex-col items-center ">
              <FontAwesomeIcon className="text-3xl" icon={faHandsBound} />
              <span className="text-xs">Sustainability</span>
            </a>
          </Link>

          <Link
            href="#contact"
            onClick={(e) => smoothScroll(e, "#contact")}
            passHref
            legacyBehavior
          >
            <a className="text-[#222]  hover:text-[#daa520] no-underline text-inherit flex flex-col items-center space-x-1">
              <FontAwesomeIcon className="text-2xl" icon={faHeadphones} />
              <span className="text-sm">Contact</span>
            </a>
          </Link>
        </div>

        {/* 햄버거 메뉴 */}
        <div className="lg:hidden flex items-center">
          <FontAwesomeIcon
            icon={faBars}
            className="text-white text-2xl cursor-pointer"
            onClick={openNav}
          />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
