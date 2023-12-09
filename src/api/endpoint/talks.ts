import { apiConfig } from '../config/apiConfig'
import { getRequest } from './request'

export interface Talk {
  id: number
  conferenceId: number
  trackId: number
  videoPlatform: string
  videoId: string
  title: string
  abstract: string
  speakers: Array<{ id: number; name: string }>
  dayId: number
  showOnTimetable: boolean
  startTime: string
  endTime: string
  talkDuration: number
  talkDifficulty: string
  talkCategory: string
  onAir: boolean
  documentUrl: string
  conferenceDayId: number
  conferenceDayDate: string
  startOffset: number
  endOffset: number
  actualStartTime: string
  actualEndTime: string
  presentationMethod: string
  slotNum: number
  allowShowingVideo: boolean
}

export async function getTalks(): Promise<Talk[]> {
  try {
    return await getRequest(apiConfig.talksEndpoint)
  } catch (error) {
    console.error('Error fetching talks data:', error)
    throw error
  }
}

export async function getTalk(talkId: string): Promise<Talk> {
  try {
    return await getRequest(apiConfig.talkEndpoint + talkId)
  } catch (error) {
    console.error('Error fetching talks data:', error)
    throw error
  }
}
