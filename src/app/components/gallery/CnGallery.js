"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultWidths = [250, 100];

const CnGallery = ({ images = [] }) => {
  // Convert the images array into the expected gallery layout structure.
  const items = React.useMemo(() => {
    const elements = (images || []).map((image, index) => ({
      id: index + 1,
      width: defaultWidths[index % defaultWidths.length],
      img: image.url,
      alt: image.alt || "",
    }));

    const mid = Math.ceil(elements.length / 2);
    return [
      { id: 1, elements: elements.slice(0, mid) },
      { id: 2, elements: elements.slice(mid) },
    ];
  }, [images]);

  const [activeItem, setActiveItem] = useState(items[0]?.elements[0] ?? null);

  // Set the default active item when the image list changes (e.g., different project).
  useEffect(() => {
    if (items[0]?.elements[0]) {
      setActiveItem(items[0].elements[0]);
    }
  }, [items]);

  const allElements = items.flatMap((column) => column.elements);

  const handleItemClick = (ele) => {
    setActiveItem(ele);
  };

  return (
    <div className="flex flex-col mr-5 w-full px-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-white/80">
          Screenshots
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>
      <div className="h-full center w-full flex flex-col gap-5 relative items-center py-10 my-10">
        <motion.div
          className={cn("flex flex-col gap-5")}
          layout
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {items.map((column) => (
            <motion.div
              className={cn("flex items-center justify-center gap-5")}
              key={column.id}
              animate={{
                opacity: activeItem !== null ? 0 : 1,
                willChange: "auto",
              }}
            >
              {column.elements.map((ele, index) => (
                <Gallery
                  item={ele}
                  key={index}
                  onClick={() => setActiveItem(ele)}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, willChange: "auto" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full  overflow-hidden"
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeItem.id}
                className="w-full h-full flex items-center justify-center gap-10 overflow-hidden"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                layout
              >
                <motion.div
                  layoutId={`card-${activeItem.id}`}
                  className="w-[600px] h-[400px] rounded-3xl center font-bold text-5xl cursor-pointer overflow-hidden z-10"
                  onClick={() => setActiveItem(null)}
                >
                  <img
                    src={activeItem.img}
                    alt={activeItem.alt || "Gallery image"}
                    className="w-full object-cover h-full"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col gap-4 justify-center items-center"
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {allElements
                    .filter((ele) => ele.id !== activeItem.id)
                    .map((ele) => (
                      <Gallery
                        key={ele.id}
                        item={ele}
                        onClick={() => handleItemClick(ele)}
                        isSmall
                      />
                    ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const Gallery = (props) => {
  const { item, onClick, isSmall } = props;
  return (
    <motion.div
      style={{
        width: isSmall ? 80 : item.width,
        height: isSmall ? 80 : 150,
      }}
      className={cn(
        "rounded-2xl cursor-pointer text-3xl center overflow-hidden relative",
      )}
      layoutId={`card-${item.id}`}
      onClick={onClick}
    >
      <motion.img
        src={item.img}
        alt={item.alt || "Gallery thumbnail"}
        className="w-full object-cover h-full"
        whileHover={{ scale: 1.05 }}
        transition={{
          duration: 0.3,
        }}
      />
    </motion.div>
  );
};

export default CnGallery;
