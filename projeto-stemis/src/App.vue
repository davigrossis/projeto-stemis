<template>
  <div>
    <AppNavbar />
    <HomeView />
    <FooterComp />
  </div>
</template>

<script>
import AppNavbar from "./components/NavbarComp.vue";
import HomeView from "./views/HomeView.vue";
import "./styles/global.css";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    HomeView,
    FooterComp,
  },
};
</script>

<style></style>
