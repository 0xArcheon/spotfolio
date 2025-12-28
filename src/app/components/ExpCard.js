import React from "react";
import { Briefcase, Calendar } from "lucide-react";

function ExpCard() {
  const experiences = [
    {
      id: 1,
      role: "Software Developer",
      company: "GNRC Ltd.",
      location: "Guwahati, Assam",
      period: "Oct 2025 - Present",
      description:
        "Leading frontend architecture migration to React and mentoring junior developers on best practices.",
    },
    {
      id: 2,
      role: "Software Developer",
      company: "NIC, Assam",
      location: "Guwahati, Assam",
      period: "Aug 2023 - Sep 2025",
      description:
        "Full stack development for crucial government dashboard initiatives using Node.js and PostgreSQL.",
    },
  ];

  return (
    <div className="flex flex-col w-2/3 mr-5 h-full max-lg:w-full max-lg:mr-0 max-md:mt-8 text-white">
      <div>
        <div className="title text-xl font-medium w-full mb-2">Experience</div>
      </div>

      <div className="expcard p-5 rounded-xl flex flex-col h-full bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none"></div>

        <div className="relative h-full flex flex-col justify-center">
          <div className="absolute left-[11px] top-2 bottom-6 w-[2px] bg-white/10 rounded-full"></div>

          <div className="space-y-6 relative z-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-white/10 border-[2px] border-white/20 group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] group-hover:scale-110 transition-all duration-300 ease-out z-20 flex items-center justify-center">
                  <Briefcase
                    size={10}
                    className="text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <div className="flex flex-col gap-1 transition-transform duration-300 group-hover:translate-x-1">
                  <h3 className="text-base font-bold text-white tracking-wide leading-none">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-3 text-white/60 text-sm mt-1">
                    <span>{exp.company}</span>
                    <span className="h-1 w-1 rounded-full bg-white/30"></span>
                    <span>{exp.location}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-white/50 bg-white/5 px-2 py-1 rounded-md">
                      <Calendar size={10} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* <p className="text-sm text-white/50 mt-2 font-light leading-relaxed max-w-md">
                    {exp.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCard;
