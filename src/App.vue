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
  --off-white: #f5f2fc;
  --font-color: #263238;
  --grey: #494e50;
  --main-box-shadow: rgba(241, 179, 195, 1) 5px 5px,
    rgba(241, 179, 195, 0.3) 10px 10px, rgba(241, 179, 195, 0.2) 15px 15px,
    rgba(241, 179, 195, 0.1) 20px 20px, rgba(241, 179, 195, 0.05) 25px 25px;
  --main-box-shadow-mobile: rgba(241, 179, 195, 1) 0px 5px,
    rgba(241, 179, 195, 0.3) 0px 10px, rgba(241, 179, 195, 0.2) 0px 15px,
    rgba(241, 179, 195, 0.1) 0px 20px, rgba(241, 179, 195, 0.05) 0px 25px;
  --heading-bg: url("~@/assets/img/heading-bg.svg");
  --black-rgb: 0 0 0;
}

:root.dark {
  --white: #151515;
  --off-white: #202124;
  --font-color: #bdc1c6;
  --grey: #494e50;
  --main-box-shadow: none;
  --main-box-shadow-mobile: none;
  --heading-bg: url("~@/assets/img/heading-bg-dark.svg");
  --black-rgb: 256 256 256;
}

body {
  padding: 0;
  margin: 0;
  line-height: 1.5;
  background-color: $off-white;
  background-position: center;

  -webkit-transition: background-color 0.25s ease-in;
  transition: background-color 0.25s ease-in;
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
