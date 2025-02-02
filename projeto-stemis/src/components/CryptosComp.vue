<template>
  <v-container fluid class="crypto-view pa-4">
    <h2 class="text-center mb-6">📊 Todas as Criptomoedas</h2>

    <v-row>
      <v-col
        v-for="moeda in moedasFiltradas"
        :key="moeda.id"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
      >
        <v-card @click="Analise(moeda.id)" class="ma-2 flex-grow-1" outlined>
          <v-card-title class="d-flex align-center">
            <v-img
              :src="moeda.image"
              :alt="moeda.name"
              class="mr-3"
              max-width="40"
              max-height="40"
              contain
            ></v-img>
            <div>
              <div class="title font-weight-bold">{{ moeda.name }}</div>
              <div class="subtitle-2">{{ moeda.symbol.toUpperCase() }}</div>
            </div>
          </v-card-title>

          <v-card-text>
            <div class="text-h6">
              ${{ moeda.current_price.toLocaleString() }}
            </div>
            <div
              :class="{
                'text-success': moeda.price_change_percentage_24h > 0,
                'text-error': moeda.price_change_percentage_24h < 0,
              }"
            >
              ${{ moeda.price_change_24h.toFixed(2) }} ({{
                moeda.price_change_percentage_24h.toFixed(2)
              }}%)
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { api } from "../services/api";

export default {
  name: "CryptosComp",
  props: {
    filtro: String, // PASSANDO PROPS COMO PARAMETRO
  },
  data() {
    return {
      moedas: [],
    };
  },
  computed: {
    moedasFiltradas() {
      if (!this.filtro) {
        return this.moedas;
      }
      const termo = this.filtro.toLowerCase();
      return this.moedas.filter(
        (moeda) =>
          moeda.name.toLowerCase().includes(termo) ||
          moeda.symbol.toLowerCase().includes(termo)
      );
    },
  },
  mounted() {
    this.buscarMoedas();
    setInterval(this.buscarMoedas, 300000);
  },
  methods: {
    async buscarMoedas() {
      try {
        const resposta = await api.get("/coins/markets", {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 100,
            page: 1,
            sparkline: false,
            price_change_percentage: "24h",
          },
        });
        this.moedas = resposta.data;
      } catch (erro) {
        console.error("Erro ao buscar criptomoedas:", erro);
      }
    },
    Analise(id) {
      this.$router.push(`/analise/${id}`);
    },
  },
};
</script>

<style scoped>
.crypto-view {
  background-color: #1e1e1e;
  color: white;
  min-height: 100vh;
}

h2 {
  font-family: Arial, sans-serif;
}

.text-success {
  color: #4caf50;
}

.text-error {
  color: #f44336;
}
</style>
