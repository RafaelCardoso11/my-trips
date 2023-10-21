import { LinkWrapper } from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline'

const Map = dynamic(
  async () => {
    const module = await import('components/Map')

    return module.Map
  },
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map />
    </>
  )
}
