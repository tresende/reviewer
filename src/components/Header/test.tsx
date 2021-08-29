import { render, screen } from 'utils/test-utils'
import Header from '.'

describe('<Header />', () => {
  it('should render opened header', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render closed header', () => {
    const { container } = render(<Header />)
    screen.getByTestId('open-menu').click()
    screen.getByTestId('open-menu').click()

    expect(container.firstChild).toMatchSnapshot()
  })
})
