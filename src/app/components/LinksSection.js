import React, { useState } from "react";
import SocialCard from "./SocialCard";

const socials = [
  {
    name: "LinkedIn",
    icon: "linkedin.svg",
    link: "https://www.linkedin.com/in/amlan-js/",
  },
  {
    name: "Github",
    icon: "github.svg",
    link: "https://github.com/0xArcheon",
  },
  {
    name: "e-mail",
    icon: "mail.svg",
    link: "mailto:imamlan04@gmail.com",
  },
  {
    name: "Resume",
    icon: "download.svg",
    link: "https://drive.google.com/file/d/1pdZDsgwONU3R7gWPi-o9pWeBK_kgxbCV/view",
  },
];

const images = [
  "https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://cdn.pixabay.com/photo/2024/01/04/21/54/volcano-8488486_1280.jpg",
];

function LinksSection() {
  return (
    <main className="linkssection flex p-8 justify-between z-10">
      <div className="slideshow w-1/2">
        <div className="title">Gallery</div>
        <img
          className="my-3 rounded-xl"
          src="https://cdn.pixabay.com/photo/2024/01/04/21/54/volcano-8488486_1280.jpg"
          alt=""
        />
      </div>
      <div className="links w-2/5 px-8 h-full">
        <div className="title">Get In Touch</div>
        <div
          className="flex my-3 flex-wrap gap-4 py-5 rounded-xl
        justify-center bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10"
        >
          {socials.map((item, index) => {
            return (
              <SocialCard
                key={index}
                name={item.name}
                icon={item.icon}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default LinksSection;
