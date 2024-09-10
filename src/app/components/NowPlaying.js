import React from "react";

function NowPlaying() {
  return (
    <main className="nowplaying">
      <iframe
        className="relative z-10 rounded-lg"
        src="https://open.spotify.com/embed/track/3cUxncrTWSA9lhlQbuIwUY?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </main>
  );
}

export default NowPlaying;
