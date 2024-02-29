import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { apolloClient } from "./services/apollo-client";

const app = createApp(App);
app.use(router);
app.provide("apollo", apolloClient);
app.mount("#app");
