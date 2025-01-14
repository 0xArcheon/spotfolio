import React from "react";
import { motion } from "framer-motion";

function IntroSection() {
  const text =
    "I am a passionate software developer from Guwahati, India. When I'm not coding, you'll find me immersed in indie rock music or watching films. I find peace and inspiration in the mountains, they're my ultimate therapist.".split(
      " "
    );
  return (
    <main className="flex p-8 pt-2">
      <div className="photo rounded-xl flex justify-center items-center">
        <img src="this-is-2.jpg" alt="" className="object-contain rounded-xl" />
      </div>
      <div className="introsection flex flex-col gap-4 pl-8 z-10">
        <div className="name z-10 text-4xl font-poppins text-left tracking-wider">
          Amlan Saikia
        </div>
        <motion.div className="introtext rounded-xl text-justify font-normal">
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
      </div>
    </main>
  );
}

export default IntroSection;
