import React from 'react'

function NowPlaying() {
  return (
    <main className='nowplaying w-1/3'>
        <div className="title">Now Playing</div>
        <div className="coverart h-72">
            <img src="https://www.udiscovermusic.com/wp-content/uploads/2017/02/Coldplay-Parachutes-album-cover-web-optimised-820-1024x1024.jpg" alt="" 
            className='h-full'/>
        </div>
        <div className="song">
            <div className="songname"></div>
            <div className="artist"></div>
        </div>
    </main>
  )
}

export default NowPlaying