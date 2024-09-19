import React from "react";
import IntroSection from "./IntroSection";
import LinksSection from "./LinksSection";
import ProjectSection from "./ProjectSection";
import * as motion from "framer-motion/client";
import { easeOut } from "framer-motion";

function MainCard() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
      className="maincard flex w-2/3 h-fit mx-32 mr-8 mt-10 rounded-xl flex-col
    bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30"
    >
      <div className="navbuttons flex gap-2 p-3">
        <button className="h-10">
          <img src="back.svg" alt="" className="h-full" />
        </button>
        <button className="h-10">
          <img src="forward.svg" alt="" className="h-full" />
        </button>
      </div>
      <IntroSection />
      <LinksSection />
      <ProjectSection />
    </motion.main>
  );
}

export default MainCard;
