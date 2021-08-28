import { render } from 'utils/test-utils'
import ErrorMessage from '.'

describe('<ErrorMessage />', () => {
  it('should render component correctly', () => {
    const { container } = render(<ErrorMessage />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
