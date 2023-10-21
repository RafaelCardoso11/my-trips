import { LinkWrapper } from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: {
    html: string
  }
}
export const PageTemplate: React.FC<PageTemplateProps> = ({
  heading,
  body
}) => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading>{heading}</S.Heading>
      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body.html }}></div>
      </S.Body>
    </S.Content>
  )
}
