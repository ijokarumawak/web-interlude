const config = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
  eventAbbr: process.env.NEXT_PUBLIC_EVENT_ABBR ?? '',
  transTimePage1: parseInt(process.env.NEXT_PUBLIC_TRANS_TIME_PAGE1 ?? '24'),
  transTimePage2: parseInt(process.env.NEXT_PUBLIC_TRANS_TIME_PAGE2 ?? '24'),
  transTimePage3: parseInt(process.env.NEXT_PUBLIC_TRANS_TIME_PAGE3 ?? '24'),
  debug: !!process.env.NEXT_PUBLIC_DEBUG_MODE,
} as const

export default config
