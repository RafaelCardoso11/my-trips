import Link from 'next/link'
import * as S from './styles'
import { ReactNode } from 'react'

export type LinkWrapperProps = {
  href: string
  children: ReactNode
}
export const LinkWrapper: React.FC<LinkWrapperProps> = ({ href, children }) => {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  )
}
