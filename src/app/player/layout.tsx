'use client'

import { Inter } from 'next/font/google'
import React from 'react'
import { useState } from 'react'
import {
  ContentContextType,
  ContentContext,
  SupportedContents,
} from './context'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
  children,
  animation,
  videoPlaylist,
}: {
  children: React.ReactNode
  animation: React.ReactNode
  videoPlaylist: React.ReactNode
}) {
  const [content, setContent] = useState<SupportedContents>('animation')

  return (
    <>
      <ContentContext.Provider value={{ content, setContent }}>
        {children}
        {content == 'animation' ? animation : videoPlaylist}
      </ContentContext.Provider>
    </>
  )
}
