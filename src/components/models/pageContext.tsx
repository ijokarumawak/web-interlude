import { PropsWithChildren, createContext, useCallback, useState } from 'react'

type PageCtxType = {
  current: number
  totalPage: number
  goNextPage: () => void
  setTotalPage: (totalPage: number) => void
}

export const PageCtx = createContext<PageCtxType>({
  current: 0,
  totalPage: 0,
  goNextPage: () => {},
  setTotalPage: () => {},
})

export const PageCtxProvider = (props: PropsWithChildren) => {
  const [current, setCurrent] = useState<number>(0)
  const [totalPage, setTotalPage] = useState<number>(0)

  const goNextPage = useCallback(() => {
    setCurrent((current + 1) % totalPage)
  }, [current, setCurrent, totalPage])

  const ctx: PageCtxType = {
    current,
    totalPage,
    goNextPage,
    setTotalPage,
  }

  return <PageCtx.Provider value={ctx}>{props.children}</PageCtx.Provider>
}
