"use client";
import * as motion from "framer-motion/client";
import { ArrowUpRight } from "lucide-react";

function Integration({ data }) {
  return (
    <section>
      <h2 className="mb-3 text-base font-bold">Integrations</h2>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {data.map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group -mx-2 flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-spotify-elevated"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-spotify-card text-sm font-bold text-spotify-silver">
                {[].concat(item.value)[0].slice(0, 2)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-base">
                  {Array.isArray(item.value) ? item.value.join(", ") : item.value}
                </p>
                <p className="text-sm text-spotify-silver">{item.type}</p>
              </div>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-spotify-silver opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default Integration;
