"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { RevealList } from "next-reveal"; // Replace with the actual path to RevealList

const Products = () => {
  return (
    <div id="product" className="pt-32 pb-16">
      {/* Define grid */}
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Content */}
        <RevealList
          duration={3000}
          delay={100}
          opacity={0}
          interval={100}
          origin="center"
          // distance="50px"
        >
          <div>
            <Image
              src="/images/horse_tail01.png"
              alt="image"
              width={600}
              height={600}
              style={{ width: "auto", height: "auto" }}
              className="object-contain rounded-3xl"
            />
          </div>
        </RevealList>
        {/* Text Content */}
        <div className="p-6">
          <RevealList
            duration={300}
            delay={100}
            opacity={0}
            interval={100}
            origin="top"
            distance="50px"
          >
            <h2 className="text-base font-semibold text-orange-500">
              Audience tracking and insights
            </h2>
          </RevealList>
          <RevealList
            duration={900}
            delay={300}
            opacity={0}
            interval={100}
            origin="top"
            distance="70px"
          >
            <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Lorem ipsum dolor, sit consectetur cum dolor Lorem ipsum dolor sit
              Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
              Lorem ipsum dolor sit Lor
            </h2>
          </RevealList>
          <RevealList
            duration={1200}
            delay={700}
            opacity={0}
            interval={100}
            origin="center"
          >
            <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
              Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
              Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
              Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
            </p>
          </RevealList>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center ">
              <FaCheckCircle className="text-green-500 mr-2" />
              Chat prompt module supported
            </li>
            <li className="flex items-center ">
              <FaCheckCircle className="text-green-500 mr-2" />
              Enjoy unlimited features by paid plan
            </li>
            <li className="flex items-center ">
              <FaCheckCircle className="text-green-500 mr-2" />
              Manage ultimate conversation
            </li>
          </ul>
          <button className="mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-blue-800 transition-all duration-200 hover:text-white">
            Explore More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
