import React from "react";
import ProjectsCard from "./ProjectsCard";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.text();
          throw new Error(
            `HTTP error! status: ${response.status}, message: ${errorData}`
          );
        }

        const data = await response.json();
        setProjects(data);
        console.log("Fetched projects:", data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projectsection p-8 z-10 group relative overflow-hidden">
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
        className="container flex overflow-x-hidden group-hover:overflow-x-auto scrollbar-thumb-rounded-xl scrollbar-corner-rounded-xl  
        scrollbar-track-rounded-xl scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-fern-200"
      >
        {projects.map((item, index) => (
          <ProjectsCard data={item} key={index} motion={motion} />
        ))}
      </motion.div>
    </div>
  );
}

export default ProjectSection;
