'use client'

import { useRef, useEffect } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default function Page() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videojs(videoRef.current, {
        sources: [
          {
            src: 'https://stream.mux.com/GJjLF93MGEmq4VfidIdZ4oMMAJRhEjSQ.m3u8',
            type: 'application/x-mpegURL',
          },
        ],
      })
    }
  })

  return (
    <div>
      <video controls ref={videoRef} className="video-js" />
    </div>
  )
}
