import React from "react";

function NowPlaying() {
  return (
    <main className="nowplaying">
      {/* <div className="title">Now Playing</div>
      <div className="coverart h-72">
        <img
          src="https://www.udiscovermusic.com/wp-content/uploads/2017/02/Coldplay-Parachutes-album-cover-web-optimised-820-1024x1024.jpg"
          alt=""
          className="h-full"
        />
      </div>
      <div className="song">
        <div className="songname"></div>
        <div className="artist"></div>
      </div> */}
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
