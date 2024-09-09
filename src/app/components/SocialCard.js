import React from "react";

function SocialCard({ name, icon, link }) {
  return (
    <a
      href={link}
      className=" socialcard rounded-lg w-5/12 aspect-square flex justify-center transform transition duration-300 hover:scale-105
    hover:border-teal-100 hover:border-2"
    >
      <div className="w-1/2 flex justify-around flex-col">
        <img src={icon} alt="" className="" />
        <div>{name}</div>
      </div>
    </a>
  );
}

export default SocialCard;
