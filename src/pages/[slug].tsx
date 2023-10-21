import client from 'graphql/client'
import { GET_PAGE_BY_SLUG, GET_SLUGS } from 'graphql/queries'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { PageTemplate, PageTemplateProps } from 'templates/Pages'

export default function AboutPage({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  //pode retornar um loading enquanto esta sendo criado
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await client.request(GET_SLUGS, { first: 3 })

  const paths = pages.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, {
    slug: params?.slug
  })

  if (!page) return { notFound: true }

  return {
    props: page
  }
}
