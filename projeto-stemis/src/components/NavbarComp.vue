<template>
  <header>
    <nav class="container">
      <a href="/">
        <img src="../assets/CryptoValor.png" alt="CrypoValue" id="logo" />
      </a>
      <div class="botoes">
        <a href="/"> <h1>Home</h1> </a>
        <a href="/cryptos"> <h1>Crypos</h1> </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#logo {
  width: 8vw;
  height: 20vh;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.botoes {
  display: flex;
  gap: 2vw;
}
.botoes a {
  color: white;
}
</style>
