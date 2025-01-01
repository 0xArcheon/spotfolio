import React from "react";

function ExpCard() {
  return (
    <div className="flex flex-col w-2/3 mr-5">
      <div>
        <div className="title text-xl font-medium w-full">Experience</div>
      </div>
      <div
        className="expcard p-5 rounded-xl flex flex-col h-full gap-5
        justify-around bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 my-3"
      >
        <div className="flex gap-5 items-center justify-between transform hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out">
          <div className="position font-semibold flex items-center gap-2">
            <img src="./dev.png" alt="" className="h-8 invert" />
            Software Developer
          </div>
          <div>
            <div className="company text-sm text-right">National Informatics Centre</div>
            <div className="text-xs text-right">
              Guwahati, Assam
            </div>
            <div className="duration text-xs text-right opacity-60">
              Aug 2024 - Present
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-between transform hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out">
          <div className="position font-semibold flex items-center gap-2">
            <img src="./team-leader.png" alt="" className="h-8 invert" />
            Lead Support Engineer
          </div>
          <div>
            <div className="company text-sm text-right">National Informatics Centre</div>
            <div className="text-xs text-right">
            Guwahati, Assam
            </div>
            <div className="duration text-xs text-right opacity-60">
              Dec 2023 - Jul 2024
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-between transform hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out">
          <div className="position font-semibold flex items-center gap-2">
            <img src="./support.png" alt="" className="h-8 invert" />
            Application Support Engineer
          </div>
          <div>
            <div className="company text-sm text-right">National Informatics Centre</div>
            <div className="text-xs text-right">
            Guwahati, Assam
            </div>
            <div className="duration text-xs text-right opacity-60">
              Aug 2023 - Nov 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCard;