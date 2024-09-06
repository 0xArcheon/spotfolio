import React from "react";
import IntroSection from "./IntroSection";
import LinksSection from "./LinksSection";

function MainCard() {
  return (
    <main className="maincard flex w-2/3 h-fit border-2 border-fern-700 mx-32 mt-10 rounded-xl flex-col">
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
    </main>
  );
}

export default MainCard;
