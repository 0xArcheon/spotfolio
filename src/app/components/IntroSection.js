import React from "react";
import { motion } from "framer-motion";

function IntroSection() {
  return (
    <main className="introsection h-60 flex gap-8 p-8 z-10">
      <motion.div
        className="introtext p-8 w-3/4 rounded-xl text-justify font-normal"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        I'm <span className="font-medium">Amlan</span>, a passionate{" "}
        <span className="font-medium">Software Developer</span> by profession. I
        spend my weekends watching films and listening to indie rock music.
        Mountains are my therapist.
      </motion.div>
      <div className="photo rounded-xl">
        <img
          src="this-is-2.jpg"
          alt=""
          className="h-full object-contain rounded-xl"
        />
      </div>
    </main>
  );
}

export default IntroSection;
