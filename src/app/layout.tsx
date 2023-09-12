import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web Interlude PoC',
  description: 'Test core requirements for the web interlude.',
}

export default function RootLayout({
  children,
  folder1
}: {
  children: React.ReactNode
  folder1: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
