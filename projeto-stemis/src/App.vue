<template>
  <div>
    <AppNavbar />
    <HomeView />
  </div>
</template>

<script>
import AppNavbar from "./components/NavbarComp.vue";
import HomeView from "./views/HomeView.vue";
import "./styles/global.css";

export default {
  name: "App",
  components: {
    AppNavbar,
    HomeView,
  },
};
</script>

<style></style>
