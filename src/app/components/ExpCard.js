"use client";
import React from "react";
import * as motion from "framer-motion/client";
import { easeOut } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "NIC, Assam",
    location: "Guwahati, Assam",
    period: "Mar 2026 – Present",
    current: true,
  },
  {
    id: 2,
    role: "Software Developer",
    company: "GNRC Ltd.",
    location: "Guwahati, Assam",
    period: "Oct 2025 – Mar 2026",
    current: false,
  },
  {
    id: 3,
    role: "Software Developer",
    company: "NIC, Assam",
    location: "Guwahati, Assam",
    period: "Aug 2023 – Sep 2025",
    current: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: easeOut } },
};

function ExpCard() {
  return (
    <div className="flex flex-col w-2/3 h-full max-lg:w-full max-lg:mr-0 max-md:mt-8 text-white">

      {/* Label + rule — same as LinksSection & page sections */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
          Experience
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Card container — matches LinksSection backdrop */}
      <motion.div
        className="flex-grow rounded-xl p-5 flex flex-col justify-center
          bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={rowVariants}
            className="group relative flex items-start gap-4 px-4 py-3
              rounded-lg border border-transparent
              hover:border-white/10 hover:bg-white/5
              transition-all duration-200 cursor-default"
          >
            {/* Green left pip — always visible for current, hover-only for past */}
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-full transition-all duration-200"
              style={{
                height: "1.25rem",
                background: exp.current
                  ? "linear-gradient(180deg,#62d089,rgba(98,208,137,0.2))"
                  : undefined,
              }}
            >
              {/* Past entries: pip fades in on group-hover via inline style trick */}
              {!exp.current && (
                <span
                  className="block w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    background:
                      "linear-gradient(180deg,#62d089,rgba(98,208,137,0.2))",
                  }}
                />
              )}
            </span>

            {/* Left: role + company · location */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[14px] font-medium text-white/90 group-hover:text-white transition-colors duration-200 leading-snug">
                  {exp.role}
                </span>
                {exp.current && (
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.15em] px-1.5 py-px rounded-full border"
                    style={{
                      color: "rgba(98,208,137,0.85)",
                      borderColor: "rgba(98,208,137,0.25)",
                      background: "rgba(98,208,137,0.07)",
                    }}
                  >
                    Now
                  </span>
                )}
              </div>
              <span className="text-[12px] text-white/40 group-hover:text-white/60 transition-colors duration-200">
                {exp.company}&ensp;·&ensp;{exp.location}
              </span>
            </div>

            {/* Right: period */}
            <span className="text-[11px] text-white/35 group-hover:text-white/55 transition-colors duration-200 tabular-nums shrink-0 mt-[2px]">
              {exp.period}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ExpCard;