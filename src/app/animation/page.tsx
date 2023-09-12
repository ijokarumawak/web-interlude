'use client'

import dynamic from "next/dynamic"

const PixiApp = dynamic(() => import("../../components/PixiApp"), { ssr: false })

export default function Anim() {
  return (
    <div>
      <h1>Pixi App in NextJs</h1>
      <PixiApp onEnded={() => {}}/>
    </div>
  )
}
