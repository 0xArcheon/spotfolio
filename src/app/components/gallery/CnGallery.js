"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CnGallery = ({ images = [] }) => {
  const [active, setActive] = useState(0);

  // Reset when the image list changes (e.g., different project)
  useEffect(() => setActive(0), [images]);

  if (!images.length) return null;
  const current = images[active] ?? images[0];

  return (
    <section>
      <h2 className="section-title mb-4">Screenshots</h2>
      <div className="relative aspect-video overflow-hidden rounded-lg bg-spotify-surface shadow-card">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.url}
            src={current.url}
            alt={current.alt || "Screenshot"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="h-full w-full object-contain"
          />
        </AnimatePresence>
        {current.alt && (
          <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold">
            {current.alt}
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1 scrollbar-none">
          {images.map((image, index) => (
            <button
              key={image.url}
              onClick={() => setActive(index)}
              aria-label={image.alt || `Screenshot ${index + 1}`}
              aria-pressed={index === active}
              className={cn(
                "h-16 w-28 shrink-0 overflow-hidden rounded-md bg-spotify-surface transition",
                index === active
                  ? "shadow-[inset_0_0_0_2px_#fff]"
                  : "opacity-60 hover:opacity-100"
              )}
            >
              <img
                src={image.url}
                alt=""
                className={cn(
                  "h-full w-full object-cover",
                  index === active && "scale-[0.94] rounded"
                )}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

export default CnGallery;
