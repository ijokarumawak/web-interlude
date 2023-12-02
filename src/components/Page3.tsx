import { Optional } from '@/utils/types'
import { TalkView } from './models/talkView'
import { use, useContext, useEffect, useState } from 'react'
import { PageCtx } from './models/pageContext'
import config from '@/config'

type Props = { view: Optional<TalkView> }

const images = [
  "/cndt2023/info1.png",
  "/cndt2023/info2.png",
  "/cndt2023/info3.png",
]

export default function Page({ view }: Props) {
  const { goNextPage } = useContext(PageCtx)
  const { count } = useCounter(images.length)
  useEffect(() => {
    if (count >= images.length) {
      goNextPage()
    }
  }, [count, goNextPage])

  return (
    <img src={images[count]} className="w-full h-full"/>
  )
}

const useCounter = (total: number) => {
  const [count, setCount] = useState<number>(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1)
    }, config.transTimePage3 * 1000 / total)
    return () => clearInterval(timer)
  }, [])
  return { count }
}