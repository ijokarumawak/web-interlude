'use client'

import React, { useRef, useEffect } from "react"
import videojs from "video.js"
import "video.js/dist/video-js.css"

const videojsPlaylistPlugin = require("videojs-playlist")
console.log('plugin', videojsPlaylistPlugin)

export type OnEnded = () => void
interface PlaylistProperties {
  onEnded: OnEnded
}

export const VideoPlaylist: React.FC<PlaylistProperties> = (props:PlaylistProperties) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const player:any = videojs(videoRef.current, {})
      console.log('player', player)

      player.playlist([{
        sources: [{
          src: 'https://dreamkast-public-bucket.s3.ap-northeast-1.amazonaws.com/videos/cm/modified_cm01-gmo.mp4',
          type: 'video/mp4'
        }],
        poster: 'https://media.w3.org/2010/05/sintel/poster.png'
      }, {
        sources: [{
          src: 'https://dreamkast-public-bucket.s3.ap-northeast-1.amazonaws.com/videos/cm/modified_cm02-line.mp4',
          type: 'video/mp4'
        }],
        poster: 'https://www.videojs.com/img/poster.jpg'
      }, {
        sources: [{
          src: 'https://dreamkast-public-bucket.s3.ap-northeast-1.amazonaws.com/videos/cm/modified_cm03-mirantis.mp4',
          type: 'video/mp4'
        }],
        poster: 'https://media.w3.org/2010/05/video/poster.png'
      }, {
        sources: [{
          src: 'https://dreamkast-public-bucket.s3.ap-northeast-1.amazonaws.com/videos/cm/modified_cm04-legalforce.mp4',
          type: 'video/mp4'
        }],
        poster: 'https://media.w3.org/2010/05/video/poster.png'
      }])
      
      console.log(player.playlist())

      player.on('ended', () => {
        if (player.playlist.next() === undefined) {
          props.onEnded()
        }
      })

    }
  });

  // Autoplay の設定、muted じゃないと正しく動かない場合もありそう。
  // 事前に手動で再生していたりするとうまくいくとの情報も。
  return (
    <div>
      <video autoPlay controls ref={videoRef} className="video-js" />
    </div>
  )
}

export default VideoPlaylist