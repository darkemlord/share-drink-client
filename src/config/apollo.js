import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httplink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: httplink
})

export default client;
