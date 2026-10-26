"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, House } from "lucide-react";
import { resumeUrl } from "@/lib/socials";

function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex h-16 shrink-0 items-center justify-between gap-2 px-4">
      <div className="flex items-center gap-2">
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="hidden h-8 w-8 items-center justify-center rounded-full bg-black/70 text-spotify-silver transition-colors hover:text-white sm:inline-flex"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => router.forward()}
          aria-label="Go forward"
          className="hidden h-8 w-8 items-center justify-center rounded-full bg-black/70 text-spotify-silver transition-colors hover:text-white sm:inline-flex"
        >
          <ChevronRight size={20} />
        </button>
        <Link
          href="/"
          aria-label="Home"
          className="ml-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-spotify-elevated text-white transition-transform hover:scale-105"
        >
          <House size={22} />
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-light"
        >
          Resume
        </a>
        <Link
          href="/"
          aria-label="Profile"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-spotify-elevated transition-transform hover:scale-105"
        >
          <img
            src="/this-new.JPEG"
            alt=""
            className="h-8 w-8 rounded-full object-cover"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
