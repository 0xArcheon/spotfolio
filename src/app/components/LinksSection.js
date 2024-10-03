import React, { useState } from "react";
import SocialCard from "./SocialCard";
import ExpCard from "./ExpCard";

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

function LinksSection() {
  return (
    <main className="linkssection flex p-8 justify-between z-10">
      <ExpCard />
      <div className="links w-2/5 px-8 h-full">
        <div className="title text-xl font-medium">Get In Touch</div>
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
