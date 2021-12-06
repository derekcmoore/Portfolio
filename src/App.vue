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
body {
  padding: 0;
  margin: 0;
  line-height: 1.5;
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: "Andale Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content {
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 2.5rem;
  }
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  border: 1px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: #aaaaaa;
}

*,
::after,
::before {
  box-sizing: inherit;
}
</style>
