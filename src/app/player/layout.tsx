import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
  children,
  animation,
  videoPlaylist
}: {
  children: React.ReactNode
  animation: React.ReactNode
  videoPlaylist: React.ReactNode
}) {
  return (
    <>
      {children}
      {animation}
      {videoPlaylist}
    </>
  )
}
