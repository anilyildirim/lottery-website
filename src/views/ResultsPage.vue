<template>
  <h2>Winning Lotteries</h2>
  <ResultsList :draws="draws" />
</template>

<script>
import gql from "graphql-tag";
import { apolloClient } from "@/services/apollo-client";
import ResultsList from "../components/ResultsList";

const GET_DRAWS = gql`
  query getDraws($date: String, $limit: Int, $type: String!) {
    draw(date: $date, limit: $limit, type: $type) {
      draws {
        date
        jackpot
        numbers
      }
    }
  }
`;

export default {
  components: {
    ResultsList,
  },
  data() {
    return {
      draws: [],
    };
  },
  async created() {
    const { data } = await apolloClient.query({
      query: GET_DRAWS,
      variables: {
        date: "",
        limit: 10,
        type: "eurojackpot",
      },
    });

    this.draws = data.draw.draws;
  },
};
</script>

<style scoped lang="scss">
h2 {
  font-size: 1.5rem;

  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }
}
</style>
