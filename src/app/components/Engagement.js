"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const Engagement = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#121212] text-white p-6 rounded-lg max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Engagement</h2>
      <motion.div
        initial={{ height: 80 }}
        animate={{ height: isExpanded ? "auto" : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative overflow-hidden"
      >
        <p className="text-[#b3b3b3] text-sm leading-relaxed">{content}</p>
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#121212] to-transparent" />
        )}
      </motion.div>
      <button
        onClick={toggleExpansion}
        className="mt-2 text-[#1db954] hover:underline flex items-center text-sm font-medium"
      >
        {isExpanded ? "Show less" : "Show more"}
        {isExpanded ? (
          <ChevronUp size={20} className="ml-1" />
        ) : (
          <ChevronDown size={20} className="ml-1" />
        )}
      </button>
    </div>
  );
};

export default Engagement;
