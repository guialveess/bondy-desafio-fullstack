import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const GRAPHQL_URL = 'http://localhost:3000/local/desafio'

export const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHQL_URL }),
  cache: new InMemoryCache(),
})
