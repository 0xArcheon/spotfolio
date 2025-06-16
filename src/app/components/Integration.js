"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Integration({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-slate-500/30 backdrop-blur-3xl border border-white/10 p-8 rounded-2xl max-w-md mt-8 shadow-xl">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-1">Integrations</h2>
      </div>

      {/* Integration Grid */}
      <motion.div
        className="space-y-3"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="group relative"
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Card Background */}
            <div className="relative bg-slate-700/40 backdrop-blur-xl border border-slate-600/30 rounded-xl p-5 overflow-hidden transition-all duration-300 group-hover:border-slate-500/50 group-hover:bg-slate-700/60">
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#1db954]/10 via-[#1db954]/5 to-transparent opacity-0 group-hover:opacity-100"
                initial={false}
                animate={
                  hoveredIndex === index
                    ? {
                        opacity: 1,
                        background:
                          "linear-gradient(90deg, rgba(29, 185, 84, 0.1) 0%, rgba(29, 185, 84, 0.05) 50%, transparent 100%)",
                      }
                    : { opacity: 0 }
                }
                transition={{ duration: 0.3 }}
              />

              {/* Subtle shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full"
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              {/* Content */}
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-white text-base mb-2 group-hover:text-white transition-colors">
                    {item.type}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors line-clamp-2">
                    {Array.isArray(item.value)
                      ? item.value.join(", ")
                      : item.value}
                  </p>
                </div>

                {/* Action Button */}
                <motion.div
                  className="ml-4 flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8, x: 10 }}
                  animate={
                    hoveredIndex === index
                      ? { opacity: 1, scale: 1, x: 0 }
                      : { opacity: 0.6, scale: 0.9, x: 5 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="bg-emerald-400/90 hover:bg-emerald-400 rounded-full p-2.5 shadow-lg backdrop-blur-sm border border-emerald-300/20 transition-all duration-200">
                    <ArrowUpRight size={16} className="text-slate-900" />
                  </div>
                </motion.div>
              </div>

              {/* Invisible Link Overlay */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20"
                aria-label={`Open ${item.type} integration`}
              />

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#1db954] to-emerald-400"
                initial={{ width: "0%" }}
                animate={
                  hoveredIndex === index ? { width: "100%" } : { width: "0%" }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Integration;
