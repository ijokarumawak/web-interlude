'use client'

import { useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'

const VideoPlaylist = dynamic(() => import('../../components/VideoPlaylist'))

export default function Page() {
  return (
    <div>
      <h1>Video playlist</h1>
      <VideoPlaylist onEnded={() => {}} />
    </div>
  )
}
