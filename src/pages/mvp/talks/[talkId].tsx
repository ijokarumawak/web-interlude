import { useGetTalksAndTracks } from '@/components/hooks/useGetTalksAndTracks'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  const { talkId } = router.query

  const { isLoading, view } = useGetTalksAndTracks(talkId as string | null)

  return (
    <div>
      {isLoading && <div>loading...</div>}
      <h1>talk</h1>
      {view && <div>{JSON.stringify(view.selectedTalk)}</div>}
      <br />
      <h1>next talks</h1>
      {view && <div>{JSON.stringify(view.talksLeftInSameTrack())}</div>}
      <br />
      <h1>tracks</h1>
      {view && <div>{JSON.stringify(view.talksInNextSlot())}</div>}
    </div>
  )
}

export default Index
