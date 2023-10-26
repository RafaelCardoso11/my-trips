import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages {
    pages {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`
export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String) {
    page(where: { slug: $slug }) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_SLUGS_PAGES = gql`
  query getSlugsPages($first: Int) {
    pages(first: $first) {
      slug
    }
  }
`

export const GET_PLACES = gql`
  query getPlaces {
    places {
      id
      name
      slug
      description {
        html
      }
      location {
        latitude
        longitude
      }
      gallery {
        id
        url
      }
    }
  }
`
export const GET_SLUGS_PLACES = gql`
  query getSlugsPlaces($first: Int) {
    places(first: $first) {
      id
      slug
    }
  }
`
export const GET_PLACE_BY_SLUG = gql`
  query getPlaceBySlug($slug: String) {
    place(where: { slug: $slug }) {
      id
      name
      description {
        html
      }
      location {
        latitude
        longitude
      }
      gallery {
        id
        url
      }
    }
  }
`
