<template>
  <div>
    <h1>Winning Lotteries</h1>
    <ul>
      <li v-for="draw in draws" :key="draw.date">
        {{ draw.date }} - Jackpot: {{ draw.jackpot }} - Numbers:
        {{ draw.numbers }}
      </li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { apolloClient } from "@/services/apollo-client";

const GET_DRAWS = gql`
  query GetDraws($date: String, $limit: Int, $type: String!) {
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
