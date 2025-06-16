"use client";
import { motion } from "framer-motion";

const Button = () => {
  return (
    <motion.button
      className="relative inline-block cursor-pointer outline-none border-0 align-middle bg-transparent p-0 font-inherit w-48 group overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Animated gradient backgrounds with modern timing */}
      <motion.span
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#48e07d] to-[#63e892] rounded-3xl"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.8,
        }}
      />

      {/* Secondary gradient with shimmer effect */}
      <motion.span
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#48e07d]/60 to-[#63e892]/60 rounded-3xl"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
          mass: 0.6,
          delay: 0.05,
        }}
      />

      {/* Subtle shine effect */}
      <motion.span
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl"
        initial={{ x: "-200%" }}
        whileHover={{ x: "200%" }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.1,
        }}
      />

      {/* Base button with enhanced backdrop blur */}
      <motion.span
        className="relative block m-0 w-full h-12 rounded-3xl bg-slate-500/20 backdrop-blur-xl border border-white/10 shadow-lg"
        whileHover={{
          backdropFilter: "blur(20px)",
          borderColor: "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />

      {/* Content wrapper */}
      <span className="absolute inset-0 flex items-center z-30">
        {/* Enhanced arrow with modern animation */}
        <motion.span
          className="absolute left-2.5"
          initial={{ x: 16 }}
          whileHover={{ x: 24 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          {/* Arrow line with scale animation */}
          <motion.span
            className="block w-4.5 h-0.5 bg-white rounded-full shadow-sm"
            whileHover={{ scaleX: 1.1 }}
            transition={{ duration: 0.2 }}
          />

          {/* Arrow head with rotation animation */}
          <motion.span
            className="absolute -top-1 right-0.5 w-2.5 h-2.5 border-t-2 border-r-2 border-white rounded-sm"
            style={{ rotate: "45deg" }}
            whileHover={{ rotate: "50deg", scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
        </motion.span>

        {/* Button text with subtle animation */}
        <motion.span
          className="absolute inset-0 py-3 pl-4 text-white font-medium leading-relaxed text-center tracking-wide"
          whileHover={{
            textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
          }}
          transition={{ duration: 0.2 }}
        >
          Resume
        </motion.span>
      </span>

      {/* Subtle glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0"
        whileHover={{
          opacity: 1,
          boxShadow:
            "0 0 20px rgba(72, 224, 125, 0.3), 0 0 40px rgba(72, 224, 125, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default Button;
