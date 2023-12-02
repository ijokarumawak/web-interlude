import config from '@/config'
import {
  useGetApiV1TalksByTalkIdQuery,
  useGetApiV1TalksQuery,
  useGetApiV1TracksQuery,
} from '@/generated/dreamkast-api.generated'
import { Optional } from '@/types'
import { useEffect, useState } from 'react'

export const useGetTalksAndTracks = (talkId: Optional<string>) => {

  const talkResult = useGetTalk(talkId)
  const talksResult = useGetTalks(talkResult.data?.conferenceDayId)
  const tracksResult = useGetTracks()

  return {
    isLoading: talkResult.isLoading || talksResult.isLoading || tracksResult.isLoading,
    talk: talkResult.data,
    talks: talksResult.data,
    tracks: tracksResult.data,
  }
}

export const useGetTalk = (talkId: Optional<string>) => {
  const [_, setError] = useState()

  const { data, isLoading, isError, error } = useGetApiV1TalksByTalkIdQuery(
    { talkId: talkId! },
    { skip: !talkId}
  )

  useEffect(() => {
    if (isError) {
      setError(() => {
        throw error
      })
    }
  }, [data, isLoading, isError])

  return {
    data,
    isLoading,
  }
}

export const useGetTalks = (conferenceDayId: Optional<number>) => {
  const [_, setError] = useState()

  const { data, isLoading, isError, error } = useGetApiV1TalksQuery(
    {
      eventAbbr: config.eventAbbr,
      conferenceDayIds: `${conferenceDayId}`,
    },
    { skip: !conferenceDayId },
  )

  useEffect(() => {
    if (isError) {
      setError(() => {
        throw error
      })
    }
  }, [data, isLoading, isError])

  return {
    data,
    isLoading,
  }
}

export const useGetTracks = () => {
  const [_, setError] = useState()

  const { data, isLoading, isError, error } = useGetApiV1TracksQuery(
    {
      eventAbbr: config.eventAbbr,
    },
  )

  useEffect(() => {
    if (isError) {
      setError(() => {
        throw error
      })
    }
  }, [data, isLoading, isError])

  return {
    data,
    isLoading,
  }
}
