"use client";
import React, { useState } from "react";
import TechStack from "@/app/components/TechStack";
import * as motion from "framer-motion/client";
import { easeOut } from "framer-motion";
import Two from "@/app/components/gallery/two";

function page() {
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

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur rerum harum magni ab earum consequuntur odit laboriosam magnam esse nobis fugiat, officiis deserunt pariatur! Aliquam dignissimos exercitationem magni nam!".split(
      " "
    );
  return (
    <div className="flex h-max">
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
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(98, 208, 137, 0.6), transparent 40%)`,
            transition: "background 8s ease-out",
          }}
        ></div>
        <main className="introsection h-60 flex gap-8 p-8 z-10">
          <motion.div className="introtext p-8 w-3/4 rounded-xl text-justify font-normal">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: i / 15,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </motion.div>
          <div className="photo rounded-xl">
            <img
              src="https://img.freepik.com/free-vector/colorful-initials-letter-t-logo-design_474888-4338.jpg?t=st=1733301400~exp=1733305000~hmac=413070d71bc532f6edc5fa1eff84942fb77fc2f9f5a9455ab8350753336de9a5&w=740"
              alt=""
              className="h-full object-contain rounded-xl"
            />
          </div>
        </main>
        <Two />
      </motion.main>
      <TechStack />
    </div>
  );
}

export default page;
