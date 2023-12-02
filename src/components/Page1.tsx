import { Optional } from '@/utils/types'
import { TalkView } from './models/talkView'
import { useContext, useEffect } from 'react'
import { PageCtx } from './models/pageContext'
import config from '@/config'

type Props = { view: Optional<TalkView> }

export default function Page({ view }: Props) {
  const { goNextPage } = useContext(PageCtx)
  useEffect(() => {
    setTimeout(goNextPage, config.transTimePage1 * 1000)
  }, [goNextPage])

  return (
    <div className="max-w- mx-auto bg-white shadow-md overflow-hidden">
      <div className="flex justify-between items-center bg-gray-200 p-4">
        <div className="text-lg text-gray-700">2023/08/03</div>
        <div className="text-2xl text-gray-800">PAGE 1</div>
      </div>

      <div className="p-6 border-b border-gray-300">
        <div className="text-lg text-gray-600">18:00 - 18:40</div>
        <div className="text-xl text-gray-800 my-2">テストのタイトル</div>
        <div className="text-lg font-bold">Test Taro</div>
        <div className="mt-4">
          <div className="text-sm text-gray-600">N/A</div>
          <div className="text-sm text-gray-600">
            PoC(検証), Production(本番環境)
          </div>
          <div className="text-sm text-gray-600">
            app-developer - アプリケーション開発, operator/sys-admin -
            運用管理/システム管理
          </div>
        </div>
      </div>
    </div>
  )
}
