import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'
import { useGetTalksAndTracks } from '@/components/hooks/useGetTalksAndTracks'
import config from '@/config'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Index() {
  const router = useRouter()
  const { talkId } = router.query

  const { isLoading, view } = useGetTalksAndTracks(talkId as string | null)

  const pages = [
    <Page1/>,
    <Page2/>,
    <Page3/>,
    <Page4/>,
  ]
  const count = useViewCounter(pages.length)

  if (isLoading) {
    return <></>
  }
  return (
    <div className="w-[800px] h-[450px]">
      {pages[count]}
    </div>
  )
}

function useViewCounter(numPages: number) {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count + 1) % numPages)
    }, config.transitionTime * 1000)
    return () => clearInterval(timer)
  }, [count])

  return count
}