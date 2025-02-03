<template>
  <v-container>
    <v-text-field
      v-model="termo"
      label="Pesquisar criptomoeda..."
      outlined
      clearable
      class="mb-4 campo-branco"
      @input="emitirFiltro"
    ></v-text-field>
  </v-container>
</template>

<script>
export default {
  name: "CryptoPesquisa",
  data() {
    return {
      termo: "",
    };
  },
  methods: {
    emitirFiltro() {
      this.$emit("filtrar-moedas", this.termo); //EMITIR FILHO
    },
  },
};
</script>

<style scoped>
.campo-branco >>> .v-input__control {
  background-color: white !important;
  border: 1px solid black !important;
}

.campo-branco >>> input {
  color: black !important;
}
</style>
