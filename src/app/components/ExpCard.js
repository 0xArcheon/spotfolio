import React from "react";

function ExpCard() {
  return (
    <div className="flex flex-col w-2/3 mr-5 h-full max-lg:w-full max-lg:mr-0 max-md:mt-8">
      <div>
        <div className="title text-xl font-medium w-full">Experience</div>
      </div>
      <div
        className="expcard p-5 rounded-xl flex flex-col h-full gap-5
        justify-around bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 my-3"
      >
        <div
          className="flex gap-4 items-center justify-between transform hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out
        max-md:flex-col max-md:items-start max-md:gap-1"
        >
          <div className="">
            <div className="position text-sm font-semibold flex items-center gap-2">
              <div className="max-md:hidden">
                <img src="./dev.png" alt="" className="h-8 invert" />
              </div>
              <div className="max-md:flex">
                <div>
                  <div>Software Developer</div>
                </div>
                <div
                  className="duration text-xs opacity-60 rounded-2xl border-2 w-fit px-2 bg-slate-100 text-slate-800
              max-md:hidden"
                >
                  Aug 24-Present
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="company text-sm text-right max-md:text-left">
              National Informatics Centre
            </div>
            <div className="text-xs text-right max-md:text-left">
              Guwahati, Assam
            </div>
          </div>
        </div>
        <div className="h-0.5 bg-white hidden max-md:block opacity-20"></div>
        <div
          className="flex gap-4 items-center justify-between transform hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out
        max-md:flex-col max-md:items-start max-md:gap-1"
        >
          <div className="position font-semibold flex items-center gap-2 text-sm">
            <div className="max-md:hidden">
              <img src="./team-leader.png" alt="" className="h-8 invert" />
            </div>
            <div className="max-md:flex">
              <div>Lead Support Engineer</div>
              <div
                className="duration text-xs opacity-60 rounded-2xl border-2 w-fit px-2 bg-slate-100 text-slate-800
              max-md:hidden"
              >
                Dec 23-Jul 24
              </div>
            </div>
          </div>
          <div>
            <div className="company text-sm text-right max-md:text-left">
              National Informatics Centre
            </div>
            <div className="text-xs text-right max-md:text-left">
              Guwahati, Assam
            </div>
          </div>
        </div>
        <div className="h-0.5 bg-white hidden max-md:block opacity-20"></div>
        <div
          className="flex gap-4 items-center justify-between transform hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out
        max-md:flex-col max-md:items-start max-md:gap-1"
        >
          <div className="position font-semibold flex items-center gap-2 text-sm">
            <div className="max-md:hidden">
              <img src="./support.png" alt="" className="h-8 invert" />
            </div>
            <div className="max-md:flex">
              <div>Support Engineer</div>
              <div
                className="duration text-xs opacity-60 rounded-2xl border-2 w-fit px-2 bg-slate-100 text-slate-800
              max-md:hidden"
              >
                Aug 23-Nov 23
              </div>
            </div>
          </div>
          <div>
            <div className="company text-sm text-right max-md:text-left">
              National Informatics Centre
            </div>
            <div className="text-xs text-right max-md:text-left">
              Guwahati, Assam
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCard;
