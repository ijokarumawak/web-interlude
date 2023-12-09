'use client'

import { useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useContext } from 'react'
import { ContentContext } from '../context'
import { Playlist } from '../../../components/VideoPlaylist'

const VideoPlaylist = dynamic(() => import('../../../components/VideoPlaylist'))

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
  const { content, setContent } = useContext(ContentContext)

  return (
    <div className="w-[1280px] h-[720px]">
      <h1>Video playlist</h1>
      <p>
        複数のビデオを自動再生、最後のビデオが終わったら自動でアニメーションに切り替わる
      </p>
      <VideoPlaylist
        onEnded={() => {
          setContent('animation')
        }}
        playlist={playlist}
      />
      <p>
        次の finish
        をクリックすると、強制的にビデオを終了してアニメーションを再生
      </p>
      <button
        onClick={() => {
          setContent('animation')
        }}
      >
        finish
      </button>
    </div>
  )
}
