import { config } from './config'

export function urlFor({
  originalUrl,
  width,
  height,
}: {
  originalUrl: string
  width: number
  height?: number
}) {
  return `${originalUrl}?w=${width}&${height ? `h=${height}` : ''}&fit=crop`
}
