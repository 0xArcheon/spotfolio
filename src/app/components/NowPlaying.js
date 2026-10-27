import React from "react";

function NowPlaying() {
  return (
    <section>
      <h2 className="mb-3 text-base font-bold">On repeat</h2>
      <iframe
        title="Currently on repeat"
        className="rounded-lg shadow-card"
        src="https://open.spotify.com/embed/track/3cUxncrTWSA9lhlQbuIwUY?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </section>
  );
}

export default NowPlaying;
