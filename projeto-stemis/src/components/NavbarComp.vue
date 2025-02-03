<template>
  <header>
    <nav class="container">
      <a href="/">
        <img src="../assets/CryptoValor.png" alt="CrypoValue" id="logo" />
      </a>
      <div class="botoes">
        <a href="/"> <h1>Home</h1> </a>
        <a href="/cryptos"> <h1>Cryptos</h1> </a>
      </div>
      <button class="menu-icon" @click="toggleMenu">☰</button>
    </nav>

    <div v-if="menuAberto" class="menu-overlay" @click="toggleMenu"></div>

    <div v-if="menuAberto" class="menu-mobile">
      <a href="/" @click="toggleMenu">Home</a>
      <a href="/cryptos" @click="toggleMenu">Cryptos</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      menuAberto: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuAberto = !this.menuAberto;
    },
  },
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
  padding: 0 4vw;
  position: relative;
  z-index: 10;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

#logo {
  width: 12vw;
  height: auto;
}

.botoes {
  display: flex;
  gap: 2vw;
}

.botoes a {
  color: black;
  text-decoration: none;
}

.menu-icon {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.menu-overlay {
  position: fixed;
  top: 8vh;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
}

.menu-mobile {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 8vh;
  left: 0;
  width: 100%;
  background: var(--color-background-nav);
  text-align: center;
  padding: 1vh 0;
  z-index: 10;
  border-top: 1px solid #000000;
}

.menu-mobile a {
  color: black;
  padding: 1vh;
  text-decoration: none;
  display: block;
}

@media (max-width: 768px) {
  nav {
    justify-content: space-between;
  }

  .botoes {
    display: none;
  }

  .menu-icon {
    display: block;
  }

  .menu-mobile {
    display: flex;
  }

  #logo {
    height: 25vh;
    width: 26vw;
  }
}
</style>
