import React from "react";
import * as motion from "framer-motion/client";
import { easeOut } from "framer-motion";

function NowPlaying() {
  return (
    <motion.main
      initial={{ opacity: 0, x: +100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
      className="nowplaying"
    >
      <iframe
        className="relative z-10 rounded-lg"
        src="https://open.spotify.com/embed/track/3cUxncrTWSA9lhlQbuIwUY?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </motion.main>
  );
}

export default NowPlaying;
