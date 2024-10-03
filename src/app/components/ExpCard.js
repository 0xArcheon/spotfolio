import React from "react";

function ExpCard() {
  return (
    <div className="flex flex-col">
      <div>
        <div className="title text-xl font-medium w-full">Experience</div>
      </div>
      <div
        className="expcard p-5 rounded-xl flex flex-col h-full
        justify-around bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 my-3"
      >
        <div className="flex gap-5 items-center justify-between">
          <div className="position font-semibold">Software Developer</div>
          <div>
            <div className="company text-sm">National Informatics Centre</div>
            <div className="text-xs text-right">
              Assam State Centre, Guwahati
            </div>
            <div className="duration text-xs text-right opacity-60">
              Aug 2024 - Present
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-between">
          <div className="position font-semibold">Support Team Lead</div>
          <div>
            <div className="company text-sm">National Informatics Centre</div>
            <div className="text-xs text-right">
              Assam State Centre, Guwahati
            </div>
            <div className="duration text-xs text-right opacity-60">
              Dec 2023 - Jul 2024
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-between">
          <div className="position font-semibold">
            Application Support Engineer
          </div>
          <div>
            <div className="company text-sm">National Informatics Centre</div>
            <div className="text-xs text-right">
              Assam State Centre, Guwahati
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
