import React from "react";
import { motion } from "framer-motion";

function IntroSection() {
  const text =
    "I'm Amlan, a passionate software developer from Guwahati, India. When I'm not coding, you'll find me immersed in indie rock music or watching films. I find peace and inspiration in the mountains, they're my ultimate therapist.".split(
      " "
    );
  return (
    <main className="introsection h-60 flex gap-8 p-8 z-10">
      <motion.div className="introtext p-8 w-3/4 rounded-xl text-justify font-normal">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: i / 15,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </motion.div>
      <div className="photo rounded-xl">
        <img
          src="this-is-2.jpg"
          alt=""
          className="h-full object-contain rounded-xl"
        />
      </div>
    </main>
  );
}

export default IntroSection;
