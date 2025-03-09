// "use client";
import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Products from "./Products/Products";
// import ScrollReveal from "scrollreveal";

const Home = () => {
  /*   useEffect(() => {
    const ScrollRevealComponent = async () => {
      ScrollReveal().reveal(".reveal", {
        duration: 1000,
        origin: "bottom",
        distance: "50px",
        reset: true,
      });
    };
    ScrollRevealComponent();
  }, []); */

  // 컨텐츠가 넘치는 경우에도 스크롤바를 보이지 않게함.
  return (
    <div className="overflow-hidden  bg-[#f7f6fb]">
      <Hero />
      <About />
      <Products />
    </div>
  );
};

export default Home;
