import React from "react";

function ProjectsCard({ data }) {
  return (
    <div className="projectscard rounded-md p-6 hover:bg-gray-800 w-fit">
      <div className="h-60">
        <img
          className="rounded-md h-full aspect-square object-cover"
          src={data.image}
          alt=""
        />
        <div className="link">
          <img src="" alt="" className="h-full invert" />
        </div>
      </div>
      <div className="name py-2">{data.name}</div>
    </div>
  );
}

export default ProjectsCard;
