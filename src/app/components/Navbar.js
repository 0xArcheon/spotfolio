import React from "react";
import * as motion from "framer-motion/client";
import { easeOut, transform } from "framer-motion";
import Button from "./DownloadButton";

function Navbar() {
  return (
    <motion.main className="navbar w-full flex justify-center font-outfit py-5 gap-2 items-center">
      {/* <div
        className="flex flex-row gap-2 justify-center rounded-full py-1.5 px-3 my-1 w-fit 
         bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30"
      >
        <div className="px-3 py-1 rounded-full text-fern-900 bg-fern-300">
          <a href="/">Home</a>
        </div>
        <div className="px-3 py-1 rounded-full text-fern-100">
          <a href="/projects/1">Projects</a>
        </div>
      </div> */}
      <motion.a
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
        href="/"
        className="home h-12 p-3 my-1 bg-clip-padding backdrop-filter bg-slate-500
      backdrop-blur-3xl bg-opacity-30 rounded-full"
      >
        <img src="./home.png" alt="" className="h-full invert" />
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
