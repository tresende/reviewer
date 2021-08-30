import UserReview from 'models/UserReview'
import { save } from '.'

describe('Sreview Service', () => {
  it('should execute request when function is called', async () => {
    const mock = jest.fn()
    window.fetch = mock
    process.env.NEXT_PUBLIC_API_URL = 'https://thiagoresende.dev'

    const data: UserReview = {
      score: 1,
      text: 'text',
      twitter: false
    }
    await save(data)
    expect(mock).toBeCalledTimes(1)
    expect(mock).toBeCalledWith('https://thiagoresende.dev/api/review', {
      body: '{"score":1,"text":"text","twitter":false}',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    })
  })
})
