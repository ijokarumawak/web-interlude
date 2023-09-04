'use client'

import { useRef, useEffect } from "react"
import videojs from "video.js"
import "video.js/dist/video-js.css"

const videojsPlaylistPlugin = require("videojs-playlist")
console.log('plugin', videojsPlaylistPlugin)

export default function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const player:any = videojs(videoRef.current, {})
      console.log('player', player)

      player.playlist([{
        sources: [{
          src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
          type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/sintel/poster.png'
      }, {
        sources: [{
          src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
          type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/bunny/poster.png'
      }, {
        sources: [{
          src: 'http://vjs.zencdn.net/v/oceans.mp4',
          type: 'video/mp4'
        }],
        poster: 'http://www.videojs.com/img/poster.jpg'
      }, {
        sources: [{
          src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
          type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/video/poster.png'
      }])
      
      // Play through the playlist automatically.
      player.playlist.autoadvance(0)

    }
  });

  return (
    <div>
      <video controls ref={videoRef} className="video-js" />
    </div>
  )
}
