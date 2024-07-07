import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:4000/graphql';

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    // Add any headers here
  },
});
