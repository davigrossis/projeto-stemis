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
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
main {
  background-color: var(--color-background-home);
  align-items: center;
  justify-content: space-between;
}
.top {
  display: flex;
  height: 70vh;
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
</style>
