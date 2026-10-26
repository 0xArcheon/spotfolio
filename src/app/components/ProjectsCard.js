import React from "react";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { Play } from "lucide-react";

function ProjectsCard({ data }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
    >
      <Link
        href={`/projects/${data.projectId}`}
        className="group block rounded-lg p-3 transition-colors hover:bg-spotify-elevated"
      >
        <div className="relative mb-3 aspect-square">
          <img
            className="h-full w-full rounded-md bg-spotify-card object-cover shadow-card"
            src={data.logo.url}
            alt=""
          />
          <span
            aria-hidden="true"
            className="play-fab absolute bottom-2 right-2 translate-y-2 opacity-0 shadow-heavy transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <Play size={20} fill="currentColor" />
          </span>
        </div>
        <h3 className="truncate text-base font-bold" title={data.name}>
          {data.name}
        </h3>
        <p className="line-clamp-2 text-sm text-spotify-silver">
          {data.startYear} • {data.client}
        </p>
      </Link>
    </motion.div>
  );
}

export default ProjectsCard;
