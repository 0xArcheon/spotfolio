import React from "react";
import NowPlaying from "./NowPlaying";
import TechStack from "./TechStack";

const framework = [
  { name: "React", icon: "/react.png" },
  { name: "Next.JS", icon: "/nextjs.svg" },
  { name: "Laravel", icon: "/laravel.svg" },
  { name: "Node JS", icon: "/developer.png" },
  { name: "Express", icon: "/express.svg" },
];

const language = [
  { name: "Javascript", icon: "/js.svg" },
  { name: "PHP", icon: "/php.svg" },
  { name: "Java", icon: "/java.svg" },
];

const database = [
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "PostgreSQL", icon: "/pgsql.png" },
  { name: "MySQL", icon: "/mysql.png" },
];

function RightCard() {
  return (
    <aside className="panel panel-scroll space-y-8 p-4">
      <NowPlaying />
      <TechStack framework={framework} database={database} language={language} />
    </aside>
  );
}

export default RightCard;
