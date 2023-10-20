import { render, screen } from '@testing-library/react'
import { LinkWrapper } from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    const props = {
      href: '/my-link',
      children: 'anything'
    }
    render(<LinkWrapper {...props} />)

    const children = screen.getByRole('link', { name: props.children })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', props.href)
  })
})
