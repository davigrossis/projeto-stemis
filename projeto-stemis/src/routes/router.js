import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CryptoView from "../views/CryptoView.vue";
import AnaliseView from "../views/AnaliseView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/cryptos",
    component: CryptoView,
  },
  {
    path: "/analise/:id",
    component: AnaliseView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
