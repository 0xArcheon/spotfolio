import React from "react";
import ProjectsCard from "./ProjectsCard";
import * as motion from "framer-motion/client";
import { projects } from "@/lib/db";

function ProjectSection() {
  return (
    <section>
      <h2 className="section-title mb-2">Projects</h2>
      <motion.div
        className="-mx-3 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      >
        {projects.map((item) => (
          <ProjectsCard data={item} key={item.projectId} />
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectSection;
