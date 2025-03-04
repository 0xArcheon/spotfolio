import React from "react";
import NowPlaying from "./NowPlaying";
import TechStack from "./TechStack";
import TiltedCard from "./TiltedCard";

function RightCard() {
  const framework = [
    { name: "React", icon: "react.png" },
    { name: "Next.JS", icon: "nextjs.svg" },
    { name: "Laravel", icon: "laravel.svg" },
    { name: "Node JS", icon: "developer.png" },
    { name: "Express", icon: "express.svg" },
  ];

  const language = [
    { name: "Javascript", icon: "js.svg" },
    { name: "PHP", icon: "php.svg" },
    { name: "Java", icon: "java.svg" },
  ];

  const database = [
    { name: "MongoDB", icon: "mongodb.svg" },
    { name: "PostgreSQL", icon: "pgsql.png" },
    { name: "MySQL", icon: "mysql.png" },
  ];

  return (
    <div className="rightcard mt-10 flex flex-col">
      <div
        className="absolute top-0 left-0 bg-green-200 bg-clip-padding
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
