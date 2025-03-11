import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white py-10">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            {/* 로고 */}
            <h2 className="flex items-center text-xl md:text-1xl font-bold">
              {/* <Image src="/logo1.png" priority alt="Logo" width={50} height={50} /> */}
              {/* 로고 이미지 */}
              <span className="text-xl md:text-3xl text-[#4169e1]">TIL</span>
              BURGER {/* 로고 텍스트 */}
            </h2>
            {/* Description */}
            <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600">
              Lorem ipsum dolor sit, consectetur . Lorem ipsum dolor sit .
            </p>
          </div>
          {/* About us links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">About Us</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Support Center</li>
              <li>Customer Support</li>
              <li>About Us</li>
              <li>Popular Campaign</li>
            </ul>
          </div>
          {/* Our information Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Our Information
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Store Hours</li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                Amsterdam,Netherlands
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                +031.990.7980
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2" />7 Days - 8am - 10am
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                export@zs-korea.com
              </li>
            </ul>
          </div>
        </div>
        {/* Copy right */}
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p className="text-center md:text-left">
            Copyright © 2025 MAMAPAI. All rights reserved
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Social :</span>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
