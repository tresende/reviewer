import { render, screen } from 'utils/test-utils'
import Home from '.'
import Mock from 'mocks/mock'
import { ReviewHeaderProps } from 'components/ReviewHeader'
import { ModalProps } from 'components/Modal'

jest.mock('components/ReviewHeader', () => ({
  __esModule: true,
  default: function Mock({ onReview }: ReviewHeaderProps) {
    return <button onClick={onReview} data-testid="ReviewHeaderCallback" />
  }
}))

jest.mock('components/Modal', () => ({
  __esModule: true,
  default: function Mock({ onClose, open }: ModalProps) {
    return (
      <>
        {open && <span data-testid="ModalIsOpen" />}
        <button onClick={onClose} data-testid="ModalCallback" />
      </>
    )
  }
}))

describe('<Home />', () => {
  it('should open modal', () => {
    const { container } = render(<Home data={Mock} />)
    screen.getByTestId('ReviewHeaderCallback').click()

    expect(screen.getByTestId('ModalIsOpen')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should close modal', () => {
    render(<Home data={Mock} />)
    screen.getByTestId('ReviewHeaderCallback').click()
    screen.getByTestId('ModalCallback').click()

    expect(screen.queryByTestId('ModalIsOpen')).not.toBeInTheDocument()
  })
})
