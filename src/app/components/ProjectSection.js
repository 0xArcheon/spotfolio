import React from "react";
import ProjectsCard from "./ProjectsCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = [
  {
    projectId: "atwsss",
    name: "ATWSSS",
    desc: "a comprehensive web portal for the Assam Transport Workers' Social Security Scheme, 2022 (ATWSS) to streamline the administration of benefits for motor transport workers in Assam. The portal facilitates key processes, including seamless online registration for beneficiaries, efficient management of cess levies and payments, and streamlined fund collection and disbursement. It also includes modules for distributing benefits under death, disability, and critical disease assistance categories. To enhance healthcare access, the portal integrates with government healthcare schemes like Ayushman Bharat and Atal Amrit Abhiyan. Designed to improve accessibility and transparency, the portal plays a vital role in ensuring social security for unorganized sector workers.",
    logo: "",
    language: ["php"],
    framework: ["Laravel"],
    db: ["postgreSQL"],
    image:
      "https://images.pexels.com/photos/1123972/pexels-photo-1123972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com",
  },
  {
    projectId: "vyse",
    name: "Vyse Marketplace",
    desc: "",
    logo: "",
    language: ["Javascript"],
    framework: ["ReactJS"],
    db: ["Firebase"],
    image:
      "https://plus.unsplash.com/premium_photo-1682464708085-95b4486e2c32?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com",
  },
  {
    projectId: "zenmanage",
    name: "ZenManage",
    desc: "",
    logo: "",
    language: ["Javascript"],
    framework: ["ReactJS", "NodeJS", "Express"],
    db: ["MongoDB"],
    image:
      "https://plus.unsplash.com/premium_vector-1712873279566-379ba42df159?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com",
  },
];

function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        {Projects.map((item, index) => (
          <ProjectsCard data={item} key={index} motion={motion} />
        ))}
      </motion.div>
    </div>
  );
}

export default ProjectSection;
