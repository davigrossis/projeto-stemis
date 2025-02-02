<template>
  <div class="quadro-cripto">
    <h2>📊 Moedas Populares</h2>

    <ul v-if="moedas.length">
      <li v-for="moeda in moedas" :key="moeda.id">
        <div class="moeda-info">
          <img :src="moeda.image" :alt="moeda.name" class="moeda-icon" />
          <span>{{ moeda.name }} ({{ moeda.symbol.toUpperCase() }})</span>
        </div>

        <div class="moeda-preco">
          <strong> ${{ moeda.current_price.toLocaleString() }}</strong>

          <span
            :class="{
              positivo: moeda.price_change_percentage_24h > 0,
              negativo: moeda.price_change_percentage_24h < 0,
            }"
          >
            ${{ moeda.price_change_24h.toFixed(2) }} ({{
              moeda.price_change_percentage_24h.toFixed(2)
            }}%)
          </span>
        </div>
      </li>
    </ul>

    <p v-else>Carregando...</p>

    <div class="ver-mais">
      <a href="#" class="ver-mais-link">🔍 Ver Mais Moedas</a>
    </div>
  </div>
</template>

<script>
import { api } from "../services/api";

export default {
  name: "QuadroCrypto",
  data() {
    return {
      moedas: [],
    };
  },
  mounted() {
    this.buscarMoedas();
    setInterval(this.buscarMoedas, 300000); // TEMPORIZADOR PARA ATUALIZAR O QUADRO
  },
  methods: {
    async buscarMoedas() {
      try {
        const resposta = await api.get("/coins/markets", {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 5, // SELEÇÃO DE MOEDAS NO QUADRO
            page: 1,
            sparkline: false,
            price_change_percentage: "24h", // TEMPO PARA BUSCAR CRYPTOS
          },
        });
        this.moedas = resposta.data;
      } catch (erro) {
        console.error("Erro ao buscar criptomoedas:", erro);
      }
    },
  },
};
</script>

<style scoped>
.quadro-cripto {
  width: 30vw;
  background: #1e1e1e;
  color: white;
  padding: 2vh;
  border-radius: 1vh;
  box-shadow: 0px 0.5vh 1vh rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
}

.quadro-cripto h2 {
  text-align: center;
  font-size: 2vh;
  margin-bottom: 2vh;
}

/* Lista de moedas */
ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 0;
  border-bottom: 0.2vh solid rgba(255, 255, 255, 0.2);
}

li:last-child {
  border-bottom: none;
}

.moeda-info {
  display: flex;
  align-items: center;
}

.moeda-icon {
  width: 3vh;
  height: 3vh;
  margin-right: 1vw;
}

.moeda-preco {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.moeda-preco strong {
  font-size: 2vh;
}

.positivo {
  color: #4caf50;
}

.negativo {
  color: #f44336;
}

.ver-mais {
  text-align: center;
  margin-top: 2vh;
}

.ver-mais-link {
  color: #ffcc00;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.8vh;
}

.ver-mais-link:hover {
  text-decoration: underline;
}
</style>
