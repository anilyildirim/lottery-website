import { RouteRecordRaw } from "vue-router";

declare module "vue-router" {
  const router: any; // Change this to the actual type of your router
  export { router, RouteRecordRaw };
}
