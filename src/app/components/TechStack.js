"use client";
import React, { useState } from "react";
import * as motion from "framer-motion/client";

const tabs = [
  { key: "language", label: "Languages" },
  { key: "framework", label: "Frameworks" },
  { key: "database", label: "Databases" },
];

const itemLabel = {
  language: "Language",
  framework: "Framework",
  database: "Database",
};

function TechStack({ framework = [], language = [], database = [] }) {
  const [tech, setTech] = useState("language");
  const items = { language, framework, database }[tech];

  return (
    <section>
      <h2 className="mb-3 text-base font-bold">Technology Stack</h2>
      <div className="mb-2 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className="pill-dark"
            aria-pressed={tech === tab.key}
            onClick={() => setTech(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.ul
        key={tech}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {items.map((item) => (
          <motion.li
            key={item.name}
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: { opacity: 1, y: 0 },
            }}
            className="-mx-2 flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-spotify-elevated"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-spotify-card">
              <img src={item.icon} alt="" className="h-6 w-6 object-contain invert" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-base">{item.name}</p>
              <p className="text-sm text-spotify-silver">{itemLabel[tech]}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default TechStack;
