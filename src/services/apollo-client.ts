import { ApolloClient, InMemoryCache } from "@apollo/client/core";

export function createApolloClient() {
  return new ApolloClient({
    uri: "http://localhost:8010/proxy/graphql",
    cache: new InMemoryCache(),
  });
}

export const apolloClient = createApolloClient();
