"use client";
import React, { useState, useEffect } from "react";
import TechStack from "@/app/components/TechStack";
import * as motion from "framer-motion/client";
import { easeOut } from "framer-motion";
import CnGallery from "@/app/components/gallery/CnGallery";

export default function Page({ params }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [project, setProjects] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { projectId } = React.use(params);

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

  useEffect(() => {
    if (!projectId) {
      setError("No project ID provided");
      setIsLoading(false);
      return;
    }

    const fetchProjectDetails = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/projects/${projectId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch project details");
        }
        const data = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message || "An unknown error occurred");
        setIsLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectId]);

  return (
    <div className="flex min-h-screen">
      <motion.main
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
        className="maincard flex w-2/3 h-fit mx-28 mr-8 mt-10 rounded-xl flex-col
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
        <div className="navbuttons flex gap-2 p-2 relative z-10">
          <button className="h-10">
            <a href="/">
              <img src="../back.svg" alt="" className="h-full" />
            </a>
          </button>
        </div>
        <div className="flex p-8 pt-2">
          <div className="photo rounded-xl flex justify-center items-center">
            <img
              src="https://img.freepik.com/free-vector/colorful-initials-letter-t-logo-design_474888-4338.jpg?t=st=1733301400~exp=1733305000~hmac=413070d71bc532f6edc5fa1eff84942fb77fc2f9f5a9455ab8350753336de9a5&w=740"
              alt=""
              className="object-contain rounded-xl"
            />
          </div>
          <div className="introsection flex flex-col gap-4 pl-8 z-10">
            <div className="name z-10 text-4xl font-normal text-left">
              {isLoading && "Loading Title..."}
              {error && <span className="text-red-500">{error}</span>}
              {project && project.name}
            </div>
            <div className="introtext rounded-xl text-justify font-normal">
              {isLoading && "Loading description..."}
              {error && <span className="text-red-500">{error}</span>}
              {project && project.description}
            </div>
          </div>
        </div>
        {project ? <CnGallery images={project.images} /> : ""}
      </motion.main>
      <div className="right rightcard w-1/3 mr-28 relative">
        {isLoading ? (
          <div></div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          project &&
          project.technologies && (
            <TechStack
              framework={project.technologies.framework}
              language={project.technologies.language}
              database={project.technologies.database}
            />
          )
        )}
      </div>
    </div>
  );
}
