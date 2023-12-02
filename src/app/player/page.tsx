'use client'

import { useContext } from 'react'
import { ContentContext } from './context'

export default function Page() {
  const { content, setContent } = useContext(ContentContext)

  return (
    <div>
      <link rel="stylesheet" href="https://use.typekit.net/egz6rzg.css"></link>
      <h1 className={`mb-3 text-2xl font-semibold`}>player</h1>
      <p>
        Next.js の{' '}
        <a href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes">
          Parallel Routes
        </a>
        を使い動的にアニメーションとビデオを切り替えるサンプル
      </p>
      <p>ただいま {content} を表示中...</p>
    </div>
  )
}
