import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Products from "./Products/Products";
import QNA from "./QNA/QNA";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden  bg-[#f7f6fb]">
      <Hero />
      <About />
      <Products />
      <QNA />
      <Contact />
    </div>
  );
};

export default Home;
