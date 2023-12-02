const config = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
  eventAbbr: process.env.NEXT_PUBLIC_EVENT_ABBR ?? '',
  debug: !!process.env.NEXT_PUBLIC_DEBUG_MODE,
} as const

export default config
