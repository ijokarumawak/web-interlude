import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'
import { useGetTalksAndTracks } from '@/components/hooks/useGetTalksAndTracks'
import { PageCtx, PageCtxProvider } from '@/components/models/pageContext'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

function Pages() {
  const router = useRouter()
  const { talkId } = router.query

  const { current, setTotalPage, goNextPage } = useContext(PageCtx)
  const { isLoading, view } = useGetTalksAndTracks(talkId as string | null)

  const pages = [
    <Page1 key={1} view={view} />,
    <Page2 key={2} view={view} />,
    <Page3 key={3} view={view} />,
    <Page4 key={4} view={view} />,
  ]
  useEffect(() => {
    setTotalPage(pages.length)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <></>
  }
  return (
    <>
      <div className="w-[1280px] h-[720px]">{pages[current]}</div>
      <button onClick={goNextPage} className="font-bold py-0 px-4 mx-2 my-2 rounded bg-blue-300">Go Next</button>
    </>
  )
}

export default function Index() {
  return (
    <PageCtxProvider>
      <Pages />
    </PageCtxProvider>
  )
}
