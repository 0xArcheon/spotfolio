"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CnGallery = ({ images }) => {
  const items = [
    {
      id: 1,
      elements: [
        {
          id: 1,
          width: 250,
          img: images[0].url,
          alt: images[0].alt,
        },
        {
          id: 2,
          width: 100,
          img: images[1].url,
          alt: images[1].alt,
        },
      ],
    },
    {
      id: 2,
      elements: [
        {
          id: 3,
          width: 100,
          img: images[2].url,
          alt: images[2].alt,
        },
        {
          id: 4,
          width: 250,
          img: images[3].url,
          alt: images[3].alt,
        },
      ],
    },
  ];
  const [activeItem, setActiveItem] = useState(null);

  const allElements = items.flatMap((column) => column.elements);

  const handleItemClick = (ele) => {
    setActiveItem(ele);
  };

  return (
    <div className="flex flex-col w-full justify-center">
      <div>
        <div className="title text-xl font-medium w-full my-4">Screenshots</div>
      </div>
      <div className="h-full center w-full flex flex-col gap-5 relative items-center py-10 my-3">
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
                className="w-full h-full flex items-center justify-center gap-10 overflow-hidden max-md:flex-col"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                layout
              >
                <motion.div
                  layoutId={`card-${activeItem.id}`}
                  className="w-[600px] h-[400px] rounded-3xl center font-bold text-5xl cursor-pointer overflow-hidden z-10 max-md:w-[400px] max-md:h-[150px] "
                  onClick={() => setActiveItem(null)}
                >
                  <img
                    src={activeItem.img}
                    alt=""
                    className="w-full object-cover h-full max-md:object-contain"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col gap-4 justify-center items-center max-md:flex-row"
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
        "rounded-2xl cursor-pointer text-3xl center overflow-hidden relative"
      )}
      layoutId={`card-${item.id}`}
      onClick={onClick}
    >
      <motion.img
        src={item.img}
        alt=""
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
