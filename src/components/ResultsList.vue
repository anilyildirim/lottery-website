<template>
  <ul v-if="!loading && draws && draws.length" class="result-list">
    <li v-for="draw in draws" :key="draw.date">
      <ResultsListItem :draw="draw" />
    </li>
  </ul>
  <p class="warning" v-if="!loading && (!draws || draws.length === 0)">
    There are no available draws!
  </p>
  <p v-if="loading">Loading...</p>
</template>

<script lang="ts">
import { PropType, ref } from "vue";
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
  setup() {
    const loading = ref(true);

    // Simulating asynchronous data fetching
    setTimeout(() => {
      loading.value = false;
    }, 1000);

    return {
      loading,
    };
  },
};
</script>

<style scoped lang="scss">
ul.result-list {
  list-style: none;
  padding: 0;
}
p.warning {
  color: #ff0000;
}
</style>
