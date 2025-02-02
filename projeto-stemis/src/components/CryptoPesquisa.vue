<template>
  <v-container>
    <v-text-field
      v-model="termo"
      label="Pesquisar criptomoeda..."
      outlined
      clearable
      class="mb-4"
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
      this.$emit("filtrar-moedas", this.termo); //COMANDO PARA EMITIR PARA O FILHO
    },
  },
};
</script>
