import { Router, RouteRecordRaw } from "vue-router";

declare module "vue-router" {
  const router: Router;
  export { router, RouteRecordRaw };
}
