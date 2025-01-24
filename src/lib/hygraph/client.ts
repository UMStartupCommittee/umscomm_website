import { GraphQLClient } from 'graphql-request';

if (!process.env.NEXT_PUBLIC_HYGRAPH_API_ENDPOINT) {
  throw new Error('NEXT_PUBLIC_HYGRAPH_API_ENDPOINT is not defined');
}

export const hygraphClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_API_ENDPOINT
);