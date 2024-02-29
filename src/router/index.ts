import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../views/WelcomePage.vue";
import ResultsPage from "../views/ResultsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: WelcomePage },
    { path: "/ResultsPage", component: ResultsPage },
    // Add other routes as needed
  ],
});

export default router; // Add this line to export the 'router' instance
