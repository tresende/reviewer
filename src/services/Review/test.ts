import UserReview from 'models/UserReview'
import { save } from '.'

describe('Sreview Service', () => {
  it('should execute request when function is called', async () => {
    const mock = jest.fn()
    window.fetch = mock
    process.env.NEXT_PUBLIC_API_URL = 'https://borc-9faa2-default-rtdb.firebaseio.com'

    const data: UserReview = {
      score: 1,
      text: 'text',
      twitter: false
    }
    await save(data)
    expect(mock).toBeCalledTimes(1)
    expect(mock).toBeCalledWith('https://borc-9faa2-default-rtdb.firebaseio.com/review.json', {
      body: '{"score":1,"text":"text","twitter":false}',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    })
  })
})
