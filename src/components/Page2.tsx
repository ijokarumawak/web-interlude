import { Optional } from '@/utils/types'
import { TalkView } from './models/talkView'
import { useContext, useEffect } from 'react'
import { PageCtx } from './models/pageContext'
import config from '@/config'
import { Talk, Track } from '@/generated/dreamkast-api.generated'
import PageHeader from './PageHeader'
import { getTimeStr } from '@/utils/time'

type Props = { view: Optional<TalkView> }

export default function Page({ view }: Props) {
  const { goNextPage } = useContext(PageCtx)
  useEffect(() => {
    setTimeout(goNextPage, config.transTimePage2 * 1000)
  }, [goNextPage])

  return (
    <div>
      <div className="h-[120px]">
        <PageHeader view={view} />
      </div>

      <div className="h-[600px]">
        <Body view={view} />
      </div>
    </div>
  )
}

function Body({ view }: Props) {
  if (!view) {
    return <></>
  }
  const nextTalks = view.talksInNextSlot()
  const {startTime, endTime} = Object.values(nextTalks)[0]
  return (
    <div className="py-6">
      <div className="basis-1/2 text-left w-[450px] bg-sky-500 pr-2 py-6">
        <div className="text-right text-white font-bold font-['Open_Sans'] text-3xl">
          UPCOMING SESSION
        </div>
      </div>
      <div className="basis-1/2 ml-[70px] mt-7 text-2xl">
        {getTimeStr(startTime)}-{getTimeStr(endTime)} の各セッション
      </div>
      <div className="grid grid-cols-2 gap8">
        {view.allTracks.map((track) => {
          const talk = nextTalks[track.name]
          return <Track key={track.id} talk={talk} track={track} />
        })}
      </div>
    </div>
  )
}

type TrackProps = {
  talk: Talk
  track: Track
}

function Track({ talk, track }: TrackProps) {
  if (!talk || !track) {
    return <></>
  }
  return (
    <div className="flex flex-row items-center text-gray-600 w-[600px] h-[200px]">
      <div className="basis-1/3">
        <img
          src={'/cndt2023/trademark.png'}
          alt={'avator'}
          className="w-[120px] h-[120px] ml-auto mr-5"
        />
      </div>
      <div className="basis-2/3">
        <div className="text-2xl my-3">Track {track.name}</div>
        <div className="text-xl my-3">
          {talk.speakers.map((s) => s.name).join(', ')}
        </div>
        <div className="text-xl my-3">{talk.title}</div>
      </div>
    </div>
  )
}
