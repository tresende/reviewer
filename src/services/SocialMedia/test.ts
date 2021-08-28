import { shareOnTwitter } from 'services/SocialMedia'

const mock = jest.fn()

describe('Review Service', () => {
  beforeEach(() => {
    window.open = mock
    jest.resetAllMocks()
  })

  it('should execute request when function is called', async () => {
    const realProcess = process
    global.process = { ...realProcess, browser: true }

    shareOnTwitter()
    expect(mock).toBeCalledTimes(1)
  })

  it('should execute request when function is called', async () => {
    const realProcess = process
    global.process = { ...realProcess, browser: false }

    shareOnTwitter()
    expect(mock).toBeCalledTimes(0)
  })
})
