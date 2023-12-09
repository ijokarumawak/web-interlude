import { now } from '@/utils/time'
import { Dayjs } from 'dayjs'
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

type PageCtxType = {
  current: number
  totalPage: number
  goNextPage: () => void
  setTotalPage: (totalPage: number) => void
  now: Dayjs
}

export const PageCtx = createContext<PageCtxType>({
  current: 0,
  totalPage: 0,
  goNextPage: () => {},
  setTotalPage: () => {},
  now: now(),
})

export const PageCtxProvider = (props: PropsWithChildren) => {
  const [current, setCurrent] = useState<number>(0)
  const [totalPage, setTotalPage] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<Dayjs>(now())

  const goNextPage = useCallback(() => {
    setCurrent((current + 1) % totalPage)
  }, [current, setCurrent, totalPage])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(now())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const ctx: PageCtxType = {
    current,
    totalPage,
    goNextPage,
    setTotalPage,
    now: currentTime,
  }

  return <PageCtx.Provider value={ctx}>{props.children}</PageCtx.Provider>
}
