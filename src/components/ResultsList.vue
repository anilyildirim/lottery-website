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
import { PropType, ref, watch } from "vue";
import ResultsListItem from "@/components/ResultsListItem.vue";
import { Draw } from "@/components/ResultsListItem.vue";

interface ResultsListProps {
  draws: Draw[];
}

export default {
  name: "ResultsList",
  props: {
    draws: Array as PropType<Draw[]>,
  },
  components: {
    ResultsListItem,
  },
  setup(props: ResultsListProps) {
    const loading = ref(true);

    // Watch for changes in the draws prop
    watch(
      () => props.draws,
      () => {
        // Simulate loading completion when draws change
        loading.value = false;
      }
    );

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
