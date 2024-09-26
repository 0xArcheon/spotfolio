import React from "react";
import { motion } from "framer-motion";

function IntroSection() {
  return (
    <main className="introsection h-60 flex gap-8 p-8 z-10">
      <motion.div
        className="introtext p-8 w-3/4 rounded-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem
        cupiditate quia quibusdam voluptatem perspiciatis perferendis est,
        obcaecati illo quisquam deleniti quis minima ipsum corrupti suscipit ab,
        tempore dicta minus.
      </motion.div>
      <div className="photo rounded-xl">
        <img
          src="this-is.jpg"
          alt=""
          className="h-full object-contain rounded-xl"
        />
      </div>
    </main>
  );
}

export default IntroSection;
