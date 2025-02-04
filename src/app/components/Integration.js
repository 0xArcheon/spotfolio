"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PlayIcon } from "lucide-react";

function Integration({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 p-6 rounded-xl max-w-md mt-8">
      <h2 className="text-xl font-medium mb-4">Integrations</h2>
      <motion.div
        className="grid gap-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 p-4 rounded-md relative overflow-hidden group"
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-normal text-sm">{item.type}</h3>
                <p className="text-xs text-[#b3b3b3]">
                  {Array.isArray(item.value)
                    ? item.value.join(", ")
                    : item.value}
                </p>
              </div>
              <motion.div
                className="bg-[#1db954] rounded-full p-3 opacity-0 group-hover:opacity-100 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayIcon size={20} color="black" />
              </motion.div>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#1db954] to-transparent opacity-0 group-hover:opacity-20"
              initial={false}
              animate={
                hoveredIndex === index ? { opacity: 0.2 } : { opacity: 0 }
              }
            />
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              aria-label={`Open ${item.type} integration`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Integration;
