import { Optional } from '@/utils/types'
import { TalkView } from './models/talkView'
import { PageCtx } from './models/pageContext'
import { useContext } from 'react'
import config from '@/config'
import { getTimeStr } from '@/utils/time'
import { trim } from '@/utils/utils'

type Props = { view: Optional<TalkView> }

export default function Header({ view }: Props) {
  const { now } = useContext(PageCtx)
  if (!view) {
    return <></>
  }
  const talk = view.talksLeftInSameTrack()[0]
  if (!talk) {
    return <div>No talks left.</div>
  }
  return (
    <div className="flex flex-row items-center h-full text-gray-600 bg-gray-100">
      <div className="basis-1/3">
        <div className="text-2xl  text-center">
          Track {view.selectedTrack.name}
        </div>
      </div>
      <div className="basis-1/3">
        <div className="text-lg text-center">
          {config.eventAbbr.toUpperCase()}
        </div>
        <div className="text-3xl text-center">{now.format('HH:mm:ss')}</div>
      </div>
      <div className="basis-1/12">
        <div className="text-lg text-center">Next</div>
      </div>
      <div className="basis-1/4 pr-4">
        <div className="text-lg text-center">
          {getTimeStr(talk.startTime)} - {getTimeStr(talk.endTime)}
        </div>
        <div className="text-base text-center mt-2">{trim(talk.title, 40)}</div>
      </div>
    </div>
  )
}
