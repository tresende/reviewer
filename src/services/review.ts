import Config from 'config/api'
import UserReview from 'models/UserReview'

const save = async (data: UserReview) => {
  await fetch(`${Config.API_URL}/api/review`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export { save }
