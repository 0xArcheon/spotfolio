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
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } },
};

// Green "now playing" bars marking the current role
export function Equalizer() {
  return (
    <span className="flex h-3.5 items-end gap-[2px]" aria-label="Current">
      {[0, 0.3, 0.15].map((delay) => (
        <span
          key={delay}
          className="h-full w-[3px] origin-bottom scale-y-50 rounded-sm bg-spotify-green motion-safe:animate-eq"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </span>
  );
}

const rowGrid =
  "grid grid-cols-[16px_minmax(0,1fr)_auto] items-center gap-4 px-4 md:grid-cols-[16px_minmax(0,4fr)_minmax(0,2fr)_auto]";

function ExpCard() {
  return (
    <section>
      <h2 className="section-title mb-4">Experience</h2>

      <div
        className={`${rowGrid} h-9 border-b border-white/10 text-sm text-spotify-silver`}
      >
        <span className="text-right">#</span>
        <span>Role</span>
        <span className="max-md:hidden">Location</span>
        <span>Period</span>
      </div>

      <motion.ol
        className="mt-2"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {experiences.map((exp, index) => (
          <motion.li
            key={exp.id}
            variants={rowVariants}
            className={`${rowGrid} h-14 rounded-md transition-colors hover:bg-white/10`}
          >
            <span className="flex justify-end text-base tabular-nums text-spotify-silver">
              {exp.current ? <Equalizer /> : index + 1}
            </span>
            <div className="min-w-0">
              <p
                className={`truncate text-base ${
                  exp.current ? "text-spotify-green" : "text-white"
                }`}
              >
                {exp.role}
              </p>
              <p className="truncate text-sm text-spotify-silver">
                {exp.company}
              </p>
            </div>
            <span className="truncate text-sm text-spotify-silver max-md:hidden">
              {exp.location}
            </span>
            <span className="text-sm tabular-nums text-spotify-silver">
              {exp.period}
            </span>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}

export default ExpCard;
