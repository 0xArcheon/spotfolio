"use client";
import * as motion from "framer-motion/client";
import useDominantColor from "@/lib/useDominantColor";

// Spotify-style page header: artwork drives the tint, which fades into
// #121212 behind the first part of the page body (`children`).
export default function PageHeader({
  image,
  imageAlt = "",
  round = false,
  label,
  title,
  meta,
  children,
}) {
  const rgb = useDominantColor(image)
    .map((v) => Math.round(v * 0.6))
    .join(",");

  return (
    <div>
      <header
        className="flex items-end gap-6 px-6 pb-6 pt-16 max-md:flex-col max-md:items-center max-md:pt-8 max-md:text-center"
        style={{
          background: `linear-gradient(rgb(${rgb}), rgba(${rgb},0.6))`,
          transition: "background 0.6s ease",
        }}
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={imageAlt}
          className={`h-48 w-48 shrink-0 object-cover shadow-heavy max-sm:h-40 max-sm:w-40 lg:h-52 lg:w-52 ${
            round ? "rounded-full" : "rounded-md"
          }`}
        />
        <div className="min-w-0">
          <p className="text-sm font-bold">{label}</p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-3 mt-1 text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight"
          >
            {title}
          </motion.h1>
          <div className="flex flex-wrap items-center gap-x-1 text-sm text-white/80 max-md:justify-center">
            {meta}
          </div>
        </div>
      </header>
      <div
        className="px-6 pb-10 pt-6 max-sm:px-4"
        style={{
          background: `linear-gradient(rgba(${rgb},0.35), transparent 232px)`,
          transition: "background 0.6s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function Dot() {
  return <span aria-hidden="true">•</span>;
}
