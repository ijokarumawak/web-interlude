import { Optional } from '@/utils/types'
import { TalkView } from './models/talkView'
import { useContext, useEffect } from 'react'
import { PageCtx } from './models/pageContext'
import config from '@/config'
import { getTimeStr } from '@/utils/time'
import { Talk, Track } from '@/generated/dreamkast-api.generated'

type Props = { view: Optional<TalkView> }

export default function Page({ view }: Props) {
  const { goNextPage } = useContext(PageCtx)
  useEffect(() => {
    setTimeout(goNextPage, config.transTimePage2 * 1000)
  }, [goNextPage])

  return (
    <div>
      <div className="h-[120px]">
        <Header view={view} />
      </div>

      <div className="h-[600px]">
        <Body view={view} />
      </div>
    </div>
  )
}

function Header({ view }: Props) {
  const { now } = useContext(PageCtx)
  if (!view) {
    return <></>
  }
  const talk = view.selectedTalk
  return (
    <div className="flex flex-row items-center h-full text-gray-600 bg-gray-100">
      <div className="basis-1/3">
        <div className="text-2xl  text-center">Track {view.selectedTrack.name}</div>
      </div>
      <div className="basis-1/3">
        <div className="text-lg text-center">{config.eventAbbr.toUpperCase()}</div>
        <div className="text-3xl text-center">{now.format('HH:mm:ss')}</div>
      </div>
      <div className="basis-1/12">
        <div className="text-xl text-center">Next</div>
      </div>
      <div className="basis-1/4 pr-4">
        <div className="text-lg text-center">{getTimeStr(talk.startTime)} - {getTimeStr(talk.endTime)}</div>
        <div className="text-lg text-center">{trim(talk.title, 40)}</div>
      </div>
    </div>
  )
}

function Body({ view }: Props) {
  if (!view) {
    return <></>
  }
  const talk = view.selectedTalk
  const nextTalks = view.talksInNextSlot()
  return (
    <div className="py-6">
      <div className="text-left w-[450px] bg-sky-500 pr-2 py-6">
        <div className="text-right text-white font-bold font-['Open_Sans'] text-3xl">UPCOMING SESSION</div>
      </div>
      <div className="grid grid-cols-2 gap8">
        {view.allTracks.map(track => {
          const talk = nextTalks[track.name]
          return (
            <Track key={track.id} talk={talk} track={track} />
          )
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
    <div className="flex flex-row items-center text-gray-600 w-[600px] h-[250px]">
      <div className="basis-1/3">
        <img src={"/cndt2023/trademark.png"} className="w-[120px] h-[120px] ml-auto mr-5"/>
      </div>
      <div className="basis-2/3">
        <div className="text-2xl my-3">Track {track.name}</div>
        <div className="text-xl my-3">{talk.speakers.map(s => s.name).join(", ")}</div>
        <div className="text-xl my-3">{talk.title}</div>
      </div>
    </div>
  )
}

function trim(str: string, len: number) {
  return str.length > len ? str.substring(0, len - 3) + '...' : str
}
