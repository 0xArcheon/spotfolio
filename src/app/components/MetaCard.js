import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function MetaCard({ name, client, startYear, link }) {
  const isLive = link.url && link.url !== "#";

  return (
    <section className="rounded-lg bg-spotify-surface p-4 shadow-card">
      <h2 className="mb-4 truncate text-base font-bold">{name}</h2>
      <dl className="space-y-3">
        <div>
          <dt className="text-sm text-spotify-silver">Client</dt>
          <dd className="text-base">{client}</dd>
        </div>
        <div>
          <dt className="text-sm text-spotify-silver">Started</dt>
          <dd className="text-base tabular-nums">{startYear}</dd>
        </div>
      </dl>
      <div className="mt-4">
        {isLive ? (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-light"
          >
            {link.text}
            <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="pill-outline pointer-events-none text-spotify-silver">
            {link.text}
          </span>
        )}
      </div>
    </section>
  );
}
