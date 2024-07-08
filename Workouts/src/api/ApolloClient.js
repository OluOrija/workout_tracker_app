// ApolloClient.js
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql', // Your GraphQL API URL
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
    uri: 'https://localhost:4443/graphql', // Your GraphQL API URL
    cache: new InMemoryCache(),
  });

export default client;
