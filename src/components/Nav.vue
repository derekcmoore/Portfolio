<template>
  <nav :class="{ scrolled: scrolled }">
    <div class="nav-content">
      <div class="title">Derek Moore</div>
      <div class="occupation">Software Engineer</div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  computed: {},
  data() {
    return {
      scrolled: false,
    };
  },
  components: {},
  created() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      if (window.innerWidth >= 1000)
        this.scrolled = document.getElementById("home").scrollTop >= 286;
      else this.scrolled = document.getElementById("home").scrollTop >= 66;
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  width: 100%;
  padding: 25px 0px;
  z-index: 9999;
  overflow-y: hidden;
  top: 0;
  padding-left: 30px;
  padding-right: 30px;
  background-color: transparent;
  color: #ffffff;
  transition: background-color 0.1s ease;
  box-sizing: border-box;

  &.scrolled {
    box-shadow: 0 3px 8px rgb(0 0 0 / 15%);
    background-color: #fff;
    color: #2c3e50;
    height: auto;
  }

  .nav-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;

    .title {
      display: inline-block;
      font-size: 40px;
      font-weight: 500;
      margin-right: 15px;

      @media (max-width: $responsive-width) {
        font-size: 1.5rem;
      }
    }

    .occupation {
      display: inline-block;
    }
  }
}
</style>
