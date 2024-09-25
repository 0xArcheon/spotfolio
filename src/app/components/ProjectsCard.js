import React from "react";

function ProjectsCard({ data, motion }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      className="projectscard rounded-md p-6 hover:bg-gray-800 aspect-square"
    >
      <div className="h-60 w-60">
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
    </motion.div>
  );
}

export default ProjectsCard;
