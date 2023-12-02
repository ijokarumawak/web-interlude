import { useGetApiV1TalksByTalkIdQuery } from "@/generated/dreamkast-api.generated"
import { useGetTalksAndTracks } from "@/hooks/useGetTalksAndTracks"
import { Optional } from "@/types"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Index = () => {
  const router = useRouter()
  const { talkId } = router.query

  const { talk, talks, tracks, isLoading } = useGetTalksAndTracks(talkId as string | null)


  return (
  <div>
    {isLoading && <div>loading...</div>}
    <h1>talk</h1>
    {talk && <div>{JSON.stringify(talk)}</div>}
    <br />
    <h1>talks</h1>
    {talks && <div>{JSON.stringify(talks)}</div>}
    <br />
    <h1>tracks</h1>
    {tracks && <div>{JSON.stringify(tracks)}</div>}
  </div>
  )
}

export default Index
