'use client'

import { useRef, useEffect } from "react"
import dynamic from "next/dynamic"
import { useContext } from 'react'
import { ContentContext } from '../context'

const VideoPlaylist = dynamic(() => import("../../../components/VideoPlaylist"))

export default function Page() {
  const { content, setContent } = useContext(ContentContext)

  return (
    <div>
      <h1>Video playlist</h1>
      <p>複数のビデオを自動再生、最後のビデオが終わったら自動でアニメーションに切り替わる</p>
      <VideoPlaylist onEnded={() => {setContent('animation')}}/>
      <p>次の finish をクリックすると、強制的にビデオを終了してアニメーションを再生</p>
      <button onClick={() => {setContent('animation')}}>finish</button>
    </div>
  )
}
