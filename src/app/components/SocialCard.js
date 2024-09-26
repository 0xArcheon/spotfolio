import React from "react";
import * as motion from "framer-motion/client";

function SocialCard({ name, icon, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      className="socialcard rounded-xl p-2 w-5/12 aspect-square flex justify-center"
      whileHover={{
        scale: 1.1,
        boxShadow:
          "0px 0px 20px 5px rgba(98, 208, 137, 0.8), 0px 0px 30px rgba(246, 205, 97, 0.8)",
        background: "linear-gradient(135deg, #0f5745, #0c4b64)",
        color: "#fff",
        border: "2px solid rgba(98, 208, 137, 0.8)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        background: { duration: 0.8, delay: 0.1 },
        color: { duration: 0.5 },
        boxShadow: { duration: 0.4 },
        border: { duration: 0.4 },
      }}
    >
      <div className="w-1/2 flex justify-around flex-col">
        <img src={icon} alt="" className="" />
        <div>{name}</div>
      </div>
    </motion.a>
  );
}

export default SocialCard;
