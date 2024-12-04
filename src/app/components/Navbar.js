import React from "react";
import * as motion from "framer-motion/client";
import { easeOut } from "framer-motion";

function Navbar() {
  return (
    <motion.main
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
      className="navbar w-full flex justify-center font-outfit"
    >
      <div
        className="flex flex-row gap-2 justify-center rounded-full py-1.5 px-3 my-1 w-fit 
         bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30"
      >
        <div className="px-3 py-1 rounded-full text-fern-900 bg-fern-300">
          <a href="/">Home</a>
        </div>
        <div className="px-3 py-1 rounded-full text-fern-100">
          <a href="/projects/1">Projects</a>
        </div>
      </div>
    </motion.main>
  );
}

export default Navbar;
