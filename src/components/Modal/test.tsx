import { render, screen, fireEvent } from 'utils/test-utils'
import Modal from '.'

describe('<Modal />', () => {
  it('should call onclose callback when user press escape', () => {
    const onClose = jest.fn()
    const { container } = render(<Modal onClose={onClose} />)
    fireEvent.keyUp(container, { key: 'Escape' })

    expect(onClose).toBeCalledTimes(1)
  })

  it("should't call client in form div", () => {
    const onClose = jest.fn()
    render(
      <Modal onClose={onClose} open>
        <button>Click!</button>
      </Modal>
    )
    screen.getByRole('button').click()
    expect(onClose).toBeCalledTimes(0)
  })

  it('should add fadeIn and bounceIn classes', () => {
    const onClose = jest.fn()
    const { container } = render(<Modal onClose={onClose} open />)
    expect(container.firstChild?.firstChild).toHaveClass('animate__bounceInUp')
    expect(container.firstChild).toHaveClass('animate__fadeIn')
  })

  it('should add fadeOut and bounceOut classes', () => {
    const onClose = jest.fn()
    const { container } = render(<Modal onClose={onClose} open={false} />)
    expect(container.firstChild?.firstChild).toHaveClass('animate__bounceOutUp')
    expect(container.firstChild).toHaveClass('animate__fadeOut')
  })
})
