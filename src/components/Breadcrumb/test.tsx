import { render } from 'utils/test-utils'
import Breadcrumb from '.'

describe('<Breadcrumb />', () => {
  it('should render component correctly', () => {
    const { container } = render(<Breadcrumb />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
