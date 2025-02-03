<template>
  <main>
    <div class="top">
      <div class="texto">
        <div class="text-top">Acompanhe o mercado Crypto,</div>
        <div class="text-bottom">Acompanhe CryptoValor</div>
      </div>
      <div class="home-imagem">
        <img src="../assets/HomePage.png" alt="HomePage" />
      </div>
    </div>
    <div class="mid">
      <QuadroCrypto />
      <QuadroCryptoNova />
    </div>
  </main>
</template>

<script>
import QuadroCrypto from "../components/QuadroCrypto.vue";
import QuadroCryptoNova from "../components/QuadroCryptoNova.vue";

export default {
  name: "HomeView",
  components: {
    QuadroCrypto,
    QuadroCryptoNova,
  },
};
</script>

<style scoped>
main {
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 4vw 0;
}

.top {
  display: flex;
  height: 70vh;
  align-items: center;
}

.texto {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 6vh;
  padding: 3vw;
  font-weight: bold;
}

.home-imagem img {
  display: flex;
  height: 70vh;
  max-width: 100%;
  flex: 1;
  justify-content: flex-end;
}

.mid {
  display: flex;
  justify-content: center;
  gap: 5vw;
}

@media (max-width: 768px) {
  main {
    display: flex;
    justify-content: flex-start;
    gap: 5vh;
  }
  .top {
    flex-direction: column;
    height: auto;
    text-align: center;
  }

  .texto {
    font-size: 4vh;
    padding: 2vw;
  }

  .home-imagem {
    display: none;
  }

  .mid {
    flex-direction: column;
    align-items: center;
    gap: 3vh;
  }
}

@media (max-width: 480px) {
  main {
    display: flex;
    justify-content: flex-start;
    gap: 5vh;
  }
  .texto {
    font-size: 3.5vh;
  }
}
</style>
