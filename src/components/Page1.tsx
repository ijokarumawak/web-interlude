import { Optional } from '@/utils/types'
import { TalkView } from './models/talkView'
import { useContext, useEffect } from 'react'
import { PageCtx } from './models/pageContext'
import config from '@/config'
import { getTimeStr } from '@/utils/time'
import { trim } from '@/utils/utils'
import PageHeader from './PageHeader'

type Props = { view: Optional<TalkView> }

export default function Page({ view }: Props) {
  const { goNextPage } = useContext(PageCtx)
  useEffect(() => {
    setTimeout(goNextPage, config.transTimePage1 * 1000)
  }, [goNextPage])

  return (
    <div>
      <div className="h-[120px]">
        <PageHeader view={view} />
      </div>

      <div className="h-[600px]">
        <div className="flex flex-row h-full">
          <div className="basis-2/3">
            <Body view={view} />
          </div>
          <div className="basis-1/3">
            <Side view={view} />
          </div>
        </div>
      </div>
    </div>
  )
}


function Body({ view }: Props) {
  const { now } = useContext(PageCtx)
  if (!view) {
    return <></>
  }
  const talk = view.selectedTalk
  return (
    <div className="py-6">
      <div className="text-left w-[450px] bg-sky-500 pr-2 py-6">
        <div className="text-right text-white font-bold font-['Open_Sans'] text-3xl">UPCOMING SESSION</div>
      </div>
      <div className="top-[50px] left-[100px] w-[600px] relative longshadow">
        <div className="text-center py-1 text-xl text-white bg-slate-400">{getTimeStr(talk.startTime)} - {getTimeStr(talk.endTime)}</div>
        <div className="text-center text-2xl mt-8 mb-5 font-bold">{talk.title}</div>
        <div className="text-center text-lg font-bold m-3">{talk.speakers.map(s => s.name).join(", ")}</div>
        <div className="p-3">
          <div className="text-sm text-gray-600 mt-1">
            <span className="mr-5">Category: {talk.talkCategory}</span>
            <span>Difficulty: {talk.talkDifficulty}</span>
          </div>
          <div className="text-sm text-gray-600 mt-1">Abstract: {trim(talk.abstract, 200)}</div>
        </div>
      </div>
    </div>
  )
}

function Side({ view }: Props) {
  const { now } = useContext(PageCtx)
  if (!view) {
    return <></>
  }
  return (
    <div className="p-6">
      {view.talksInSameTrack().map((talk) => (
        <div className="text-right w-[500px] bg-lime-500 px-2 py-1 my-2">
          <div className="flex flex-row">
            <div className="text-left basis-1/2 text-white text-xs">{getTimeStr(talk.startTime)} - {getTimeStr(talk.endTime)}</div>
            <div className="basis-1/2 text-white text-xs">{talk.speakers.map(t => t.name).join(", ")}</div>
          </div>
          <div className="text-center text-white text-sm h-[40px] font-bold">{trim(talk.title, 80)}</div>
        </div>
      ))}
    </div>
  )
}
