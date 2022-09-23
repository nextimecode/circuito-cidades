import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl8eebjay2ljk01ule7s3f8hx/master',
  cache: new InMemoryCache()
})
