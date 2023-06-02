import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/NextHome.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../components/NextAbout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
