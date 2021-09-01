import UserReview from 'models/UserReview'
import { timeout } from 'utils/timer'

const save = async (data: UserReview) => {
  await timeout(1000) //fake slow api
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export { save }
