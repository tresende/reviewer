import { TWITTER_TEXT } from 'utils/constants'

const shareOnTwitter = async () => {
  if (process.browser) {
    const url = `https://twitter.com/intent/tweet?text=${TWITTER_TEXT} ${window.location.href}`
    const newTab = window.open(url, '_blank')
    newTab?.focus()
  }
}

export { shareOnTwitter }
