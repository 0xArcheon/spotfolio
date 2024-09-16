import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = [
  {
    name: "Vyse Marketplace",
    image:
      "https://plus.unsplash.com/premium_photo-1682464708085-95b4486e2c32?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "github.com",
  },

  {
    name: "ZenManage",
    image:
      "https://plus.unsplash.com/premium_vector-1712873279566-379ba42df159?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "github.com",
  },
  {
    name: "Spotfolio",
    image:
      "https://images.unsplash.com/photo-1548783300-70b41bc84f56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "github.com",
  },
];

function ProjectSection() {
  return (
    <div className="projectsection p-8">
      <div className="title">Projects</div>
      <div className="container flex">
        {Projects.map((item) => {
          return <ProjectsCard data={item} key={item} />;
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
