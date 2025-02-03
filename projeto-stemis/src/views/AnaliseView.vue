<template>
  <v-container fluid class="pa-4">
    <h2 class="text-center mb-6">
      Análise da Criptomoeda {{ moeda.name || "Carregando..." }}
    </h2>

    <v-card v-if="moeda" class="pa-4">
      <v-card-title class="d-flex align-center">
        <v-img
          :src="moeda.image"
          :alt="moeda.name"
          class="mr-3"
          max-width="40"
          max-height="40"
          contain
        />
        <div class="title font-weight-bold">{{ moeda.name }}</div>
      </v-card-title>

      <v-card-text>
        <div class="text-h6">
          Preço Atual:
          <span v-if="moeda.current_price !== null">
            ${{ moeda.current_price.toLocaleString() }}
          </span>
          <span v-else>Carregando...</span>
        </div>

        <div
          v-if="moeda.price_change_percentage_24h !== null"
          :class="{
            'text-success': moeda.price_change_percentage_24h > 0,
            'text-error': moeda.price_change_percentage_24h < 0,
          }"
        >
          Variação: {{ moeda.price_change_percentage_24h.toFixed(2) }}%
        </div>
        <div v-else>Carregando dados...</div>
      </v-card-text>

      <LineChart v-if="historico.length" :dados="historico" />
      <!-- ALOCAÇÃO DO GRAFICO -->
      <v-alert v-else type="info"> Carregando dados do gráfico... </v-alert>
    </v-card>

    <v-alert v-else type="warning"> Carregando dados... </v-alert>
  </v-container>
</template>

<script>
import { api } from "../services/api";
import LineChart from "../components/LineChart.vue";

export default {
  name: "AnaliseView",
  components: { LineChart },
  data() {
    return {
      moeda: {
        name: this.$route.query.nome || "Carregando...",
        image: this.$route.query.img || "",
        current_price: this.validarNumero(this.$route.query.preco),
        price_change_percentage_24h: this.validarNumero(
          this.$route.query.variacao
        ),
      },
      historico: [],
    };
  },
  async mounted() {
    const moedaId = this.$route.params.id;
    if (!moedaId) return;

    try {
      const { data } = await api.get(`/coins/${moedaId}/market_chart`, {
        params: { vs_currency: "usd", days: "30", interval: "daily" },
      });

      this.historico = data.prices.map(([timestamp, price]) => ({
        data: new Date(timestamp).toLocaleDateString(),
        preco: price,
      }));
    } catch (erro) {
      console.error("Erro ao buscar histórico de preços:", erro);
    }
  },
  methods: {
    validarNumero(valor) {
      const numero = parseFloat(valor);
      return isNaN(numero) ? null : numero;
    },
  },
};
</script>

<style scoped>
h2 {
  color: #ffffff;
}
.text-success {
  color: #4caf50;
}
.text-error {
  color: #f44336;
}
</style>
