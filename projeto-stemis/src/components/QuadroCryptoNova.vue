<template>
  <div class="quadro-cripto">
    <h2>🆕 Novas Listagens</h2>
    <ul v-if="moedas.length">
      <li v-for="moeda in moedas" :key="moeda.symbol">
        <div class="moeda-info">
          <span>{{ moeda.symbol }}</span>
        </div>
        <div class="moeda-preco">
          <strong>${{ parseFloat(moeda.lastPrice).toFixed(4) }}</strong>
          <span
            :class="{
              positivo: parseFloat(moeda.priceChangePercent) > 0,
              negativo: parseFloat(moeda.priceChangePercent) < 0,
            }"
          >
            ${{ parseFloat(moeda.priceChange).toFixed(4) }} ({{
              parseFloat(moeda.priceChangePercent).toFixed(2)
            }}%)
          </span>
        </div>
      </li>
    </ul>
    <p v-else>Carregando...</p>
    <div class="ver-mais">
      <a href="/cryptos" class="ver-mais-link">🔍 Ver Mais Moedas</a>
    </div>
  </div>
</template>

<script>
import { apiBinance } from "../services/api";

export default {
  name: "QuadroCryptoNova",
  data() {
    return {
      moedas: [],
      simbolosNovasMoedas: [
        "ANIMEUSDT",
        "TRUMPUSDT",
        "SOLVUSDT",
        "AIXBTUSDT",
        "CGPTUSDT",
      ],
    };
  },
  mounted() {
    this.buscarNovasMoedas();
    setInterval(this.buscarNovasMoedas, 15000); // TEMPO DE ATULIZAÇÃO
  },
  methods: {
    async buscarNovasMoedas() {
      try {
        const resposta = await apiBinance.get("/ticker/24hr");
        this.moedas = resposta.data.filter((moeda) =>
          this.simbolosNovasMoedas.includes(moeda.symbol)
        );
      } catch (erro) {
        console.error("Erro ao buscar novas criptomoedas:", erro);
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
