import React from "react";
import Hero from "./Hero/Hero";
import About from "./Sustainability/Sustainability";
import Products from "./Products/Products";
import QNA from "./QNA/QNA";
import Contact from "./Contact/Contact";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <div className="overflow-hidden  bg-[#f7f6fb]">
      <Carousel />
      <Hero />
      <Products />
      <About />
      <QNA />
      <Contact />
    </div>
  );
};

export default Home;
