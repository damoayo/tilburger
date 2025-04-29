import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  linkText: string;
};

const ChooseCard = ({ image, title, linkText }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-80 h-48 mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
        {title}
      </h3>
      <div className="flex items-center text-[#daa520] hover:text-[#b8860b] transition-colors duration-300 cursor-pointer group">
        <span className="text-sm font-medium">{linkText}</span>
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
          →
        </span>
      </div>
    </div>
  );
};

export default ChooseCard;
