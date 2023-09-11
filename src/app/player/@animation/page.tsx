'use client'

import dynamic from 'next/dynamic'
import { useContext } from 'react'
import { ContentContextType, ContentContext } from '../context'

const PixiApp = dynamic(() => import('../../../components/PixiApp'), { ssr: false })

export default function Page() {
  const { content, setContent } = useContext(ContentContext)
  
  return (
    <div>
      <h1>Pixi App in NextJs</h1>
      <PixiApp />
      <p>次の finish をクリックするとアニメーションを終了してビデオを再生</p>
      <button onClick={() => {setContent('videoPlaylist')}}>finish</button>
    </div>
  )
}
