'use client'

import dynamic from "next/dynamic"

const PixiApp = dynamic(() => import("../../components/PixiApp"), { ssr: false })

export default function Anim() {
  return (
    <div>
      {/* <h1> NextJs</h1> */}
      <head>
      <link rel="stylesheet" href="https://use.typekit.net/egz6rzg.css"></link>
      </head>
      <PixiApp onEnded={() => {}}/>
    </div>
  )
}
