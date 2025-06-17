import * as motion from "framer-motion/client";
import { easeOut } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function MetaCard({ name, client, startYear, link }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({
    x: dimensions.width,
    y: 0,
  });

  // Track mouse position and card dimensions
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePosition({ x: mouseX, y: mouseY });
    setDimensions({ width: rect.width, height: rect.height });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: dimensions.width, y: 0 });
  };
  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Adds a delay between each child element
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 }, // Slide in from the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "relative",
            overflow: "hidden",
            background: "rgba(255, 255, 255, 0.1)",
          }}
          className="w-full mt-8 flex flex-col rounded-xl p-4 gap-2 h-max
    bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30"
        >
          <div
            className="absolute pointer-events-none"
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(98, 208, 137, 0.5), transparent 60%)`,
              transition: "background 0.5s easeOut",
            }}
          ></div>
          <div className="flex justify-between items-center">
            <div className="title text-xl font-medium">{name}</div>
            <Link
              href={link.url}
              target="_blank"
              className="px-6 py-2 rounded-full bg-white text-black font-normal text-sm hover:bg-zinc-200 transition-colors"
            >
              <TooltipTrigger>{link.text}</TooltipTrigger>
              {/* <TooltipContent sideOffset={3}>
                <p className="text-xs z-30 mt-5">Launching Soon</p>
              </TooltipContent> */}
            </Link>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-zinc-400 text-sm">Client</p>
                <h3 className="text-md font-medium">{client}</h3>
              </div>
            </div>

            <div>
              <p className="text-zinc-400 text-sm">Start Date</p>
              <h3 className="text-md font-medium">{startYear}</h3>
            </div>
          </div>
        </motion.div>
      </Tooltip>
    </TooltipProvider>
  );
}
