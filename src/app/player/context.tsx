import { createContext } from 'react'

export type SupportedContents = 'animation' | 'videoPlaylist'

export type ContentContextType = {
    content: SupportedContents
    setContent: React.Dispatch<React.SetStateAction<SupportedContents>>
}

export const ContentContext = createContext<ContentContextType>({
    content: 'animation',
    setContent: () => {}
})