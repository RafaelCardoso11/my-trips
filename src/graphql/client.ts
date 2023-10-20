import { GraphQLClient } from 'graphql-request'

const url = process.env.GRAPHQL_HOST || ''

const client = new GraphQLClient(url, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
