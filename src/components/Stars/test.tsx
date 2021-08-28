import { render, screen } from 'utils/test-utils'
import Stars from '.'
import Star, { StarProps } from './star'

jest.mock('components/Stars/star', () => ({
  __esModule: true,
  default: function Mock(props: StarProps) {
    return <div onClick={props.onClick} data-testid={`star-${props.outline ? 'outline' : 'solid'}`} />
  }
}))

describe('<Stars />', () => {
  it('should render component correctly', () => {
    const { container } = render(<Stars />)
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getAllByTestId('star-solid')).toHaveLength(1)
  })

  it('should render 3 starts', () => {
    render(<Stars quantity={3} />)
    expect(screen.getAllByTestId('star-outline')).toHaveLength(2)
  })

  it('should execute callback on click in star', () => {
    const onClick = jest.fn()
    render(<Stars onClick={onClick} />)
    screen.getByTestId('star-solid').click()
    expect(onClick).toBeCalledTimes(1)
  })

  it('should ignore callback when onclick is null', () => {
    render(<Stars />)
    screen.getByTestId('star-solid').click()
  })

  describe('<Star />', () => {
    it('should render component correctly', () => {
      const { container } = render(<Star size={1} />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
