<template>
  <footer>
    <div class="footer-center">
      <div class="fontes">
        <h3>Fontes</h3>
        <a href="https://www.binance.com/" target="_blank">Binance</a>
        <a href="https://www.coinbase.com/" target="_blank">Coinbase</a>
        <a href="https://www.mercadobitcoin.com.br/" target="_blank"
          >Mercado Bitcoin</a
        >
        <a href="https://www.cryptocompare.com/" target="_blank"
          >CryptoCompare</a
        >
        <a href="https://coinmarketcap.com/" target="_blank">CoinMarketCap</a>
      </div>
      <div class="missao">
        <h3>Nossa Missão</h3>
        <p>
          No CryptoValor, nossa missão é fornecer informações atualizadas e
          precisas sobre o mercado de criptomoedas, ajudando você a tomar
          decisões informadas. Acreditamos na transparência e no acesso fácil
          aos valores das principais moedas digitais, permitindo que traders,
          investidores e entusiastas acompanhem o mercado em tempo real.
        </p>
      </div>
      <div class="comunidade">
        <h3>Comunidade</h3>
        <div class="redes-sociais">
          <a target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a target="_blank"><i class="fab fa-x-twitter"></i></a>
          <a target="_blank"><i class="fab fa-instagram"></i></a>
          <a target="_blank"><i class="fab fa-youtube"></i></a>
          <a target="_blank"><i class="fab fa-tiktok"></i></a>
        </div>
      </div>
    </div>
    <div class="cookies">
      <p>cryptovalor@2024</p>
      <p>Preferências de Cookies</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style scoped>
footer {
  height: 25vh;
  width: 100%;
  background-color: var(--color-background-nav);
  padding: 0vw 4vw 0vw 4vw;
}
.footer-center {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  justify-content: space-around;
  padding: 2vh;
  border-bottom: 1px solid #000000;
}
.fontes,
.missao {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}
.missao {
  max-width: 30vw;
}
.comunidade {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
}
.redes-sociais {
  display: flex;
  gap: 1vw;
}
.cookies {
  display: flex;
  justify-content: center;
  gap: 2vw;
  font-size: 12px;
}
</style>
