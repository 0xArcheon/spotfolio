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
    name: "email",
    icon: "mail.svg",
    link: "mailto:imamlan04@gmail.com",
  },

  {
    name: "Letterboxd",
    icon: "letterboxd.svg",
    link: "https://letterboxd.com/imamlan03",
  },
];

function LinksSection() {
  return (
    <main className="linkssection flex justify-between z-10 items-center h-80">
      <ExpCard />
      <div className="links w-1/3 h-full flex flex-col">
        <div className="title text-xl font-medium">Get In Touch</div>
        <div
          className="test flex my-3 flex-wrap p-5 rounded-xl flex-grow items-center
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
