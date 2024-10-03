import React from "react";
import * as motion from "framer-motion/client";
import { useState } from "react";

function SocialCard({ name, icon, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      className="socialcard text-sm rounded-full p-2 w-5/12 aspect-square flex justify-center z-10"
      whileHover={{
        scale: 1.05,
        color: "#fff",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        background: { duration: 0.8, delay: 0.1 },
        color: { duration: 0.5 },
        boxShadow: { duration: 0.4 },
        border: { duration: 0.2 },
      }}
    >
      <div className="w-1/2 flex justify-around flex-col items-center">
        <img src={icon} alt="" className="" />
        <div className="">{name}</div>
      </div>
    </motion.a>
  );
}

export default SocialCard;
