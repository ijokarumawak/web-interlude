import { Optional } from '@/utils/types'
import { TalkView } from './models/talkView'
import { useContext, useEffect } from 'react'
import { PageCtx } from './models/pageContext'
import config from '@/config'
import { Speaker, Talk, Track } from '@/generated/dreamkast-api.generated'
import PageHeader from './PageHeader'
import { getTimeStr } from '@/utils/time'

type Props = { view: Optional<TalkView> }

export default function Page({ view }: Props) {
  const { goNextPage } = useContext(PageCtx)
  useEffect(() => {
    const cancel = setTimeout(goNextPage, config.transTimePage2 * 1000)
    return () => clearTimeout(cancel)
  }, [goNextPage])

  return (
    <div>
      <div className="h-[150px]">
        <PageHeader view={view} />
      </div>

      <div className="h-full">
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
  const talk = Object.values(nextTalks)[0]
  if (!talk) {
    return <></>
  }
  return (
    <div className="my-20">
      <div className="text-left w-[650px] bg-sky-500 pr-3 py-8">
        <div className="text-right text-white font-bold font-['Open_Sans'] text-3xl">
          UPCOMING SESSION
        </div>
      </div>
      <div className="basis-1/2 ml-[100px] mt-7 text-xl">
        {getTimeStr(talk.startTime)}-{getTimeStr(talk.endTime)} の各セッション
      </div>
      <div className="grid grid-cols-2 gap8">
        {view.allTracks.map((track) => {
          const talk = nextTalks[track.name]
          const speakers = view.speakersOf(talk.id)
          return (
            <Track
              key={track.id}
              talk={talk}
              track={track}
              speakers={speakers}
            />
          )
        })}
      </div>
    </div>
  )
}

type TrackProps = {
  talk: Talk
  track: Track
  speakers: Speaker[]
}

function Track({ talk, track, speakers }: TrackProps) {
  if (!talk || !track) {
    return <></>
  }
  const companies = new Set(speakers.map((s) => s.company))
  const avatarUrl = speakers[0].avatarUrl || '/cndt2023/trademark.png'
  return (
    <div className="flex flex-row items-center text-gray-800 w-[850px] h-[300px]">
      <div className="basis-1/3">
        <img
          src={avatarUrl}
          alt={'avatar'}
          className="w-[180px] h-[180px] ml-auto mr-5 rounded-full"
        />
      </div>
      <div className="basis-2/3">
        <div className="text-2xl my-5">Track {track.name}</div>
        <div className="text-xl font-bold">
          {talk.speakers.map((s) => s.name).join(', ')}
        </div>
        <div className="text-base mb-3">{Array.from(companies).join(', ')}</div>
        <div className="text-base my-3">{talk.title}</div>
      </div>
    </div>
  )
}

export function AvatarPreLoader({ view }: Props) {
  if (!view) {
    return <></>
  }
  const nextTalks = view.talksInNextSlot()
  const talk = Object.values(nextTalks)[0]
  if (!talk) {
    return <></>
  }
  return (
    <div className="hidden">
      {view.allTracks.map((track, i) => {
        const talk = nextTalks[track.name]
        const speakers = view.speakersOf(talk.id)
        const avatarUrl = speakers[0].avatarUrl || '/cndt2023/trademark.png'
        return <img key={i} rel="preload" src={avatarUrl} />
      })}
    </div>
  )
}
