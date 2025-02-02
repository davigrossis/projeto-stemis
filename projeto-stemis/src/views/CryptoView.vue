<template>
  <v-container
    class="fill-height d-flex flex-column justify-start align-center"
  >
    <v-row class="w-100" justify="center">
      <v-col cols="12" md="8">
        <CryptoPesquisa @filtrar-moedas="atualizarFiltro" />
      </v-col>
    </v-row>

    <v-row class="w-100" justify="center">
      <v-col cols="12" md="8">
        <CryptosComp :filtro="termoBusca" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CryptoPesquisa from "../components/CryptoPesquisa.vue";
import CryptosComp from "../components/CryptosComp.vue";

export default {
  name: "CryptoView",
  components: {
    CryptosComp,
    CryptoPesquisa,
  },
  data() {
    return {
      termoBusca: "",
    };
  },
  methods: {
    atualizarFiltro(termo) {
      this.termoBusca = termo;
    },
  },
};
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
</style>
