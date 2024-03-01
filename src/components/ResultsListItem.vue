<template>
  <ul v-if="draw && draw.date">
    <li>
      <h3 data-testid="results-list-item-date-title">Draw Date:</h3>
      <time>{{ draw.date }}</time>
    </li>
    <li>
      <h3 data-testid="results-list-item-type-title">Jackpot:</h3>
      <p>{{ draw.jackpot }} €</p>
    </li>
    <li>
      <h3 data-testid="results-list-item-numbers-title">Numbers:</h3>
      <p>
        {{
          draw.numbers
            .map((number: Number) => {
              return number;
            })
            .join(", ")
        }}
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import { PropType } from "vue";

export interface Draw {
  date: string;
  jackpot: number;
  numbers: number[];
}

export default {
  name: "ResultsListItem",
  props: {
    draw: Object as PropType<Draw>,
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  max-width: 15rem;
  margin: 1.25rem auto;
  padding: 1rem 1.25rem;
  background: rgba(66, 185, 131, 0.3);
  border-radius: 0.75rem;

  @media only screen and (min-width: 600px) {
    display: flex;
    flex: 1 1 30%;
    justify-content: space-between;
    padding: 1.25rem 2.5rem;
    margin: 1.5rem auto;
    max-width: 25rem;
  }
}

li:not(:last-child) {
  margin-bottom: 1rem;

  @media only screen and (min-width: 600px) {
    margin-bottom: 0;
  }
}

h3 {
  font-size: 0.9rem;
  margin-block: 0 0.25rem;

  @media only screen and (min-width: 600px) {
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
  }
}

p,
time {
  display: inline-block;
  font-size: 0.8rem;
  margin-block: 0;

  @media only screen and (min-width: 600px) {
    font-size: 0.9rem;
  }
}
</style>
