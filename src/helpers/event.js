import { SLUGS } from '../eventTypes'
import light from '../icons/light.svg'
import music from '../icons/music.svg'
import ideas from '../icons/ideas.svg'
import speaker from '../icons/speaker.svg'

const icons = {
  light,
  music,
  ideas,
  speaker
}

export function getEventTypeIcon (content) {
  const slug = SLUGS[content.type] || content.type
  return icons[slug]
}
