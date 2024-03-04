<template>
  <ul
    v-if="!loading && draws && draws.length"
    data-testid="result-list"
    class="result-list"
  >
    <li v-for="draw in draws" :key="draw.date">
      <ResultsListItem :draw="draw" data-testid="results-list-item" />
    </li>
  </ul>
  <p
    class="warning"
    v-if="!loading && (!draws || draws.length === 0)"
    data-testid="warning"
  >
    There are no available draws!
  </p>
  <p v-if="loading" class="loading" data-testid="loading">Loading...</p>
</template>

<script lang="ts">
import { PropType, Ref, ref, watch } from "vue";
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
    const loading: Ref<boolean> = ref(true);

    // Watch for changes in the draws prop
    watch(
      () => props.draws,
      () => {
        // Check if draws is empty and simulate loading completion after a delay of 3 seconds
        if (props.draws.length === 0) {
          setTimeout(() => {
            loading.value = false;
          }, 5000);
        } else {
          // If draws is not empty, set loading to false immediately
          loading.value = false;
        }
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
