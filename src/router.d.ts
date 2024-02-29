import { Router, RouteRecordRaw } from "vue-router";

declare module "vue-router" {
  const router: Router; // Change this to the actual type of your router
  export { router, RouteRecordRaw };
}
