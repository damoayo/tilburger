"use client";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constant/Constant"; // 네비게이션 링크 데이터를 가져옴
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2"; // 햄버거 메뉴 아이콘

type Props = {
  openNav: () => void; // 상위 컴포넌트로부터 전달받은 네비게이션 열기 함수
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false); // 네비게이션 배경 상태 (스크롤 시 변경)

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true); // 스크롤이 90px 이상이면 배경색 적용
      } else {
        setNavBg(false); // 그렇지 않으면 배경색 제거
      }
    };
    window.addEventListener("scroll", handler); // 스크롤 이벤트 리스너 추가
    return () => {
      window.removeEventListener("scroll", handler); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []);

  return (
    <nav
      className={` fixed ${
        navBg ? "bg-[#f7f6fb] shadow-md" : "fixed" // 배경 상태에 따라 클래스 변경
      } w-full transition-all duration-200 h-[12vh] z-[1000] `} // 네비게이션 바 스타일
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto ">
        {/* 로고 부분 */}
        <a href="#home">
          <h1 className="flex items-center text-xl md:text-1xl font-bold">
            <span className="text-xl md:text-3xl text-[#4169e1]">TIL</span>
            BURGER {/* 로고 텍스트 */}
          </h1>
        </a>
        {/* 네비게이션 링크 부분 (lg 사이즈 이상에서만 표시) */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="nav__link">{link.label}</p> {/* 각 링크의 라벨 */}
              </Link>
            );
          })}
        </div>
        {/* 버튼 및 햄버거 메뉴 부분 */}
        <div className="flex items-center space-x-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full">
            Buy Now {/* 구매 버튼 */}
          </button>
          {/* 햄버거 메뉴 아이콘 (lg 사이즈 미만에서만 표시) */}
          <HiBars3BottomRight
            onClick={openNav} // 클릭 시 상위 컴포넌트의 openNav 함수 호출
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
