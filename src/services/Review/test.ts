import UserReview from 'models/UserReview'
import { save } from '.'

describe('Sreview Service', () => {
  it('should execute request when function is called', async () => {
    const mock = jest.fn()
    window.fetch = mock

    const data: UserReview = {
      score: 1,
      text: 'text',
      twitter: false
    }
    await save(data)
    expect(mock).toBeCalledTimes(1)
    expect(mock).toBeCalledWith('http://thiagoresende.dev/api/review', {
      body: '{"score":1,"text":"text","twitter":false}',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      method: 'POST'
    })
  })
})
