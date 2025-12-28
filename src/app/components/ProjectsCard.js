import React from "react";
import { Tooltip } from "react-tooltip";
import { Github, ExternalLink } from "lucide-react"; // Assuming you use lucide or similar

function ProjectsCard({ data, motion }) {
  // We don't strictly need state for the hover effect if we use CSS/Tailwind groups
  // but we keep the motion prop for the entrance animation.

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
      className="projectscard group relative rounded-md p-4 transition-all duration-300 ease-in-out
                 hover:bg-slate-400 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-3xl hover:bg-opacity-10 
                 bg-transparent w-full max-w-[280px]" // Fixed width helps emulate the column grid style of Spotify
    >
      {/* 1. Image Container */}
      <div className="relative aspect-square w-full shadow-lg mb-4">
        <img
          className="h-full w-full rounded-md object-cover shadow-black/50 drop-shadow-lg"
          src={data.logo.url}
          alt={data.name}
        />

        {/* 2. The "Spotify Style" Floating Action Button */}
        {/* Appears from bottom-right on hover. Matches your slate theme but with higher opacity for contrast */}
        <div
          className="absolute bottom-2 right-2 translate-y-4 opacity-0 transition-all duration-300 ease-out 
                        group-hover:translate-y-0 group-hover:opacity-100 z-10"
        >
          <a
            href={`/projects/${data.projectId}`}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100/75 text-slate-900 shadow-xl hover:scale-105 transition-transform"
            data-tooltip-id="view-project"
          >
            <ExternalLink size={20} fill="currentColor" />
          </a>
        </div>
      </div>

      {/* 3. Text Content */}
      <div className="flex flex-col gap-1">
        <a href={`/projects/${data.projectId}`} className="block">
          <h3
            className="truncate font-bold text-white text-base"
            title={data.name}
          >
            {data.name}
          </h3>
        </a>

        {/* Description / Tech Stack mimicking "Artist Name" */}
        <p className="line-clamp-2 text-sm text-slate-300 hover:text-white font-medium">
          {data.description || "React • Node.js • Tailwind"}
        </p>
      </div>

      {/* 4. Secondary Actions (GitHub) */}
      {/* Positioned absolutely or integrated into the flow depending on preference. 
          Here it's subtle at the top right, or can be next to the title. */}
      {data.githubUrl && (
        <a
          href={data.githubUrl}
          target="_blank"
          rel="noreferrer"
          id="github-link"
          className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
        >
          <Github size={18} />
        </a>
      )}

      <Tooltip id="view-project" content="View Case Study" />
      <Tooltip anchorSelect="#github-link" content="View Source Code" />
    </motion.div>
  );
}

export default ProjectsCard;
