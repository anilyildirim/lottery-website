<template>
  <ul>
    <li v-for="draw in draws" :key="draw.date">
      <ResultsListItem :draw="draw" />
    </li>
  </ul>
</template>

<script lang="ts">
import { PropType } from "vue";
import ResultsListItem from "@/components/ResultsListItem.vue";
import { Draw } from "@/components/ResultsListItem.vue";

export default {
  name: "ResultsList",
  props: {
    draws: Array as PropType<Draw[]>,
  },
  components: {
    ResultsListItem,
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
}
</style>
