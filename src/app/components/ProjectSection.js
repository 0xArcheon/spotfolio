import React from "react";
import ProjectsCard from "./ProjectsCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = [
  {
    name: "Vyse Marketplace",
    image:
      "https://plus.unsplash.com/premium_photo-1682464708085-95b4486e2c32?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com",
  },

  {
    name: "ZenManage",
    image:
      "https://plus.unsplash.com/premium_vector-1712873279566-379ba42df159?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com",
  },
  {
    name: "Spotfolio",
    image:
      "https://images.unsplash.com/photo-1548783300-70b41bc84f56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com",
  },
  {
    name: "Assam Transport",
    image:
      "https://images.pexels.com/photos/1123972/pexels-photo-1123972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com",
  },
];

function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="projectsection p-8 z-10">
      <div className="title text-xl font-medium">Projects</div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.25,
              duration: 0.5,
            },
          },
        }}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="container flex overflow-x-scroll scrollbar-thumb-rounded-xl scrollbar-corner-rounded-xl 
        scrollbar-track-rounded-xl scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-fern-200"
      >
        {Projects.map((item, index) => (
          <ProjectsCard data={item} key={index} motion={motion} />
        ))}
      </motion.div>
    </div>
  );
}

export default ProjectSection;
