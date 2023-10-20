import { render, screen } from '@testing-library/react'
import { Map } from '.'

describe('Map', () => {
  it('should render without any markers', () => {
    render(<Map />)

    const map = screen.getByRole('link', {
      name: /openstreetmap/i
    })
    expect(map).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    const places = [
      {
        id: 1,
        name: 'Belem',
        slug: 'belem',
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      {
        id: 2,
        name: 'Colares',
        slug: 'colares',
        location: {
          latitude: 0,
          longitude: 0
        }
      }
    ]
    render(<Map places={places} />)

    places.forEach((place) => {
      const placeTitle = screen.getByTitle(place.name)
      expect(placeTitle).toBeInTheDocument()
    })
  })
})
