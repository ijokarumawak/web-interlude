import { Optional } from '@/utils/types'
import { TalkView } from './models/talkView'
import { useContext } from 'react'
import { PageCtx } from './models/pageContext'
import VideoPlaylist from './VideoPlaylist'

type Props = { view: Optional<TalkView> }

export default function Page(_: Props) {
  const { goNextPage } = useContext(PageCtx)

  return <VideoPlaylist onEnded={goNextPage}></VideoPlaylist>
}
