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
import Link from "next/link";

export default function Page({ params }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [project, setProjects] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { projectId } = React.use(params);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setDimensions({ width: rect.width, height: rect.height });
  };

  const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 });
  const handleAnimationComplete = () => console.log("Animation completed!");

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
        if (!response.ok) throw new Error("Failed to fetch project details");
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
        />

        {/* Navigation */}
        {/* <div className="navbuttons flex gap-2 p-2 relative z-10">
          <button className="h-10">
            <Link href="/">
              <img src="../back.svg" alt="" className="h-full" />
            </Link>
          </button>
        </div> */}

        {/* Header */}
        <div className="flex p-8 pt-4 max-md:flex-col max-sm:p-4 relative z-10">
          <div className="photo w-64 h-54 max-md:w-48 max-md:h-48 max-sm:w-40 max-sm:h-40 rounded-lg flex justify-center items-center shadow-2xl flex-shrink-0 max-md:mx-auto max-md:mb-6">
            {project && (
              <Image
                src={project.logo.url}
                alt="Project Logo"
                width={256}
                height={256}
                className="rounded-lg"
              />
            )}
          </div>

          <div className="introsection flex flex-col justify-end pl-8 max-md:pl-0 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-sm font-medium text-white/80 mb-2 uppercase tracking-wider"
            ></motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl max-lg:text-3xl max-md:text-3xl max-sm:text-2xl font-black text-white mb-4 leading-tight tracking-tight"
            >
              {project && project.name}
            </motion.h1>

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

        {/* Gallery */}
        {project ? <CnGallery images={project.images} /> : ""}

        {/* ── REDESIGNED SECTIONS ─────────────────────────────────────────── */}
        <div className="px-8 max-sm:px-4 space-y-10 relative z-10 my-8">
          {/* MY ROLE (was: My Engagement) */}
          {project?.engagement && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              {/* Label + rule */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  My Role
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Quote-style block with green left bar */}
              <div className="relative pl-5">
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #62d089 0%, rgba(98,208,137,0.12) 100%)",
                  }}
                />
                <p className="text-white/80 leading-[1.9] text-[15px] text-justify">
                  {project.engagement}
                </p>
              </div>
            </motion.section>
          )}

          {/* CONTRIBUTIONS (was: What I Did) */}
          {project?.responsibilities && project.responsibilities.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              {/* Label + rule */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Contributions
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Numbered editorial list */}
              <ol className="space-y-0">
                {project.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 1 + index * 0.08,
                      ease: easeOut,
                    }}
                    className="group flex items-start gap-4 py-4 border-b border-white/[0.06] last:border-0"
                  >
                    {/* Index number */}
                    <span
                      className="flex-shrink-0 w-6 text-right text-xs font-semibold tabular-nums mt-[3px]"
                      style={{ color: "rgba(98,208,137,0.55)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Text */}
                    <p className="text-white/75 text-[14px] leading-relaxed group-hover:text-white/95 transition-colors duration-200 text-justify flex-1">
                      {responsibility}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}
        </div>
        {/* ── END REDESIGNED SECTIONS ──────────────────────────────────────── */}

        <div className="h-8" />
      </motion.main>

      <div className="rightcard mt-10 flex flex-col sticky top-10 h-fit">
        {isLoading ? (
          <div />
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          project?.technologies && (
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
