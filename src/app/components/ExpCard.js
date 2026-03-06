"use client";
import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import * as motion from "framer-motion/client";
import { easeOut } from "framer-motion";

function ExpCard() {
  const experiences = [
    {
      id: 1,
      role: "Software Developer",
      company: "NIC, Assam",
      location: "Guwahati, Assam",
      period: "Mar 2026 - Present",
      current: true,
    },
    {
      id: 2,
      role: "Software Developer",
      company: "GNRC Ltd.",
      location: "Guwahati, Assam",
      period: "Oct 2025 - Mar 2026",
      current: false,
    },
    {
      id: 3,
      role: "Software Developer",
      company: "NIC, Assam",
      location: "Guwahati, Assam",
      period: "Aug 2023 - Sep 2025",
      current: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <div className="flex flex-col w-2/3 mr-5 h-full max-lg:w-full max-lg:mr-0 max-md:mt-8 text-white">
      <div className="title text-xl font-medium w-full mb-2">Experience</div>

      <motion.div
        className="flex flex-col gap-2 h-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={cardVariants}
            className="group relative flex rounded-xl overflow-hidden
              bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10
              hover:shadow-[0_0_25px_rgba(29,185,84,0.15)]
              hover:-translate-y-[2px]
              transition-all duration-300 ease-out cursor-default"
          >
            {/* Green accent bar */}
            <div
              className={`w-[3px] shrink-0 transition-all duration-300
              ${exp.current
                  ? "bg-[#1DB954] group-hover:bg-[#1ed760] group-hover:shadow-[0_0_8px_rgba(29,185,84,0.5)]"
                  : "bg-white/20 group-hover:bg-[#1DB954]/60"
                }`}
            />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent opacity-50 pointer-events-none" />

            {/* Card content */}
            <div className="relative flex flex-col gap-1 p-3 flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-[14px] font-bold text-white tracking-wide leading-tight">
                  {exp.role}
                </h3>
                {exp.current && (
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-white/90 bg-[#1DB954]/10 px-2 py-0.5 rounded-full border border-[#1DB954]/20">
                    Current
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-white/70 text-[12px]">
                  <Briefcase size={11} className="shrink-0 text-white/40" />
                  <span className="font-medium">{exp.company}</span>
                  <span className="h-1 w-1 rounded-full bg-white/50" />
                  <MapPin size={11} className="shrink-0 text-white/50" />
                  <span className="text-white/50">{exp.location}</span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-medium text-white/50 bg-white/5 px-2 py-0.5 rounded-md shrink-0">
                  <Calendar size={10} />
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ExpCard;
