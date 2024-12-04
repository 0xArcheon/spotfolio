import React from "react";
import NowPlaying from "./NowPlaying";
import TechStack from "./TechStack";
import Button from "./DownloadButton";
function RightCard() {
  return (
    <div className="rightcard w-1/3 mt-10 pr-32 relative h-[352px]">
      <div
        className="absolute top-0 left-0 w-full h-full bg-green-200 bg-clip-padding
       backdrop-filter backdrop-blur-3xl bg-opacity-30 rounded-lg z-[-1]"
      ></div>
      <NowPlaying />
      <TechStack />
      <div className="flex mt-10 justify-center items-center w-full">
        <Button/>
      </div>
    </div>
  );
}

export default RightCard;
