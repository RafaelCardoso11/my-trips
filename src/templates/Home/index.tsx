import { LinkWrapper } from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import dynamic from 'next/dynamic'
import { GetPlacesQuery } from 'graphql/generated/graphql'

const Map = dynamic(
  async () => {
    const module = await import('components/Map')

    return module.Map
  },
  { ssr: false }
)

export const HomeTemplate: React.FC<GetPlacesQuery> = ({ places }) => {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
