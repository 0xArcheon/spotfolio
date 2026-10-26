"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Library, Pin } from "lucide-react";
import { projects } from "@/lib/db";

function LibraryRow({ href, image, round, title, subtitle, active, pinned }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-spotify-elevated ${
        active ? "bg-spotify-elevated" : ""
      }`}
    >
      <img
        src={image}
        alt=""
        className={`h-12 w-12 shrink-0 object-cover ${
          round ? "rounded-full" : "rounded"
        }`}
      />
      <div className="min-w-0">
        <p
          className={`truncate text-base ${
            active ? "text-spotify-green" : "text-white"
          }`}
        >
          {title}
        </p>
        <p className="flex items-center gap-1 truncate text-sm text-spotify-silver">
          {pinned && (
            <Pin
              size={12}
              className="shrink-0 rotate-45 fill-spotify-green text-spotify-green"
            />
          )}
          {subtitle}
        </p>
      </div>
    </Link>
  );
}

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="panel hidden flex-col overflow-hidden lg:flex">
      <div className="flex items-center gap-3 px-4 pb-2 pt-4 font-bold text-spotify-silver">
        <Library size={24} />
        Your Library
      </div>
      <div className="flex gap-2 px-4 py-2">
        <span className="pill-dark" aria-pressed="true">
          Projects
        </span>
      </div>
      <nav className="panel-scroll flex-1 px-2 pb-2">
        <LibraryRow
          href="/"
          image="/this-new.JPEG"
          round
          title="Amlan Saikia"
          subtitle="Profile"
          active={pathname === "/"}
          pinned
        />
        {projects.map((project) => (
          <LibraryRow
            key={project.projectId}
            href={`/projects/${project.projectId}`}
            image={project.logo.url}
            title={project.name}
            subtitle={`Project · ${project.client}`}
            active={pathname === `/projects/${project.projectId}`}
          />
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
