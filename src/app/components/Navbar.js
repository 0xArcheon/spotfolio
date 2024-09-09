import React from "react";

function Navbar() {
  return (
    <main className="navbar w-full flex justify-center font-outfit">
      <div
        className="flex flex-row gap-2 justify-center rounded-full py-1.5 px-6 my-1 w-fit 
         bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30"
      >
        <div className="px-3 py-1 rounded-full text-fern-900 bg-fern-300">
          Home
        </div>
        <div className="px-3 py-1 rounded-full text-fern-100">Projects</div>
        <div className="px-3 py-1 rounded-full text-fern-100">Blog</div>
      </div>
    </main>
  );
}

export default Navbar;
