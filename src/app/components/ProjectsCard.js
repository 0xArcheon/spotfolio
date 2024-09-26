import React from "react";

function ProjectsCard({ data, motion }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      className="projectscard rounded-md p-6 hover:bg-gray-800 aspect-square relative"
      whileHover="hover"
    >
      <div className="relative h-60 w-60">
        <img
          className="rounded-md h-full w-full object-cover"
          src={data.image}
          alt=""
        />
        <motion.div
          className="rounded-full link absolute bottom-4 right-4 flex items-center justify-center p-4 bg-fern-300 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0, scale: 0.8 }}
          variants={{
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <a href={data.link} target="_blank">
            <img src="/code-branch.png" alt="" className="h-10 w-10" />
          </a>
        </motion.div>
      </div>

      <div className="name py-2">{data.name}</div>
    </motion.div>
  );
}

export default ProjectsCard;
