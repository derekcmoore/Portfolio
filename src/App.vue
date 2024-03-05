<template>
  <div id="app">
    <Nav />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
:root {
  --white: #ffffff;
  --off-white: #f0f2fb;
  --font-color: #263238;
  --grey: #494e50;
  --heading-bg: url("~@/assets/img/heading-bg.svg");
  --black-rgb: 0 0 0;
}

:root.dark {
  --white: #151515;
  --off-white: #202124;
  --font-color: #bdc1c6;
  --grey: #6f7476;
  --heading-bg: url("~@/assets/img/heading-bg-dark.svg");
  --black-rgb: 256 256 256;
}

body {
  padding: 0;
  margin: 0;
  line-height: 1.5;
  background-color: $off-white;
  background-position: center;
  height: 100vh;
  max-height: -webkit-fill-available;

  -webkit-transition: background-color 0.1s ease-in;
  transition: background-color 0.1s ease-in;
  overflow-x: hidden;
  overflow-y: hidden;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $font-color;
}

.content {
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 2.5rem;
  }
}

*,
::after,
::before {
  box-sizing: inherit;
}
</style>
