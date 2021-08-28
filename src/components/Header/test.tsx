import { render } from 'utils/test-utils'
import Header from '.'

describe('<Header />', () => {
  it('should render the header', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
