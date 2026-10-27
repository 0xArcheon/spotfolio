import { FileText } from "lucide-react";
import { socials, resumeUrl, SocialIcon, linkTarget } from "@/lib/socials";

// The always-present "now playing" bar, repurposed as the contact strip
function PlayerBar() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 flex h-[72px] shrink-0 items-center justify-between gap-4 bg-black px-4 lg:static lg:h-[80px]">
      <div className="flex min-w-0 items-center gap-3 sm:w-[30%]">
        <img
          src="/this-is-2.jpg"
          alt=""
          className="h-14 w-14 shrink-0 rounded object-cover"
        />
        <div className="min-w-0 max-sm:hidden">
          <p className="truncate text-sm font-bold">Amlan Saikia</p>
          <p className="truncate text-xs text-spotify-silver">
            Software Developer
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {socials.map((social) =>
          social.name === "Email" ? (
            <a
              key={social.name}
              href={social.link}
              aria-label={social.name}
              title={social.name}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
            >
              <SocialIcon social={social} size={18} />
            </a>
          ) : (
            <a
              key={social.name}
              href={social.link}
              aria-label={social.name}
              title={social.name}
              className="circle-btn group"
              {...linkTarget(social.link)}
            >
              <SocialIcon social={social} size={18} />
            </a>
          )
        )}
      </div>

      <div className="flex justify-end sm:w-[30%]">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-outline max-sm:hidden"
        >
          <FileText size={14} />
          Resume
        </a>
      </div>
    </footer>
  );
}

export default PlayerBar;
