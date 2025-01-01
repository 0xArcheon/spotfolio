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
        transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
        href="/"
        className="home h-12 p-3 my-1 bg-clip-padding backdrop-filter bg-slate-500
      backdrop-blur-3xl bg-opacity-30 rounded-full"
      >
        <img src="/home.png" alt="" className="h-full invert" />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, x: +250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
        href=""
        className="home h-12"
      >
        <Button />
      </motion.a>
    </motion.main>
  );
}

export default Navbar;
