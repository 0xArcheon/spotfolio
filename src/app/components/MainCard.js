"use client";
import React, { useState } from "react";
import IntroSection from "./IntroSection";
import LinksSection from "./LinksSection";
import ProjectSection from "./ProjectSection";
import * as motion from "framer-motion/client";
import { easeOut } from "framer-motion";

function MainCard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Track mouse position and card dimensions
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePosition({ x: mouseX, y: mouseY });
    setDimensions({ width: rect.width, height: rect.height });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
      className="maincard flex w-2/3 h-fit mx-32 mr-8 mt-10 rounded-xl flex-col
        bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 relative p-6"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Cursor radius glow effect with radius set to 30% */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(98, 208, 137, 0.5), transparent 40%)`,
          transition: "background 8s ease-out",
        }}
      ></div>

      <div className="navbuttons flex gap-2 p-3 relative z-10">
        <button className="h-10">
          <img src="back.svg" alt="" className="h-full" />
        </button>
        <button className="h-10">
          <img src="forward.svg" alt="" className="h-full" />
        </button>
      </div>
      <IntroSection />
      <LinksSection />
      <ProjectSection />
    </motion.main>
  );
}

export default MainCard;
