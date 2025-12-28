import React from "react";
import * as motion from "framer-motion/client";
import { easeOut, transform } from "framer-motion";
import Button from "./DownloadButton";

function Navbar() {
  return (
    <motion.main className="navbar w-full flex justify-center font-outfit py-5 gap-2 items-center">
      <motion.a
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0 }}
        // 1. Add Hover Physics (Scales up slightly)
        whileHover={{ scale: 1.1 }}
        // 2. Add Tap Physics (Shrinks slightly on click)
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        href="/"
        // 3. Added 'hover:bg-opacity-50' and 'transition-colors' for smooth lighting change
        className="home h-12 p-3 my-1 bg-clip-padding backdrop-filter bg-slate-500 
             backdrop-blur-3xl bg-opacity-30 hover:bg-opacity-50 transition-colors duration-300 rounded-full"
      >
        <img src="/home.png" alt="" className="h-full invert" />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0 }}
        // 1. Add Hover Physics (Scales up slightly)
        whileHover={{ scale: 1.05 }}
        // 2. Add Tap Physics (Shrinks slightly on click)
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        target="_blank"
        href="https://drive.google.com/file/d/1otqm6FerhvUFRQ9OseE1Ez691lm5FiGU/view?usp=sharing"
        className="home h-12"
      >
        <Button />
      </motion.a>
    </motion.main>
  );
}

export default Navbar;
