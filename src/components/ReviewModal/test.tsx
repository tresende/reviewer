import ReviewModal from '.'
import { StarProps } from 'components/Stars/star'
import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

jest.mock('components/Stars/star', () => ({
  __esModule: true,
  default: function Mock(props: StarProps) {
    return <div onClick={props.onClick} data-testid={`star-${props.outline ? 'outline' : 'solid'}`} />
  }
}))

jest.mock('services/SocialMedia')

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

  it('shouldnt call service when text < 5 caracteres or more', async () => {
    const onSave = jest.fn()
    render(<ReviewModal onSave={onSave} />)

    screen.getAllByTestId('star-solid')[0].click()
    await userEvent.type(screen.getByRole('textbox'), '12345')
    await userEvent.click(screen.getByRole('checkbox'))
    screen.getByRole('button', { name: /Envie sua avaliação/i }).click()
    expect(onSave).toBeCalledTimes(1)
  })

  it('shouldnt log error when api is down', async () => {
    console.warn = jest.fn()
    const onSave = () => {
      throw new Error('FAKE ERROR')
    }

    render(<ReviewModal onSave={onSave} />)

    await userEvent.type(screen.getByRole('textbox'), 'FAIL TEST')
    screen.getByRole('button', { name: /Envie sua avaliação/i }).click()
    expect(console.warn).toBeCalledTimes(1)
  })
})
