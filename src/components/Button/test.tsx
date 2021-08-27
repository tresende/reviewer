import { render, screen } from 'utilts/test-utils'

import Button from '.'

describe('<Button />', () => {
  it('should render outline button by default', () => {
    const { container } = render(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      padding: '0.6rem 1.2rem',
      'font-size': '1.8rem',
      background: 'rgb(255, 255, 255)',
      color: 'rgb(250, 186, 64)'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render solid button ', () => {
    const { container } = render(<Button fillType="solid">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      padding: '0.6rem 1.2rem',
      'font-size': '1.8rem',
      color: 'rgb(255, 255, 255)',
      background: 'rgb(250, 186, 64)'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a disabled Button', () => {
    const onClick = jest.fn()

    render(
      <Button onClick={onClick} disabled>
        Buy now
      </Button>
    )
    screen.getByRole('button', { name: /buy now/i }).click()
    expect(onClick).not.toHaveBeenCalled()
  })
})
