"use client";
import React, { useState } from "react";

function TechStack() {
  const [tech, setTech] = useState("language");

  const framework = [
    {
      name: "React",
      icon: "react.png",
    },
    {
      name: "Next.JS",
      icon: "nextjs.svg",
    },
    {
      name: "Laravel",
      icon: "lara.png",
    },
    {
      name: "Node JS",
      icon: "developer.png",
    },
    {
      name: "Express",
      icon: "express.svg",
    },
  ];
  const language = [
    {
      name: "Javascript",
      icon: "js.svg",
    },
    {
      name: "PHP",
      icon: "php.svg",
    },
    {
      name: "Java",
      icon: "java.svg",
    },
    {
      name: "HTML",
      icon: "html.png",
    },
  ];
  const database = [
    {
      name: "MongoDB",
      icon: "mongo.svg",
    },
    {
      name: "PostgreSQL",
      icon: "pgsql.png",
    },
    {
      name: "MySQL",
      icon: "mysql.png",
    },
  ];

  return (
    <div
      className="techstack flex flex-col mt-10 rounded-xl p-4 gap-2
    bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30"
    >
      <div className="title">Technology Stack</div>
      <div className="category text-xs flex gap-2 mt-4">
        <button
          className={`rounded-xl p-2 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 ${
            tech === "language" ? "bg-slate-100" : "bg-slate-500"
          }`}
          onClick={() => setTech("language")}
        >
          Languages
        </button>
        <button
          className={`rounded-xl p-2 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 ${
            tech === "framework" ? "bg-slate-100" : "bg-slate-500"
          }`}
          onClick={() => setTech("framework")}
        >
          Frameworks
        </button>
        <button
          className={`rounded-xl p-2 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 ${
            tech === "db" ? "bg-slate-100" : "bg-slate-500"
          }`}
          onClick={() => setTech("db")}
        >
          Databases
        </button>
      </div>
      <div className="tech flex flex-col gap-3">
        {tech === "language" &&
          language.map((item) => (
            <div
              className="techcard flex items-center justify-start gap-2"
              key={item.name}
            >
              <img
                src={item.icon}
                alt=""
                className="h-8 invert rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30"
              />
              <div className="name">{item.name}</div>
            </div>
          ))}

        {tech === "framework" &&
          framework.map((item) => (
            <div
              className="techcard flex items-center justify-start gap-2 "
              key={item.name}
            >
              <img
                src={item.icon}
                alt=""
                className="h-8 invert rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30"
              />
              <div className="name">{item.name}</div>
            </div>
          ))}

        {tech === "db" &&
          database.map((item) => (
            <div
              className="techcard flex items-center justify-start gap-2"
              key={item.name}
            >
              <img
                src={item.icon}
                alt=""
                className="h-8 invert rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30"
              />
              <div className="name">{item.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TechStack;
