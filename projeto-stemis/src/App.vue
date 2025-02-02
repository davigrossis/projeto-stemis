<template>
  <div>
    <AppNavbar />
    <router-view path="$router.key" />
    <FooterComp />
  </div>
</template>

<script>
import AppNavbar from "./components/NavbarComp.vue";
import "./styles/global.css";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    FooterComp,
  },
};
</script>

<style></style>
