"use client";
import React, { useState, useEffect } from "react";
import TechStack from "@/app/components/TechStack";
import * as motion from "framer-motion/client";
import { easeOut } from "framer-motion";
import CnGallery from "@/app/components/gallery/CnGallery";
import Integration from "@/app/components/Integration";
import BlurText from "@/app/components/text/BlurText";
import MetaCard from "@/app/components/MetaCard";
import Image from "next/image";
import { Play, CheckCircle, User, Briefcase } from "lucide-react";

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

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
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
    <div className="flex px-24 max-w-screen-xl mx-auto max-lg:flex-col max-md:px-18 max-sm:px-8">
      <motion.main
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
        className="maincard flex mt-10 rounded-xl flex-col mr-8 max-lg:mr-0
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

        {/* Navigation */}
        <div className="navbuttons flex gap-2 p-2 relative z-10">
          <button className="h-10">
            <a href="/">
              <img src="../back.svg" alt="" className="h-full" />
            </a>
          </button>
        </div>

        {/* Spotify-inspired Header Section */}
        <div className="flex p-8 pt-4 max-md:flex-col max-sm:p-4 relative z-10">
          {/* Album Art Style Container */}
          <div className="photo w-64 h-64 max-md:w-48 max-md:h-48 max-sm:w-40 max-sm:h-40 rounded-lg flex justify-center items-center shadow-2xl flex-shrink-0 max-md:mx-auto max-md:mb-6">
            {project ? (
              <Image
                src={project.logo.url}
                alt="Project Logo"
                width={256}
                height={256}
                className="rounded-lg"
              ></Image>
            ) : (
              <></>
            )}
          </div>

          {/* Project Info - Spotify Style */}
          <div className="introsection flex flex-col justify-end pl-8 max-md:pl-0 flex-1">
            {/* Project Type Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-sm font-medium text-white/80 mb-2 uppercase tracking-wider"
            >
              Project
            </motion.div>

            {/* Project Title - Large Spotify Style */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl max-lg:text-3xl max-md:text-3xl max-sm:text-2xl font-black text-white mb-4 leading-tight tracking-tight"
            >
              {project && project.name}
            </motion.h1>

            {/* Project Description with Blur Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white/90 text-base max-w-2xl leading-relaxed"
            >
              <BlurText
                text={project && project.description}
                delay={50}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-justify"
              />
              {error && <span className="text-red-500">{error}</span>}
            </motion.div>
          </div>
        </div>

        {/* Gallery Section */}
        {project ? <CnGallery images={project.images} /> : ""}

        {/* Spotify-style Sections */}
        <div className="px-8 max-sm:px-4 space-y-8 relative z-10 my-8">
          {/* About This Project - Engagement */}
          {project && project.engagement && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div>
                  <div className="title text-xl font-medium w-full">
                    My Engagement
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="text-white/90 leading-relaxed text-justify">
                  {project.engagement}
                </p>
              </div>
            </motion.section>
          )}

          {/* What I Did - Responsibilities */}
          {project && project.responsibilities && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4 my-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div>
                  <div className="title text-xl font-medium w-full">
                    What I did
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {project.responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    className="group bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 hover:border-[#1db954]/30 transition-all duration-300 cursor-default"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <p className="text-white/90 leading-relaxed text-sm flex-1">
                        {responsibility}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* Bottom Spacing */}
        <div className="h-8"></div>
      </motion.main>

      {/* Right Sidebar */}
      <div className="rightcard mt-10 flex flex-col">
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
        <div className="flex justify-center items-center">
          {project && (
            <MetaCard
              client={project.client}
              startYear={project.startYear}
              link={project.link}
              name={project.name}
            />
          )}
        </div>
        <div className="flex justify-center items-center">
          {project?.integrations && <Integration data={project.integrations} />}
        </div>
      </div>
    </div>
  );
}
