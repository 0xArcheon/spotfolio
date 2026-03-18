import React, { useState } from "react";
import SocialCard from "./SocialCard";
import ExpCard from "./ExpCard";
import * as motion from "framer-motion/client";

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
    name: "Email",
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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <main className="linkssection flex justify-between items-stretch gap-6 max-lg:flex-col max-lg:h-fit">
      <ExpCard />

      {/* ── Get In Touch ─────────────────────────────────────── */}
      <div className="links w-1/3 h-full flex flex-col max-lg:w-full">

        {/* Label + rule — matches the redesigned page sections */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
            Get In Touch
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Card container */}
        <div
          className="flex-grow rounded-xl p-5 flex flex-col justify-center gap-1
            bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10"
        >
          {socials.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.link.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.1 + index * 0.07 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative flex items-center gap-4 px-4 py-3
                rounded-lg border border-transparent
                hover:border-white/10 hover:bg-white/5
                transition-all duration-200 cursor-pointer no-underline"
            >
              {/* Green left pip — appears on hover */}
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 rounded-full transition-all duration-200"
                style={{
                  background:
                    hoveredIndex === index
                      ? "linear-gradient(180deg,#62d089,rgba(98,208,137,0.2))"
                      : "transparent",
                }}
              />

              {/* Icon */}
              <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </span>

              {/* Name */}
              <span className="text-[14px] font-medium text-white/60 group-hover:text-white/95 transition-colors duration-200 flex-1">
                {item.name}
              </span>

              {/* Arrow — slides in on hover */}
              <span
                className="text-white/20 group-hover:text-white/50 text-xs transition-all duration-200
                  translate-x-0 group-hover:translate-x-1"
              >
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}

export default LinksSection;