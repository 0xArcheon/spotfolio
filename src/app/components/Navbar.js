"use client";
import React, { useState } from "react";
import * as motion from "framer-motion/client";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import Button from "./DownloadButton";

function Navbar() {
  const [homeHovered, setHomeHovered] = useState(false);

  return (
    <motion.nav
      className="navbar w-full flex justify-center font-outfit py-5 gap-2 items-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
      }}
    >
      {/* ── Home pill ─────────────────────────────────────── */}
      <motion.a
        href="/"
        variants={{
          hidden: { opacity: 0, y: -20, filter: "blur(6px)" },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        onHoverStart={() => setHomeHovered(true)}
        onHoverEnd={() => setHomeHovered(false)}
        className="relative h-12 p-3 my-1 rounded-full overflow-hidden cursor-pointer
          bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30
          flex items-center justify-center"
        style={{ transition: "background 0.3s ease" }}
      >
        {/* Animated green glow on hover */}
        <motion.span
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            background: homeHovered
              ? "radial-gradient(circle at 50% 50%, rgba(98,208,137,0.25), transparent 70%)"
              : "radial-gradient(circle at 50% 50%, rgba(98,208,137,0), transparent 70%)",
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
        <img src="/home.png" alt="Home" className="h-full invert relative z-10" />
      </motion.a>

      {/* ── Resume pill ───────────────────────────────────── */}
      <motion.a
        href="https://drive.google.com/file/d/1otqm6FerhvUFRQ9OseE1Ez691lm5FiGU/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        variants={{
          hidden: { opacity: 0, y: -20, filter: "blur(6px)" },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="h-12"
      >
        <Button />
      </motion.a>
    </motion.nav>
  );
}

export default Navbar;