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
import { logEvent } from "firebase/analytics";

export default {
  components: {
    Nav,
  },
  created() {
    logEvent(this.$analytics, "page_view", {
      env: process.env.NODE_ENV,
    });
  },
};
</script>

<style lang="scss">
:root {
  --white: #ffffff;
  --off-white: #f0f2fb;
  --font-color: #263238;
  --grey: #7b8386;
  --heading-bg: url("~@/assets/img/heading-bg.svg");
  --black-rgb: 0 0 0;
  --image-filter: none;
}

:root.dark {
  --white: #151515;
  --off-white: #202124;
  --font-color: #bdc1c6;
  --grey: #848c90;
  --heading-bg: url("~@/assets/img/heading-bg-dark.svg");
  --black-rgb: 256 256 256;
  --image-filter: invert(61%) sepia(6%) saturate(269%) hue-rotate(155deg)
    brightness(97%) contrast(85%);
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
  font-weight: 300;
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
