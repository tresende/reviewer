import { render, screen } from 'utils/test-utils'
import Mock from 'mocks/mock'
import ReviewComments from '.'

jest.mock('components/Comment', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="comments" />
  }
}))

describe('<ReviewComments />', () => {
  it('should render component with muiltiple comments', () => {
    const { container } = render(<ReviewComments comments={Mock.comments} />)

    expect(screen.getAllByTestId('comments')).toHaveLength(5)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render component without comments', () => {
    render(<ReviewComments comments={[]} />)

    expect(screen.queryAllByTestId('comments')).toHaveLength(0)
  })
})
