export function trim(str: string, len: number) {
  return str.length > len ? str.substring(0, len - 3) + '...' : str
}
