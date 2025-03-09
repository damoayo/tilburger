"use client"; // 클라이언트 컴포넌트

import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ScrollReveal().reveal(ref.current, {
        duration: 1000,
        origin: "bottom",
        distance: "50px",
      });
    }
  }, []);

  return <h1 className="reveal">Hello, ScrollReveal!</h1>;
};

export default ScrollRevealComponent;
