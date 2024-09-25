"use client";
import React, { useState } from "react";
import * as motion from "framer-motion/client";
import { easeOut } from "framer-motion";

function TechStack() {
  const [tech, setTech] = useState("language");
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

  const framework = [
    { name: "React", icon: "react.png" },
    { name: "Next.JS", icon: "nextjs.svg" },
    { name: "Laravel", icon: "lara.png" },
    { name: "Node JS", icon: "developer.png" },
    { name: "Express", icon: "express.svg" },
  ];

  const language = [
    { name: "Javascript", icon: "js.svg" },
    { name: "PHP", icon: "php.svg" },
    { name: "Java", icon: "java.svg" },
    { name: "HTML", icon: "html.png" },
  ];

  const database = [
    { name: "MongoDB", icon: "mongo.svg" },
    { name: "PostgreSQL", icon: "pgsql.png" },
    { name: "MySQL", icon: "mysql.png" },
  ];

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
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  const renderTechItems = (items) => {
    return items.map((item) => (
      <motion.div
        className="techcard flex items-center justify-start gap-2"
        key={item.name}
        variants={itemVariants} // Each item gets the sliding animation
      >
        <img
          src={item.icon}
          alt=""
          className="h-8 invert rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30"
        />
        <div className="name">{item.name}</div>
      </motion.div>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(255, 255, 255, 0.1)",
      }}
      className="techstack flex flex-col mt-10 rounded-xl p-4 gap-2
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
      <div className="title">Technology Stack</div>
      <div className="category text-xs flex gap-2 mt-4">
        <button
          className={`rounded-xl p-2 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 ${
            tech === "language" ? "bg-slate-100" : "bg-slate-500"
          }`}
          onClick={() => setTech("language")}
        >
          Languages
        </button>
        <button
          className={`rounded-xl p-2 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 ${
            tech === "framework" ? "bg-slate-100" : "bg-slate-500"
          }`}
          onClick={() => setTech("framework")}
        >
          Frameworks
        </button>
        <button
          className={`rounded-xl p-2 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 ${
            tech === "db" ? "bg-slate-100" : "bg-slate-500"
          }`}
          onClick={() => setTech("db")}
        >
          Databases
        </button>
      </div>

      <motion.div
        key={tech} // The key changes when `tech` changes, triggering the reanimation
        className="tech flex flex-col gap-3"
        initial="hidden"
        animate="visible"
        variants={containerVariants} // The parent that handles stagger
      >
        {tech === "language" && renderTechItems(language)}
        {tech === "framework" && renderTechItems(framework)}
        {tech === "db" && renderTechItems(database)}
      </motion.div>
    </motion.div>
  );
}

export default TechStack;
