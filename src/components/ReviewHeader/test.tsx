import { render, screen } from 'utils/test-utils'
import ReviewHeader from '.'

jest.mock('components/Stars', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Stars" />
  }
}))

describe('<ReviewHeader />', () => {
  it('should render component correctly', () => {
    const onReview = jest.fn()
    const { container } = render(<ReviewHeader company="BORC" location="BH" onReview={onReview} />)

    expect(screen.getByText('BORC')).toBeInTheDocument()
    expect(screen.getByText('BH')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should execute callback when click in review', () => {
    const onReview = jest.fn()
    render(<ReviewHeader company="BORC" location="BH" onReview={onReview} />)

    screen.getByRole('button').click()
    expect(onReview).toBeCalledTimes(1)
  })
})
