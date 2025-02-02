import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CryptoView from "../views/CryptoView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/cryptos",
    component: CryptoView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
