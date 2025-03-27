// import { navLinks } from "@/constant/Constant";
import React from "react";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

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
    closeNav();
  };

  return (
    <div>
      {/* OverLay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* NavLinks */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006]`}
      >
        <div className="flex flex-col space-y-8 mt-20">
          <Link
            href="#home"
            onClick={(e) => smoothScroll(e, "#home")}
            className="text-white text-[20px] ml-12 sm:text-[30px] hover:text-[#daa520] transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={(e) => smoothScroll(e, "#about")}
            className="text-white text-[20px] ml-12 sm:text-[30px] hover:text-[#daa520] transition-colors"
          >
            About
          </Link>
          <Link
            href="#product"
            onClick={(e) => smoothScroll(e, "#product")}
            className="text-white text-[20px] ml-12 sm:text-[30px] hover:text-[#daa520] transition-colors"
          >
            Product
          </Link>
          <Link
            href="#sustainability"
            onClick={(e) => smoothScroll(e, "#sustainability")}
            className="text-white text-[20px] ml-12 sm:text-[30px] hover:text-[#daa520] transition-colors"
          >
            Sustainability
          </Link>
          <Link
            href="#qna"
            onClick={(e) => smoothScroll(e, "#qna")}
            className="text-white text-[20px] ml-12 sm:text-[30px] hover:text-[#daa520] transition-colors"
          >
            Q&A
          </Link>
          <Link
            href="#contact"
            onClick={(e) => smoothScroll(e, "#contact")}
            className="text-white text-[20px] ml-12 sm:text-[30px] hover:text-[#daa520] transition-colors"
          >
            Contact
          </Link>
        </div>
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute cursor-pointer top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
