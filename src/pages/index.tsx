import { HomeTemplate } from 'templates/Home'
import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesQuery } from 'graphql/generated/graphql'

export default function Home({ places }: GetPlacesQuery) {
  return <HomeTemplate places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    props: { places }
  }
}
