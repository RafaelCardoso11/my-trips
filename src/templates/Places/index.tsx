import { GetPlaceBySlugQuery } from 'graphql/generated/graphql'
import * as S from './styles'

export const PlaceTemplate: React.FC<GetPlaceBySlugQuery> = ({ place }) => {
  return (
    <S.Content>
      <h1>{place?.name}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: String(place?.description?.html) }}
      ></div>

      {place?.gallery.map((image) => (
        <img key={image.id} src={image.url} alt={place.name} />
      ))}
    </S.Content>
  )
}
