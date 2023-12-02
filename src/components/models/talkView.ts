import { Talk, Track } from '@/generated/dreamkast-api.generated'
import { getTime } from '@/utils/time'

export class TalkView {
  readonly selectedTalk: Talk
  readonly selectedTrack: Track
  readonly allTalks: Talk[]
  readonly allTracks: Track[]

  constructor(talk: Talk, talks: Talk[], tracks: Track[]) {
    this.selectedTalk = talk
    this.allTalks = Array.from(talks).sort((a, b) => a.id - b.id)
    this.allTracks = Array.from(tracks).sort((a, b) => a.id - b.id)
    this.selectedTrack = this.allTracks.find(
      (track) => track.id === talk.trackId
    )!
  }

  private allTalksOnTimeTable(): Talk[] {
    return this.allTalks.filter((talk) => talk.showOnTimetable)
  }

  private talksInTrack(trackId: number): Talk[] {
    const talks = this.allTalksOnTimeTable().filter(
      (t) => t.trackId === trackId
    )
    return talks.sort((a, b) => getTime(a.startTime).diff(getTime(b.startTime)))
  }

  private talksLeftInTrack(trackId: number): Talk[] {
    const afterFrom = getTime(this.selectedTalk.startTime)
    return this.talksInTrack(trackId).filter(
      (t) => getTime(t.startTime) >= afterFrom
    )
  }

  // 同じTrackの全Talk
  talksInSameTrack(): Talk[] {
    return this.talksInTrack(this.selectedTalk.trackId)
  }

  // 同じTrackの残りのTalk
  talksLeftInSameTrack(): Talk[] {
    return this.talksLeftInTrack(this.selectedTalk.trackId)
  }

  // 次のSlotの全TrackのTalk
  talksInNextSlot(): Record<string, Talk> {
    // NOTE: 午前中にこのmethodを使うと、キーノートをしているTrack以外は全て午後イチのTalkが出力される
    return this.allTracks.reduce(
      (talks, track) => {
        const nextTalks = this.talksLeftInTrack(track.id)
        if (nextTalks.length > 0) {
          talks[track.name] = nextTalks[0]
        }
        return talks
      },
      {} as Record<string, Talk>
    )
  }
}
