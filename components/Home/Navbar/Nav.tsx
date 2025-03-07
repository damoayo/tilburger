"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
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

  return (
    <div
      className={` fixed ${
        navBg ? "bg-white shadow-md" : "fixed"
      } w-full transition-all duration-200 h-[12vh] z=[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <h1 className="flex items-center text-xl md:text-1xl font-bold">
          <Image src="/logo1.png" alt="Logo" width={50} height={50} />
          <span className="text-3xl md:text-4xl text-pink-700">TIL</span>BURGER
        </h1>
        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="nav__link">{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full">
            Join Now
          </button>
          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
