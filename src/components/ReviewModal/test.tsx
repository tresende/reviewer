import userEvent from '@testing-library/user-event'

import ReviewModal from '.'
import * as ReviewService from 'services/Review'
import * as SocialMediaService from 'services/SocialMedia'
import * as Timer from 'utils/timer'

import { StarProps } from 'components/Stars/star'
import { render, screen, waitFor } from 'utils/test-utils'

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
    const onSave = jest.fn()
    render(<ReviewModal onSave={onSave} />)

    await userEvent.type(screen.getByRole('textbox'), '1234')
    screen.getByRole('button', { name: /Envie sua avaliação/i }).click()

    expect(onSave).toBeCalledTimes(0)
  })

  it('should call service when text < 5 caracteres or more', async () => {
    const onSave = jest.fn()
    render(<ReviewModal onSave={onSave} />)

    screen.getAllByTestId('star-solid')[0].click()
    await userEvent.type(screen.getByRole('textbox'), '12345')
    await userEvent.click(screen.getByRole('checkbox'))
    screen.getByRole('button', { name: /Envie sua avaliação/i }).click()

    waitFor(() => {
      expect(onSave).toBeCalledTimes(1)
    })
  })

  it('should log error when api is down', async () => {
    const onSave = jest.fn()
    const socialMediaServiceMock = jest.spyOn(SocialMediaService, 'shareOnTwitter')
    const TimerMock = jest.spyOn(Timer, 'timeout')
    TimerMock.mockImplementation(jest.fn())
    const reviewService = jest.spyOn(ReviewService, 'save')
    reviewService.mockImplementation(() => {
      throw new Error('FAKE ERROR')
    })

    render(<ReviewModal onSave={onSave} />)
    await userEvent.type(screen.getByRole('textbox'), 'FAIL TEST')
    await userEvent.click(screen.getByRole('checkbox'))
    screen.getByRole('button', { name: /Envie sua avaliação/i }).click()

    waitFor(() => {
      expect(screen.findByText('Ocorreu um erro!')).toBeInTheDocument()
      expect(socialMediaServiceMock).toBeCalledTimes(1)
    })
  })
})
