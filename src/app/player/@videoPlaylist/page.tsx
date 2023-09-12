'use client'

import { useRef, useEffect } from "react"
import dynamic from "next/dynamic"
import { useContext } from 'react'
import { ContentContextType, ContentContext } from '../context'

const VideoPlaylist = dynamic(() => import("../../../components/VideoPlaylist"))

export default function Page() {
  const { content, setContent } = useContext(ContentContext)

  return (
    <div>
      <h1>Video playlist</h1>
      <VideoPlaylist onEnded={() => {setContent('animation')}}/>
      <p>次の finish をクリックするビデオを終了してとアニメーションを再生</p>
      <button onClick={() => {setContent('animation')}}>finish</button>
    </div>
  )
}
