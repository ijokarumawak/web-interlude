import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.tz.setDefault('Asia/Tokyo')

export function getTimeStr(time: string): string {
  return dayjs(time).tz().format('HH:mm')
}

export function getTime(time: string) {
  return dayjs(time).tz()
}
