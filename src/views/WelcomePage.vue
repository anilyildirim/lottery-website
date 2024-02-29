<template>
  <img alt="company logo" src="../assets/logo.jpg" />
  <h1>Welcome to our homepage!</h1>
  <p>Checkout the winners by clicking the button below:</p>
  <router-link to="/ResultsPage">
    <button>Lottery Page</button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomePage",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin-top: 40px;
}
button {
  border: none;
  background-color: #42b983;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 20px;

  &:hover {
    background-color: #35495e;
  }
}
</style>
