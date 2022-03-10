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
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      let skillPanel = window.pageYOffset;
      if (window.innerWidth >= 1000) this.scrolled = skillPanel >= 460;
      else this.scrolled = skillPanel >= 150;
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  width: 100%;
  padding: 25px 30px;
  z-index: 9999;
  overflow-y: hidden;
  top: 0;
  background-color: transparent;
  color: $white;
  transition: background-color 0.1s ease;
  box-sizing: border-box;

  &.scrolled {
    box-shadow: 0 3px 8px rgb(0 0 0 / 15%);
    background-color: $white;
    color: $font-color;
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
