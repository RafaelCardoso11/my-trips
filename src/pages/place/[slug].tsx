import client from 'graphql/client'
import { GetPlacesQuery, GetPlaceBySlugQuery } from 'graphql/generated/graphql'
import { GET_PLACE_BY_SLUG, GET_SLUGS_PLACES } from 'graphql/queries'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { PlaceTemplate } from 'templates/Places'

export default function Place({ place }: GetPlaceBySlugQuery) {
  const router = useRouter()

  //pode retornar um loading enquanto esta sendo criado
  if (router.isFallback) return null

  return <PlaceTemplate place={place} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_SLUGS_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: params?.slug
    }
  )

  if (!place) return { notFound: true }

  return {
    props: {
      place
    }
  }
}
