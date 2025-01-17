import React from "react";
import NowPlaying from "./NowPlaying";
import TechStack from "./TechStack";
function RightCard() {
  const framework = [
    { name: "React", icon: "react.png" },
    { name: "Next.JS", icon: "nextjs.svg" },
    { name: "Laravel", icon: "lara.png" },
    { name: "Node JS", icon: "developer.png" },
    { name: "Express", icon: "express.svg" },
  ];

  const language = [
    { name: "Javascript", icon: "js.svg" },
    { name: "PHP", icon: "php.svg" },
    { name: "Java", icon: "java.svg" },
    { name: "HTML", icon: "html.png" },
  ];

  const database = [
    { name: "MongoDB", icon: "mongo.svg" },
    { name: "PostgreSQL", icon: "pgsql.png" },
    { name: "MySQL", icon: "mysql.png" },
  ];

  return (
    <div className="rightcard w-1/3 mt-10 mr-28 relative h-[352px]">
      <div
        className="absolute top-0 left-0 w-full h-full bg-green-200 bg-clip-padding
       backdrop-filter backdrop-blur-3xl bg-opacity-30 rounded-lg z-[-1]"
      ></div>
      <NowPlaying />
      <TechStack
        framework={framework}
        database={database}
        language={language}
      />
    </div>
  );
}

export default RightCard;
