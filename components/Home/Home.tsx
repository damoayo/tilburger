import React from "react";
import Hero from "./Sustainability/Sustainability";
import About from "./About/About";
import Products from "./Products/Products";
// import QNA from "./QNA/QNA";
// import Contact from "./Contact/Contact";
import Carousel from "../Carousel/Carousel";
import QNAContact from "./QNAContact/QNAContact";

const Home = () => {
  return (
    <div className="overflow-hidden  bg-[#f7f6fb]">
      <Carousel />
      <About />
      <Products />
      <Hero />
      <QNAContact />
      {/* <QNA /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
