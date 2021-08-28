import Config from 'config/api'
import UserReview from 'models/UserReview'
import { timeout } from 'utils/timer'

const save = async (data: UserReview) => {
  await timeout(3000) //fake slow api
  await fetch(`${Config.API_URL}/review.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export { save }
