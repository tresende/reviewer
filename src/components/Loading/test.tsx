import { render, screen } from 'utils/test-utils'
import Loading from '.'

describe('<Loading />', () => {
  it('should render empty component when loading context is false', () => {
    const { container } = render(<Loading />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render empty component when loading context is false', () => {
    const loadingProviderProps = {
      start: jest.fn(),
      stop: jest.fn(),
      loading: true,
      text: 'Carregando...'
    }

    render(<Loading />, { loadingProviderProps })
    screen.getByText(/Carregando.../i).click()
  })
})
