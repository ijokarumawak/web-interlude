import { Optional } from '@/utils/types'
import { TalkView } from './models/talkView'
import { useContext } from 'react'
import { PageCtx } from './models/pageContext'
import VideoPlaylist, { Playlist } from './VideoPlaylist'

type Props = { view: Optional<TalkView> }

const playlist: Playlist = [
  {
    sources: [
      {
        src: 'https://dreamkast-public-bucket.s3.ap-northeast-1.amazonaws.com/videos/cm/modified_cm01-gmo.mp4',
        type: 'video/mp4',
      },
    ],
  },
  {
    sources: [
      {
        src: 'https://dreamkast-public-bucket.s3.ap-northeast-1.amazonaws.com/videos/cm/modified_cm02-line.mp4',
        type: 'video/mp4',
      },
    ],
  },
  {
    sources: [
      {
        src: 'https://dreamkast-public-bucket.s3.ap-northeast-1.amazonaws.com/videos/cm/modified_cm03-mirantis.mp4',
        type: 'video/mp4',
      },
    ],
  },
  {
    sources: [
      {
        src: 'https://dreamkast-public-bucket.s3.ap-northeast-1.amazonaws.com/videos/cm/modified_cm04-legalforce.mp4',
        type: 'video/mp4',
      },
    ],
  },
]

export default function Page(_: Props) {
  const { goNextPage } = useContext(PageCtx)

  return (
    <div className="w-full h-full">
      <VideoPlaylist onEnded={goNextPage} playlist={playlist}></VideoPlaylist>
    </div>
  )
}
