import { render, screen } from 'utils/test-utils'
import Comment from 'models/Comment'
import Component from '.'

describe('<Comment />', () => {
  it('should render component correctly with mocked parameters', () => {
    const mock = {
      date: new Date(2019, 1, 2, 2, 2),
      photo: '',
      user: 'Thiago',
      text: 'SAMPLE',
      id: 1,
      score: 3
    } as Comment

    const { container } = render(<Component comment={mock} />)

    expect(screen.getByText('Thiago')).toBeInTheDocument()
    expect(screen.getByText('SAMPLE')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
