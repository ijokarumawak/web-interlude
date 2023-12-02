'use client'

import { useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Playlist } from '@/components/VideoPlaylist'

const VideoPlaylist = dynamic(() => import('../../components/VideoPlaylist'))

const playlist: Playlist = [
  {
    sources: [
      {
        src: 'https://dreamkast-public-bucket.s3.ap-northeast-1.amazonaws.com/videos/cm/modified_cm01-gmo.mp4',
        type: 'video/mp4',
      },
    ],
  },
  {
    sources: [
      {
        src: 'https://dreamkast-public-bucket.s3.ap-northeast-1.amazonaws.com/videos/cm/modified_cm02-line.mp4',
        type: 'video/mp4',
      },
    ],
  },
  {
    sources: [
      {
        src: 'https://dreamkast-public-bucket.s3.ap-northeast-1.amazonaws.com/videos/cm/modified_cm03-mirantis.mp4',
        type: 'video/mp4',
      },
    ],
  },
  {
    sources: [
      {
        src: 'https://dreamkast-public-bucket.s3.ap-northeast-1.amazonaws.com/videos/cm/modified_cm04-legalforce.mp4',
        type: 'video/mp4',
      },
    ],
  },
]

export default function Page() {
  return (
    <div>
      <h1>Video playlist</h1>
      <div className="w-[1280px] h-[720px]">
        <VideoPlaylist onEnded={() => {}} playlist={playlist}/>
      </div>
    </div>
  )
}
