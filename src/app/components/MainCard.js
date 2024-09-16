import React from "react";
import IntroSection from "./IntroSection";
import LinksSection from "./LinksSection";
import ProjectSection from "./ProjectSection";

function MainCard() {
  return (
    <main
      className="maincard flex w-2/3 h-fit mx-32 mr-8 mt-10 rounded-xl flex-col
    bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30"
    >
      <div className="navbuttons flex gap-2 p-3">
        <button className="h-10">
          <img src="back.svg" alt="" className="h-full" />
        </button>
        <button className="h-10">
          <img src="forward.svg" alt="" className="h-full" />
        </button>
      </div>
      <IntroSection />
      <LinksSection />
      <ProjectSection />
    </main>
  );
}

export default MainCard;
