import React from "react";
import * as motion from "framer-motion/client";

function SocialCard({ name, icon, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      className="socialcard text-sm rounded-full p-2 w-5/12 aspect-square flex justify-center z-10"
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <div className="w-1/2 flex justify-around flex-col items-center">
        <motion.img
          src={icon}
          alt=""
          className=""
          whileHover={{ rotate: 360, scale: [1, 0.5, 1] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <div className="">{name}</div>
      </div>
    </motion.a>
  );
}

export default SocialCard;
