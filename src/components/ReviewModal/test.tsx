import userEvent from '@testing-library/user-event'
import { StarProps } from 'components/Stars/star'
import UserReview from 'models/UserReview'
import { render, screen } from 'utils/test-utils'
import ReviewModal from '.'

const mockService = jest.fn()
jest.mock('services/review', () => ({
  save: function Mock(data: UserReview) {
    if (data.text === 'FAIL TEST') throw Error('ERROR')
    mockService()
  }
}))

jest.mock('components/Stars/star', () => ({
  __esModule: true,
  default: function Mock(props: StarProps) {
    return <div onClick={props.onClick} data-testid={`star-${props.outline ? 'outline' : 'solid'}`} />
  }
}))

describe('<ReviewModal />', () => {
  it('should render component correctly', () => {
    const { container } = render(<ReviewModal />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shouldnt call service when text > 5 caracteres', async () => {
    render(<ReviewModal />)

    await userEvent.type(screen.getByRole('textbox'), '1234')
    screen.getByRole('button', { name: /Envie sua avaliação/i }).click()

    expect(mockService).toBeCalledTimes(0)
  })

  it('shouldnt call service when text < 5 caracteres or more', async () => {
    render(<ReviewModal />)

    screen.getAllByTestId('star-solid')[0].click()
    await userEvent.type(screen.getByRole('textbox'), '12345')
    screen.getByRole('button', { name: /Envie sua avaliação/i }).click()
    expect(mockService).toBeCalledTimes(1)
  })

  it('shouldnt log error when api is down', async () => {
    console.warn = jest.fn()
    render(<ReviewModal />)

    await userEvent.type(screen.getByRole('textbox'), 'FAIL TEST')
    screen.getByRole('button', { name: /Envie sua avaliação/i }).click()
    expect(console.warn).toBeCalledTimes(1)
  })
})
