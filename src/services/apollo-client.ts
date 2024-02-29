import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { provide } from "vue";

export function createApolloClient() {
  return new ApolloClient({
    uri: "http://localhost:8010/proxy/graphql",
    cache: new InMemoryCache(),
  });
}

export const apolloClient = createApolloClient();
provide("apollo", apolloClient);

// http://localhost:8010/proxy
