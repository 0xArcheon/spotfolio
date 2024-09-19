import React from "react";
import * as motion from "framer-motion/client";

function SocialCard({ name, icon, link }) {
  return (
    <a
      href={link}
      className=" socialcard rounded-full p-2 w-5/12 aspect-square flex justify-center"
    >
      <div className="w-1/2 flex justify-around flex-col">
        <img src={icon} alt="" className="" />
        <div>{name}</div>
      </div>
    </a>
  );
}

export default SocialCard;
