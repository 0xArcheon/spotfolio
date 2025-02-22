import React from "react";

const Button = () => {
  return (
    <button className="relative inline-block cursor-pointer outline-none border-0 align-middle bg-transparent p-0 font-inherit w-48 group overflow-hidden">
      {/* Gradient backgrounds */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#48e07d] to-[#63e892] -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out rounded-3xl" />
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#48e07d]/40 to-[#63e892]/40 -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out delay-100 rounded-3xl" />

      {/* Base button with default expanded state */}
      <span
        className="relative block m-0 w-full h-12 rounded-3xl bg-slate-500 bg-opacity-30 backdrop-blur-3xl transition-all duration-700 ease-in-out"
        aria-hidden="true"
      />

      {/* Content wrapper to keep text and arrow together */}
      <span className="absolute inset-0 flex items-center z-30">
        {/* Arrow icon wrapper */}
        <span className="absolute left-2.5 translate-x-4 transition-all duration-700 ease-in-out group-hover:translate-x-6">
          {/* Arrow line */}
          <span className="block w-4.5 h-0.5 bg-white transition-all duration-700" />
          {/* Arrow head */}
          <span className="absolute -top-1 right-0.5 w-2.5 h-2.5 border-t-2 border-r-2 border-white rotate-45 transition-all duration-700" />
        </span>

        {/* Button text */}
        <span className="absolute inset-0 py-3 pl-4 text-white font-normal leading-relaxed text-center">
          Resume
        </span>
      </span>
    </button>
  );
};

export default Button;
