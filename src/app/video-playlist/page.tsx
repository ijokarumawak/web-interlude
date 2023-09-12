'use client'

import { useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { OnEnded } from '../../components/VideoPlaylist'

const VideoPlaylist = dynamic(() => import('../../components/VideoPlaylist'))
const onEnded:OnEnded = () => {}

export default function Page() {
  return (
    <div>
      <h1>Video playlist</h1>
      <VideoPlaylist onEnded={() => {}} />
    </div>
  )
}
