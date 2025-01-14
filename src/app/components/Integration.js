"use client";
import React, { useState } from "react";
import * as motion from "framer-motion/client";
import { delay, easeOut } from "framer-motion";

function Integration({ data }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({
    x: dimensions.width,
    y: 0,
  });

  // Track mouse position and card dimensions
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePosition({ x: mouseX, y: mouseY });
    setDimensions({ width: rect.width, height: rect.height });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: dimensions.width, y: 0 });
  };
  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Adds a delay between each child element
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 }, // Slide in from the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(255, 255, 255, 0.1)",
      }}
      className="techstack flex flex-col mt-10 rounded-xl p-4 gap-2 h-max
        bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30"
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(98, 208, 137, 0.5), transparent 60%)`,
          transition: "background 0.5s easeOut",
        }}
      ></div>
      <div className="title text-xl font-medium">Integrations</div>
      <motion.div
        className="tech flex flex-col gap-3 py-2"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="item flex gap-2 justify-between px-4"
            variants={itemVariants}
          >
            <div className="text-sm">{item.type}</div>
            <div className="ml-5 text-sm px-2">
              <a href={item.link} target="_blank" className="">
                {Array.isArray(item.value) ? item.value.join(", ") : item.value}
                <span className="ml-2">🌐</span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Integration;
